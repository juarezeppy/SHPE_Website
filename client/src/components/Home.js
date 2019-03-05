import React, { Component } from 'react';
import NextEvent from './NextEvent';
import Calendar from './Calendar';

class Home extends Component {
  componentWillMount() { }

  render() {
    return (
      <div className="AppBody">
        <div className="parallax-container parallax-container-landing">
          <h3 className="landing-image-overlay-text">
            THE SOCIETY OF HISPANIC PROFESSIONAL ENGINEERS
            <br />
            <span className="border-top">University of California, Irvine</span>
          </h3>

          <div className="parallax">
            <img
              src="https://clubs.uci.edu/shpe/wp-content/uploads/2018/05/29683835_1699696656746576_4596213576617751783_n.jpg"
              alt="SHPE Group Portrait"
            />
          </div>
        </div>

        <NextEvent />
        <Calendar />
      </div>
    );
  }
}

export default Home;
