import React, { Component } from 'react';
import moment from 'moment';
import '../app.css';

class NextEvent extends Component {
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

  componentWillMount() {
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
            console.log('response :', response.result.items);

            // 1. Find index of "T"
            // 2. Create Substring from T+1 to end
            // 3. Find index of '-'
            // 4. Create substring from 0 to index of '-'
            // 5. Now compare this time format to the current time

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
    let nextEvent;
    console.log('events :', events);

    if (events.length > 0) nextEvent = events[0];

    return (
      <h2 className="header center z-depth-2 page-banner">
        Next Event: <br className="next-event-br" />
        {this.state.isLoading && ' Loading Calendar...'}
        {nextEvent && ' ' + nextEvent.summary}
        {this.state.isEmpty && ' No events are scheduled for the day'}
      </h2>
    );
  }
}

export default NextEvent;
