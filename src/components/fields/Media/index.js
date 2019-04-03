import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Media = (props) => {
  const classes = classNames('media-item', {[`${props.classes}`]: props.classes})
  return(
    <div className={classes}>
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
