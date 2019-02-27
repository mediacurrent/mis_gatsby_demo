import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../fields/Button';
import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';

import './style.scss';

const ParagraphBreaker = (props) => {

  const {classes, eyebrow, heading, text, link, r} = props.r.cards[0];
  let media;
  try {
    media = r.media.r.image.localFile.cis.f.src;
  }
  catch {
    media = null;
  };

  const breakerClasses = classNames(
    'breaker',
    {[`with-hero`]: media},
    {[`${classes}`] : classes}
  );

  return(
    <section className={breakerClasses}>
      {media && (
        <div className="breaker__hero">
          <img src={media} alt="" />
        </div>
      )}

      <div className="breaker__container">
        <div className="breaker__content-container">
          {(eyebrow) && (<Eyebrow value={eyebrow} classes="breaker__eyebrow" />)}
          {(heading) && (<Heading classes="breaker__heading">{heading}</Heading>)}
          {(text) && (
            <div
              className="breaker__body body-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          {(link) && (<Button {...link} classes="breaker__cta" />)}
        </div>
      </div>
    </section>
  );
}

ParagraphBreaker.propTypes = {
  classes: PropTypes.string,
  r: PropTypes.shape({
    cards: PropTypes.array
  })
}

export default ParagraphBreaker;
