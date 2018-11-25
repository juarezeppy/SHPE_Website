import React, { Component } from 'react';

class Calendar extends Component {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'assets/scripts/fullerCalendarInitializer.js';
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <div id="calendar" />
      </div>
    );
  }
}

export default Calendar;
