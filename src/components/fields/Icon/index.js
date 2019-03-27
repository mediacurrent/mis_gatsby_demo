import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Loads all SVGs within the assets directory
const req = require.context('!svg-sprite-loader!./assets', true, /.svg$/);
function loadAssets(asset) {
  let file;
  req
    .keys()
    .filter((filename) => filename.indexOf(asset) > -1)
    .forEach((filename) => {
      file = req(filename);
    });
  return file;
}

const Icon = (props) => {
  const {
    svgWidth,
    svgHeight,
    title,
    border,
    name,
    classes,
    ariaHidden,
    ...rest
  } = props;
  const SVG = loadAssets(name);
  if (SVG) {
    const attr = {
      width: svgWidth || null,
      height: svgHeight || null,
      className: classNames('icon', `icon--${name}`, { [`${classes}`]: classes }),
      'aria-hidden': ariaHidden || null
    };
    return (
      <svg {...attr} {...rest} >
        {title && <title>{title}</title>}
        {border && (
          <defs>
            <filter id="shadow">
              <feDropShadow dx={border.x} dy={border.y} stdDeviation={border.deviation} />
            </filter>
          </defs>
        )}
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
  return null;
};

Icon.propTypes = {
  /** Icon Name */
  name: PropTypes.string.isRequired,
  /** Optional Title text */
  title: PropTypes.string,
  /** Optional Width */
  svgWidth: PropTypes.number,
  /** Optional Height */
  svgHeight: PropTypes.number,
  /** Identifying classes. */
  classes: PropTypes.string,
  /** Hidden attribute */
  ariaHidden: PropTypes.bool,
  /** Optional Border definitions */
  border: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    deviation: PropTypes.number
  })
};

Icon.defaultProps = {
  title: null,
  classes: null
};

export default Icon;
