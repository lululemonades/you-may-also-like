import React from 'react';
import PropTypes from 'prop-types';
import ColorBoxes from './ColorBoxes';

const ColorPicker = props => (
  <div className="color-picker-div">
    {props.colors.map((color, index) => (
      <ColorBoxes key={color} color={color} hover={props.hover} />
    ))}
  </div>
);

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  hover: PropTypes.func.isRequired
};

export default ColorPicker;
