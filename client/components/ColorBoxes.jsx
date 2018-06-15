import React from 'react';
import PropTypes from 'prop-types';

const ColorBoxes = props => (
  <div className="color-boxes-wrapper">
    <div
      className="color-boxes"
      style={{ backgroundColor: props.color }}
      onMouseOver={props.hover}
      onFocus={props.hover}
    />
  </div>
);

ColorBoxes.propTypes = {
  color: PropTypes.string.isRequired,
  hover: PropTypes.func.isRequired
};

export default ColorBoxes;
