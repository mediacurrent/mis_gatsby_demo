import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Accordion = (props) => {
  const toggleClickEvent = (event) => {
    const target = event.currentTarget.parentNode;
    const button = target.querySelector('.accordion__toggle');
    const content = target.querySelector('.accordion__content');
    if (target.classList.contains('open')) {
      target.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    }
    else {
      target.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
  }

  //@todo: Keypress event?

  return(
    <section className="accordion__wrapper">
      {props.items.map((item, key) => (
        <article
          className="accordion"
          key={`accordion--${key}`}
        >
          <button
            className="accordion__toggle"
            onClick={toggleClickEvent}
            aria-controls={`accordion__content-${key}`}
            aria-expanded="false"
          >
            <span className="accordion__heading">{item.heading}</span>
          </button>
          <div
            className="accordion__content"
            aria-hidden="true"
            aria-labelledby={`accordion__content-${key}`}
            dangerouslySetInnerHTML={{__html:item.content}}
          />
        </article>
      ))}
    </section>
  )
}

Accordion.propTypes = {
  /** Array of objects containing a heading and content string. */
  items: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string
  }))
}

export default Accordion
