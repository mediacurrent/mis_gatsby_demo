import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";

import './style.scss';

const Header = ({ menuLinks }) => (
  <nav className="main-menu" aria-label="Main Menu">
    <ul className="main-menu__list">
      {menuLinks.map((link, key) => (
        <li className="main-menu__item" key={`main-menu--${key}`}>
          <Link
            to={link.uri}
            className="main-menu__link"
            activeClassName="active"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Header.propTypes = {
  menuLinks: PropTypes.array.isRequired
}

export default Header
