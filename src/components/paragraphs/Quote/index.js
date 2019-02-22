import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Parser from 'html-react-parser';

import './style.scss';

const Quote = (props) => {

  const classes = classNames(
    'quote',
    {[`${props.classes}`]: props.classes}
  );

  return(
    <blockquote className={classes}>
      <p className="quote__text">{Parser(props.quote)}</p>
      <cite className="quote__cite">
        {props.image && (
          <div className="quote__cite-media">
            <img src={props.image.src} alt={props.image.alt} />
          </div>
        )}
        <div className="quote__cite-text">
          <p className="quote__cite-name">{props.name}</p>
          {props.job && <p className="quote__cite-job">{props.job}</p>}
        </div>
      </cite>
    </blockquote>
  )
}

Quote.propTypes = {
  /** Quote string. HTML is Parsed. */
  quote: PropTypes.string.isRequired,
  /** Quote attribution. */
  name: PropTypes.string.isRequired,
  /** Optional attribution job title. */
  job: PropTypes.string,
  /** Optional Classes. */
  classes: PropTypes.string,
  /** Optional Image with src and alt. */
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
}

export default Quote;
