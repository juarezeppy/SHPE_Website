import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBarItem from './NavBarItem';
import Committees from './Committees';
class NavBar extends Component {
  render() {
    console.log('NavBar this.props :', this.props);

    const isLoggedIn = this.props.auth;
    let loginHandlerTitle;
    let loginHandlerLink;

    if (isLoggedIn) {
      loginHandlerTitle = 'Logout';
      loginHandlerLink = '/api/logout';
    } else if (isLoggedIn === false) {
      loginHandlerTitle = 'Board Member Login';
      loginHandlerLink = '/auth/google';
    } else {
      console.log('login is null, do nothing: ', isLoggedIn);
    }

    // TODO: Create calendar component that re-renders correctly.
    return (
      <nav className="blue-grey darken-3 sticky-menu">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            SHPE | UCI
          </a>

          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <NavBarItem title="About Us" link="about" />
            <NavBarItem title="Get Involved" component={Committees} link="committees" />
            <NavBarItem title="Contact Us" link="contact" />
            {isLoggedIn !== null && (
              <NavBarItem title={loginHandlerTitle} link={loginHandlerLink} />
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

// this allows NavBar to "listen" to state values and react to auth
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(NavBar);
