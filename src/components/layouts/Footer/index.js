import React from 'react';
import Icon from '../../fields/Icon';
import Contact from '../../fields/Contact';

import './style.scss';

const Footer = (props) => {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

    // Set focus to logo link after it is in view.
    const logoLink = document.querySelector('.header__logo-link');
    if (logoLink) {
      setTimeout(() => {
        logoLink.focus();
      }, 1000);
    }
  }

  return (
    <>
      <Contact />
        <footer className="footer">
        <div className="footer__back-to-top">
          <a href="#top" onClick={scrollToTop}>
            <span>Back to top</span>
            <Icon name="icon-arrow-up" className="icon icon-arrow-up" />
          </a>
        </div>
        <div className="footer__top--wrapper component-item__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <a className="footer__logo-link" href="/">
                <Icon name="icon-mc-logo" className="icon icon-mc-logo" />
              </a>

            </div>
            <div className="footer__address">
              <h3 className="footer__menu--header">How can we help?</h3>
              <a href="tel:866-507-0005" aria-label="Call Mediacurrent">866-507-0005</a>
            </div>
            <div className="footer__contact">
              <ul className="footer__brand--menu footer__menu">
                <li className="footer__brand--item">
                  <a href="/contact-us" className="footer-contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer__social-signup">
              <nav className="footer__menu--social">
                <ul className="footer__social">
                  <li className="footer__menu--item">
                    <a href="http://twitter.com/mediacurrent" className="footer__menu--link">
                      <Icon name="icon-twitter" classes="icon" />
                      <span>Follow us on Twitter</span>
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a href="https://www.facebook.com/pages/Mediacurrent/172384302846690" className="footer__menu--link">
                      <Icon name="icon-facebook" classes="icon" />
                      <span>Find us on Facebook</span>
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a href="https://www.youtube.com/user/MediacurrentDrupal" className="footer__menu--link">
                      <Icon name="icon-youtube" classes="icon" />
                      <span>Watch us on Youtube</span>
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a href="https://www.linkedin.com/company/mediacurrent/" className="footer__menu--link">
                      <Icon name="icon-linkedin" className="icon" />
                      <span>Find us on LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom--inner component-item__inner">
            <p className="footer__copyright">&copy; 2007 - {new Date().getFullYear()} Mediacurrent Interactive Solutions LLC - All Rights Reserved</p>
            <nav className="footer__legal-links">
              <ul className="footer__menu--legal">
                <li><a href="/legal">Legal</a>|</li>
                <li><a href="/privacy-policy">Privacy</a>|</li>
                <li><a href="/accessibility">Accessibility</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
