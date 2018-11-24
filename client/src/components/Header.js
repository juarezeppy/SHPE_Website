import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
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
            <li><a href="/about">About Us</a></li>
            <li><a href="/committees">Get Involved</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>

    
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
