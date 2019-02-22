import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Media = (props) => {
  return(
    <div className="media-item">
      {props.video  && (
        <div
          className="media-item__responsive-video"
          dangerouslySetInnerHTML={{__html: props.video}}
        />
      )}
      {props.image && (
        <div
          className="media-item__image"
          dangerouslySetInnerHTML={{__html: props.image}}
        />
      )}
      {props.caption && (
        <div className="media-item__caption">
          {props.caption}
        </div>
      )}
    </div>
  )
}

Media.propTypes = {
  /** Image Tag */
  image: PropTypes.string,
  /** Video embed Tag */
  video: PropTypes.string,
  /** Credit / Caption */
  caption: PropTypes.string
}

export default Media;
