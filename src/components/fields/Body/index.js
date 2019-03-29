import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser'
import classNames from 'classnames';

import './style.scss';

const Body = (props) => {
  const bodyClasses = classNames(
    'body-text',
    {[`${props.classes}`] : props.classes}
  );
  return(
  <div className={bodyClasses}>
    {(props.text) ? Parser(props.text) : props.children}
  </div>
)};

Body.propTypes = {
  /** Text passed by children */
  children: PropTypes.node,
  /** Text that is passed by a parameter */
  text: PropTypes.string,
  /** Classname passed by components */
  classes: PropTypes.string
}

export default Body;
