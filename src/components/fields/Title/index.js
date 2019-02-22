import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Title = (props) => {
  const classes = classNames({
    'title': true,
    [`${props.classes}`] : props.classes
  });
  const text = props.text || props.children;
  const level = props.level || 2;
  const Element = `h${level}`;
  return(
    <Element className={classes}>
      { text }
    </Element>
  );
}

Title.propTypes = {
  /** Tag level. Defaults to 2 */
  level: PropTypes.number,
  /** External classes. */
  classes: PropTypes.string,
  /** Content of title. */
  text: PropTypes.string
}

Title.defaultProps = {
  level: 2
}

export default Title;
