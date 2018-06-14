import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ColorBoxes from './ColorBoxes';

/* ~~~~~~ Styles ~~~~~~~ */
const ColorPickerDiv = styled.div`
  display: flex;
`;

/* ~~~~~~ Components ~~~~~~~ */

const ColorPicker = props => (
  <ColorPickerDiv>
    {props.colors.map((color, index) => (
      <ColorBoxes key={color} color={color} hover={props.hover} />
    ))}
  </ColorPickerDiv>
);

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  hover: PropTypes.func.isRequired
};

export default ColorPicker;
