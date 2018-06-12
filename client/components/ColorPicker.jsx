import React from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox.jsx';

const ColorPickerDiv = styled.div`
    position: absolute;
    background-color: #fafafa;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    bottom: 4px;
    display: flex;
    &:hover {
      opacity: 1;
    }
`;

function ColorPicker (props) {
  return (
    <ColorPickerDiv>
      {props.colors.map((color, index) => (
        <ColorBox color={color} />
      ))}
    </ColorPickerDiv>
  );
}

export default ColorPicker;
