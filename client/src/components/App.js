import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Committees from './Committees';
import Contact from './Contact';
import Unauthorized from './Unauthorized';
import Calendar from './CalendarEvents';
import '../app.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Header />
            {/* mobile links */}
            <ul className="sidenav" id="mobile-demo">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/committees">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              {this.renderContent()}
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/committees" component={Committees} />
              <Route path="/contact" component={Contact} />
              <Route path="/unauthorized" component={Unauthorized} />
              <Route path="/calendar" component={Calendar} />
              <Redirect to="/" />
            </Switch>
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
