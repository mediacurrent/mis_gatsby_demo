import PropTypes from "prop-types"
import React from "react";

import Icon from '../../fields/Icon';
import MainMenu from '../MainMenu';

import './style.scss';

const Header = ({ menuLinks }) => (
  <header className="section header site-header">
    <div className="section__container header__container" data-path="" >
      <div className="header__brand">
        <a className="header__logo-link" href="/">
          <Icon name="icon-mc-logo" className="icon icon-mc-logo" />
        </a>
      </div>
      <button className="header__nav-toggle" aria-expanded="false" aria-controls="main-nav-wrapper">
        <span className="header__nav-toggle-bar"></span>
        <span className="header__nav-toggle-bar"></span>
        <span className="header__nav-toggle-bar"></span>
        <span className="header__nav-toggle-text">Menu</span>
      </button>
      <div id="main-nav-wrapper" className="header__nav-wrapper">
        <div className="header__main-menu">
          <MainMenu menuLinks={menuLinks} />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  menuLinks: PropTypes.array.isRequired
}

export default Header
