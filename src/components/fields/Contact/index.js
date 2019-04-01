import React from 'react';

import Button from '../Button';

import './style.scss';

const Contact = (props) => {

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted')
  }

  return(
    <section className="contact-us section breaker">
      <div className="section__container breaker__content">
        <h2 className="title breaker__title">Contact Us</h2>
        <div className="contact__content-wrapper">
          <div className="contact-us__contact-items">
            <div className="contact-us__items">
              <h4>What are your challenges?</h4>
              <p className="body-text">We can show you how RAIN and other open source tools can increase efficiency within your digital ecosystem</p>
            </div>
            <div className="contact-us__items">
              <form onSubmit={formSubmit} className="form">
                <div className="form-item form-item--text">
                  <input
                    id="first_name"
                    type="text"
                    className="form-item__input js-form-item"
                    aria-describedby="required-message"
                    required
                  />
                  <label htmlFor="first_name" className="form-item__label required-field">
                    First Name
                  </label>
                  <div id="required-message" className="visually-hidden">
                    This field is required.
                  </div>
                </div>
                <div className="form-item form-item--text">
                  <input
                    id="last_name"
                    type="text"
                    className="form-item__input js-form-item"
                    aria-describedby="required-message"
                    required
                  />
                  <label htmlFor="last_name" className="form-item__label required-field">
                    Last Name
                  </label>
                  <div id="required-message" className="visually-hidden">
                    This field is required.
                  </div>
                </div>
                <div className="form-item form-item--email">
                  <input
                    id="email"
                    type="text"
                    className="form-item__input js-form-item"
                    aria-describedby="required-message"
                    required
                  />
                  <label htmlFor="email" className="form-item__label required-field">
                    Email
                  </label>
                  <div id="required-message" className="visually-hidden">
                    This field is required.
                  </div>
                </div>
                <div className="form-item form-item--text">
                  <input
                    id="subject"
                    type="text"
                    className="form-item__input js-form-item"
                    aria-describedby="required-message"
                    required
                  />
                  <label htmlFor="subject" className="form-item__label required-field">
                    Subject
                  </label>
                  <div id="required-message" className="visually-hidden">
                    This field is required.
                  </div>
                </div>
                <div className="form-item form-item--textarea">
                  <textarea className="form-item__input js-form-item" id="message" name="messagetext"></textarea>
                  <label htmlFor="message" className="form-item__label required-field">Message</label>
                </div>
                <div className="contact-button-submit">
                <Button {...props} classes="card__link" title="Connect With Us" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
