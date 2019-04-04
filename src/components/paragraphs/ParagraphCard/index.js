import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';
import Body from '../../fields/Body';
import Button from '../../fields/Button';

import './style.scss';

const ParagraphCard = (props) => {
  const classes = classNames(
    'card',
    {[`${props.datakey}`]: props.datakey},
    {[`${props.classes}`]: props.classes}
  );
  let media = null;
  let imageClass = null;
  try {
    imageClass = props.r.media.r.image.localFile.extension;
    if (imageClass === 'svg') {
      media = props.r.media.r.image.localFile.publicURL;
    }
    else if (props.r.media.r.image.localFile.cis.f) {
      media = props.r.media.r.image.localFile.cis.f.srcWebp;
    }
    else {
      media = props.r.media.r.image.localFile.cis.fixed.srcWebp;
    }
  }
  catch{}

  return (
    <article className={classes}>
      {media && (
        <div className="card__icon">
          <img
            className={imageClass}
            src={media}
            alt={props.subhead}
          />
        </div>
      )}
      <div className="card__content">
        {props.eyebrow && <Eyebrow text={props.eyebrow} />}
        {props.heading && <Heading level={3}>{props.heading}</Heading>}
        {props.subhead && <Heading level={4}>{props.subhead}</Heading>}
        {props.text && <Body>{props.text}</Body>}
        {props.link && <Button {...props.link} classes="card__link" />}
      </div>
    </article>
  );
}

ParagraphCard.propTypes = {
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

export default ParagraphCard;
