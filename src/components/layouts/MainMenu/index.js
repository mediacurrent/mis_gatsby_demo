import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import './style.scss';

const MainMenu = ({menuLinks}) => (
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

MainMenu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string,
      title: PropTypes.string
    })
  )
}

export default MainMenu;
