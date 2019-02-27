import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Accordion = (props) => {

  const [toggle, setToggle] = useState({});
  const toggleClickEvent = (key) => {
    const t = toggle[key] | 0;
    setToggle({[`${key}`] :!t});
  }

  return(
    <section className="accordion__wrapper">
      {props.items.map((item, key) => {
        const datakey = `accordion--${key}`;
        return(
          <article
            className={`accordion${(toggle[datakey]) ? ' open' : ''}`}
            key={datakey}
          >
            <button
              className="accordion__toggle"
              onClick={() => toggleClickEvent(datakey)}
              aria-controls={`accordion__content-${key}`}
              aria-expanded={toggle[datakey]}
            >
              <span className="accordion__heading">{item.heading}</span>
            </button>
            <div
              className="accordion__content"
              aria-hidden={!toggle[datakey]}
              aria-labelledby={`accordion__content-${key}`}
              dangerouslySetInnerHTML={{__html:item.content}}
            />
          </article>
        )
      })}
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
