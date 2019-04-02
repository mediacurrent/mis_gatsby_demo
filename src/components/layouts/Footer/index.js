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
                <Icon name="mc-logo" className="icon icon-mc-logo" />
              </a>

            </div>
            <div className="footer-content">
            <div className="footer__address">
              <ul className="footer__brand--menu footer__menu">
                  <li className="footer__brand--item">
                    3180 North Point Parkway
                  </li>
                  <li className="footer__brand--item">
                    Building 200. Suite 208
                  </li>
                  <li className="footer__brand--item">
                    Alpharetta, Georgia 30005
                  </li>
              </ul>
            </div>
            <div className="footer__contact">
              <ul className="footer__brand--menu footer__menu">
                <li className="footer__brand--item">
                  info@mediacurrent.com
                </li>
                <li className="footer__brand--item">
                  Phone: 678.580.1690
                </li>
                <li className="footer__brand--item">
                  Toll Free: 866.507.0005
                </li>
                <li className="footer__brand--item">
                  Fax: 770.360.5776
                </li>
              </ul>
            </div>
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
