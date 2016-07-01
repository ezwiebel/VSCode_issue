import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    level: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">VSCode-issue</a>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to={"/level1"} className="nav-link">Level1</Link>
            </li>
            <li className="nav-item">
              <Link to={"/level2"} className="nav-link">Level2</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
