import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = (props) => {
  let element;
  const containsAuth = props.link.includes('auth') || props.link.includes('logout');

  console.log('NavBarItem props :', props);
  if (props.link && !containsAuth) {
    element = (
      <li>
        <Link to={props.link}>{props.title}</Link>
      </li>
    );
  } else {
    element = (
      <li>
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </li>
    );
  }

  return element;
};

export default NavBarItem;
