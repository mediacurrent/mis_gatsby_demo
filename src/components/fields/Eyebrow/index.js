import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Eyebrow = (props) => {
  const classes = classNames({
    eyebrow: true,
    [`${props.classes}`]: props.classes
  })

  return(
    <span className={classes}>
      {(props.text) ? props.text : props.children}
    </span>
  );
}

Eyebrow.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string
}

export default Eyebrow;
