import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('dd, Do MMMM, h:mm A'),
      events: [],
      isEmpty: false,
      isLoading: true
    };
    this.queryEventInterval = null;
  }

  componentDidMount() {
    this.getEvents();
    this.queryEventInterval = setInterval(() => {
      this.getEvents();
    }, 60000);
  }

  componentWillUnmount() {
    if (this.queryEventInterval) clearInterval(this.queryEventInterval);
  }

  getEvents() {
    let that = this;
    const start = () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyCBwYKAqvh2LG_hhO8FAXTBPxyHX16TmMI'
        })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/uci.edu_tjec7ma8ubkrlhhbjk89u7c7ec@group.calendar.google.com/events?maxResults=20&singleEvents=true&orderBy=starttime&timeMin=${moment().toISOString()}&timeMax=${moment()
              .endOf('week')
              .toISOString()}`
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            let sortedEvents = events.sort((a, b) => {
              return (
                moment(a.start.dateTime).format('YYYYMMDD') -
                moment(b.start.dateTime).format('YYYYMMDD')
              );
            });

            if (events.length > 0) {
              that.setState({
                events: sortedEvents,
                isLoading: false,
                isEmpty: false
              });
            } else {
              that.setState({
                isEmpty: true,
                isLoading: false
              });
            }
          },
          (err) => {
            console.log('error', err);
          }
        );
    };
    window.gapi.load('client', start); // now query the API
  }

  render() {
    const { events } = this.state;

    let eventsList = events.map(function(event) {
      return (
        <a
          className="list-group-item"
          href={event.htmlLink}
          target="_blank"
          key={event.id}
        >
          {event.summary}{' '}
          <span className="badge">
            {moment(event.start.dateTime).format('h:mm a')},{' '}
            {moment(event.end.dateTime).diff(moment(event.start.dateTime), 'minutes')}{' '}
            minutes, {moment(event.start.dateTime).format('MMMM Do')}{' '}
          </span>
        </a>
      );
    });

    let emptyState = (
      <div className="empty">
        <h3>No meetings are scheduled for the day.</h3>
      </div>
    );

    let loadingState = <div className="loading">Loading Calendar</div>;

    let nextEvent;
    console.log('events :', events);
    if (events.length > 0) nextEvent = events[0];

    console.log('nextEvent :', nextEvent);
    return (
      <div className="container">
        <div className="upcoming-meetings">
          <h1>Upcoming Meetings</h1>
          <div className="list-group">
            {this.state.isLoading && loadingState}
            {events.length > 0 && eventsList}
            {nextEvent && nextEvent.summary}
            {this.state.isEmpty && emptyState}
          </div>
        </div>
      </div>
    );
  }
}
