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
    media = r.media.r.image.localFile.cis.f;
  }
  catch {
    media = null;
  };

  const breakerClasses = classNames(
    'section',
    'breaker',
    {[`with-hero`]: media},
    {[`${classes}`] : classes}
  );

  return(
    <section className={breakerClasses}>
      <div className="section__container breaker__container">
        {media && (
          <div className="breaker__hero">
            <img src={media.src} srcSet={media.srcSet} alt="" sizes="100vw" />
          </div>
        )}
        <div class="breaker__content-wrapper">
          <div className="breaker__content-container">
            {(eyebrow) && (<Eyebrow text={eyebrow} classes="breaker__eyebrow" />)}
            {(heading) && (<Heading classes="breaker__heading"><span>{heading}</span></Heading>)}
            {(text) && (
              <div
                className="breaker__body body-text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(link) && (<Button {...link} classes="breaker__cta" />)}
          </div>
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
