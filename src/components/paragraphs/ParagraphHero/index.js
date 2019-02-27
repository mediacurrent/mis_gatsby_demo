import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Body from '../../fields/Body';
import Button from '../../fields/Button';
import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';
import Media from '../../fields/Media';

import './style.scss';

const ParagraphHero = (props) => {
  const classes = classNames(
    "hero",
    {[`${props.classes}`]: props.classes}
  );
  const card = props.r.cards[0];
  let media;
  try {
    media = card.r.media.r.image.localFile.cis.f.src;
  }
  catch {
    media = null;
  };
  return(
    <section className={classes}>
      {media && <Media image={`<img src="${media}" alt="" />`} />}
      <div className="hero__content">
        {card.eyebrow && <Eyebrow text={card.eyebrow} classes="hero__eyebrow" />}
        {card.heading && <Heading>{card.heading}</Heading>}
        {card.text && <Body classes="hero__body" text={card.text}/>}
        {card.link && <Button {...card.link} />}
      </div>
    </section>
  );
}

ParagraphHero.propTypes = {
  heading: PropTypes.string,
  subhead: PropTypes.string,
  r: PropTypes.shape({
    cards: PropTypes.array
  }),
  /** Extra classes */
  classes: PropTypes.string
}

export default ParagraphHero;
