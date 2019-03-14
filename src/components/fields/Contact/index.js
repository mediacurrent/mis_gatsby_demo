import React from 'react';

import Button from '../Button';

import './style.scss';

const Contact = () => {

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted')
  }

  return(
    <section class="contact-us section breaker">
      <div class="section__container breaker__content">
        <h2 class="title breaker__title">Contact Us</h2>
        <div class="contact-us__contact-items">
          <div class="contact-us__items">
            <h3>What are your challenges?</h3>
            <p>We can show you how RAIN and other open source tools can increase efficiency within your digital ecosystem</p>
          </div>
          <div class="contact-us__items">
            <form onSubmit={formSubmit} class="form">
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
              <Button title="Connect with Us" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
