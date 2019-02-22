import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';
import Body from '../../fields/Body';

import './style.scss';

const Card = (props) => {
  const classes = classNames(
    'card',
    {[`${props.classes}`]: props.classes}
  );
  let media = null;
  if (props.r && props.r.media) {
    if(props.r.media.r.image) {
      if (props.r.media.r.image.localFile) {
        media = props.r.media.r.image.localFile.cis.fixed.src
      }
    }
  };
  return(
    <article className={classes}>
      {media && (
        <div className="card__media">
          <img src={media} alt={props.subhead} />
        </div>
      )}
      <div className="card__content">
        {props.eyebrow && <Eyebrow text={props.eyebrow} />}
        {props.heading && <Heading level={3}>{props.heading}</Heading>}
        {props.subhead && <Heading level={4}>{props.subhead}</Heading>}
        {props.text && <Body>{props.text}</Body>}
        {props.link && (
          <a href={props.link.uri} className="card__link">
            {props.link.title}
          </a>
        )}
      </div>
    </article>
  )
}

Card.propTypes = {
  /** Content */
  text: PropTypes.string,
  /** Eyebrow Component Properties. */
  eyebrow: PropTypes.string,
  /** Heading string. */
  heading: PropTypes.string,
  /** Heading Component Properties */
  subheading: PropTypes.string,
  /** CTA */
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string
  }),
  /** Media Component Properties. */
  media: PropTypes.shape({
    /** Image Tag */
    image: PropTypes.symbol,
    /** Video Iframe */
    video: PropTypes.symbol,
    /** Credit / Caption */
    caption: PropTypes.string
  }),
  /** Additional classes. */
  classes: PropTypes.string
}

export default Card;
