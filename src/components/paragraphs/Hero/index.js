import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Body from '../../fields/Body';
import Button from '../../fields/Button';
import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';
import Media from '../../fields/Media';

import './style.scss';

const Hero = (props) => {
  const classes = classNames(
    "hero",
    {[`${props.classes}`]: props.classes}
  );
  const card = props.r.cards[0];
  const media = card.r.media.r.image.localFile.cis.fixed.src;
  return(
    <section className={classes}>
      {media && <Media image={`<img src="${media}"/>`} />}
      <div className="hero__content">
        {card.eyebrow && <Eyebrow text={card.eyebrow} classes="hero__eyebrow" />}
        {card.heading && <Heading>{card.heading}</Heading>}
        {card.text && <Body classes="hero__body" text={card.text}/>}
        {card.link && <Button {...card.link} />}
      </div>
    </section>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  subhead: PropTypes.string,
  r: PropTypes.shape({
    cards: PropTypes.array
  }),
  /** Extra classes */
  classes: PropTypes.string
}

export default Hero;
