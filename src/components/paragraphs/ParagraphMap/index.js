import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import Heading from '../../fields/Heading';
import Body from '../../fields/Body';
import Eyebrow from '../../fields/Eyebrow';

import './style.scss';

const GoogleMapWrapper = withScriptjs(
  withGoogleMap(({lat, lng, marker}) => {
    return(
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat, lng }}
      >
        {marker && (
          <Marker position={{ lat, lng }} />
        )}
      </GoogleMap>
  )})
);

const ParagraphMap = (props) => {

  const {map} = props;
  const hasText = props.body || props.heading || props.eyebrow || props.link;

  const classes = classNames(
    'map',
    {[`map--2col`]: hasText},
    {[`map--full`]: !hasText}
  );

  return (
    <section className={classes}>
      <div className="map__wrapper">
        <div className="map__embed">
          <GoogleMapWrapper
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCttm_EFDYSeMERXB856BdIPeuXZGkp3Ck"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={parseFloat(map[0].lat)}
            lng={parseFloat(map[0].lng)}
            marker={true}
          />
        </div>
      </div>
      {hasText && (
        <div className="map__text">
          {props.eyebrow && <Eyebrow text={props.eyebrow}></Eyebrow>}
          {props.heading && <Heading level={2} classes="map__location">{props.heading}</Heading>}
          {props.body && <Body text={props.body.value} />}
          {props.link && (
            <a href={props.link.uri} className="map__link">
              {props.link.title}
            </a>
          )}
        </div>
      )}
    </section>
  );
}

ParagraphMap.propTypes = {
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

ParagraphMap.defaultProps = {
  map: []
}

export default ParagraphMap;
