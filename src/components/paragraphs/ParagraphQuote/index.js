import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Parser from 'html-react-parser';

import Icon from '../../fields/Icon'

import './style.scss';

const ParagraphQuote = (props) => {

  const classes = classNames(
    'quote',
    {[`${props.classes}`]: props.classes}
  );

  return(
    <blockquote className={classes}>
      <Icon className="quote__icon" name="icon-quote" border={{x: 0, y: 1, deviation: 1}} />
      <h3 className="quote__text">“{Parser(props.quote)}”</h3>
      <cite className="quote__cite">
        {props.image && (
          <div className="quote__cite-media">
            <img src={props.image.src} alt={props.image.alt} />
          </div>
        )}
        <div className="quote__cite-text">
          <h6 className="quote__cite-name">{props.name}</h6>
          {props.job && <h6 className="quote__cite-job">{props.job}</h6>}
        </div>
      </cite>
    </blockquote>
  )
}

ParagraphQuote.propTypes = {
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

export default ParagraphQuote;
