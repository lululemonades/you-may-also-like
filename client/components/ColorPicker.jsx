import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox.jsx';

const ColorPickerDiv = styled.div`
    position: absolute;
    background-color: #fafafa;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    bottom: 4px;
    display: flex;
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    cursor: grab;
    &:hover {
      opacity: 1;

    }
`;

function ColorPicker (props) {
  return (
    <ColorPickerDiv>
      {props.colors.map((color, index) => (
        <ColorBox color={color} hover={props.hover} />
      ))}
    </ColorPickerDiv>
  );
}

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  hover: PropTypes.func.isRequired
};

export default ColorPicker;
