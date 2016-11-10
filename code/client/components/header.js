import React from 'react';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  render() {
    const logo = require('../../../assets/images/react-logo.svg')

    return (
      <div className="header row expanded">
        <nav role="navigation">
          <Link className="header__branding" to="/">
            <img src={logo} width="105" height="33" alt="React logo" />
          </Link>

          <ul className="menu">
            <li className="menu__item">
              <IndexLink to="/" className="menu__link" activeClassName="menu__link--active">Home</IndexLink>
            </li>
            <li className="menu__item">
              <Link to="/users" className="menu__link" activeClassName="menu__link--active">Users</Link>
            </li>
            <li className="menu__item">
              <span className="menu__link menu__link--disabled">Don't click me</span>
            </li>
            <li className="menu__item">
              <Link to="/404" className="menu__link menu__link--special">404 Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
