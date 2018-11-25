import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Unauthorized extends Component {
  constructor(props, context) {
    super(props, context);
    this.timerIntervalFunction = null;

    this.state = {
      countDown: 15
    };
  }

  componentDidMount() {
    const SECOND_IN_MILLISECONDS = 1000;

    this.timerIntervalFunction = setInterval(() => {
      this.setState({
        countDown: this.state.countDown - 1
      });
    }, SECOND_IN_MILLISECONDS);
  }

  componentWillUnmount() {
    console.log('unmounting');
    if (this.timerIntervalFunction) clearInterval(this.timerIntervalFunction);
  }

  render() {
    console.log('updating state :', this.state);
    const { countDown } = this.state;

    if (countDown === 0) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2 className="header center z-depth-2 page-banner">Unauthorized</h2>
        <div className="container">
          <div className="row">
            <div className="col m12 brand-logo  center">
              <h3>Only UCI.EDU accounts may be used to login</h3>
              <ul>
                <li>Hang in there buddy, we'll redirect you back home in {countDown}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Unauthorized;
