import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from '../../fields/Heading';
import Body from '../../fields/Body';
import Eyebrow from '../../fields/Eyebrow';

import './style.scss';

const Map = (props) => {
  const {map} = props;
  const hasText = props.body || props.heading || props.eyebrow || props.link;

  const classes = classNames(
    'map',
    {[`map--2col`]: hasText},
    {[`map--full`]: !hasText}
  );
  return(
    <section className={classes}>
      <div className="map__wrapper">
        <div className="map__embed">
          <iframe
            width="600"
            title="Map"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${map[0].lat},${map[0].lng}&hl=es;z=14&amp;output=embed`}
          />
        </div>
      </div>
      {hasText && (
        <div className="map__text">
          {props.eyebrow && <Eyebrow text={props.eyebrow} />}
          {props.heading && <Heading level={2} classes="map__location" />}
          {props.body && <Body text={props.body.value} />}
          {props.link && <a href={props.link.uri} className="map__link">{props.link.title}</a>}
        </div>
      )}
    </section>
  )
}

Map.propTypes = {
  map: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng:PropTypes.number
    })
  ).isRequired,
  body: PropTypes.shape({
    value: PropTypes.string
  }),
  heading: PropTypes.string,
  eyebrow: PropTypes.string,
  link: PropTypes.shape({
    uri: PropTypes.string,
    title: PropTypes.string
  })
}

export default Map;
