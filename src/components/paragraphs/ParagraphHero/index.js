import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Body from '../../fields/Body';
import Button from '../../fields/Button';
import Eyebrow from '../../fields/Eyebrow';
import Heading from '../../fields/Heading';
import Media from '../../fields/Media';

// Homempage videos.
import webm from './rain.webm'
import mp4 from './rain.mp4'

import './style.scss';

const ParagraphHero = (props) => {

  const videoRef = useRef(null);

  // Load Video on homepage.
  useEffect(() => {
    if (
      typeof Promise === 'undefined' ||
      !videoRef.current ||
      window.matchMedia('(prefers-reduced-motion)').matches ||
      window.innerWidth < 992
    ) {
      return;
    }
    const video = videoRef.current;

    const children = Array.prototype.slice.call(video.children);
    children.forEach((child) => {
      if (
        child.tagName === 'SOURCE' &&
        typeof child.dataset.src !== 'undefined'
      ) {
        child.setAttribute('src', child.dataset.src);
      }
    });
    video.load();

    // Promise resolves when video.canplaythrough event triggers.
    const videoLoad = new Promise((resolve) => {
      video.addEventListener('canplaythrough', () => {
        resolve('can play');
      });
    });

    // Promise resolves after a predetermined time (2sec)
    const videoTimeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve('The video timed out.');
      }, 2000);
    });

    // Race the promises to see which one resolves first.
    Promise.race([videoLoad, videoTimeout]).then((data) => {
      if (data === 'can play') {
        video.play();
        setTimeout(() => {
          video.classList.add('video-loaded');
        }, 500);
      }
      else {
        const children = Array.prototype.slice.call(video.children);
        children.forEach((child) => {
          if (
            child.tagName === 'SOURCE' &&
            typeof child.dataset.src !== 'undefined'
          ) {
            child.parentNode.removeChild(child);
          }
        });

        // reload the video without <source> tags to stop downloading.
        video.load();
      }
    });
  });
  const hero_videos = {
    webm,
    mp4,
  }

  const classes = classNames(
    "hero",
    {[`${props.classes}`]: props.classes}
  );
  const card = props.r.cards[0];
  let media;
  try {
    media = card.r.media.r.image.localFile.cis.f;
  }
  catch {
    media = null;
  };

  return(
    <section className={classes}>
      {media && <Media classes="hero__image" image={`<img src="${media.src}" srcset="${media.srcSet}" sizes="100vw" alt="" />`} />}
      {props.home_video_hero && (
        <div className="hero__background">
          <video
            loop
            muted
            autoPlay
            className="hero__bgvideo hero__bg-video--playback-slow"
            ref={videoRef}
          >
            <source data-src={hero_videos.webm} type="video/webm" />
            <source data-src={hero_videos.mp4} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="hero__content-wrapper">
        <div className="hero__content">
          <div className="section__container hero__content-container">
            <div className="hero__content-container-inner">
              {card.eyebrow && <Eyebrow text={card.eyebrow} classes="hero__eyebrow" />}
              {card.heading && <Heading level={1}>{card.heading}</Heading>}
              {card.text && <Body classes="hero__body" text={card.text}/>}
              {card.link && <Button {...card.link} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ParagraphHero.propTypes = {
  /** Relationships */
  r: PropTypes.shape({
    /** Cards (should only be one.) */
    cards: PropTypes.array
  }),
  /** Turn on videos */
  home_video_hero: PropTypes.bool,
  /** Extra classes */
  classes: PropTypes.string
}

export default ParagraphHero;
