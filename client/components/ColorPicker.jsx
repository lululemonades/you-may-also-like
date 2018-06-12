import React from 'react';
import ColorBox from './ColorBox.jsx';

function ColorPicker (props) {
  return (
    <div className="color-picker" >
      There should be colors listed here

      {props.colors.map((color, index) => (
        <ColorBox color={color} key={index} />
      ))}
    </div>
  );
}

export default ColorPicker;
