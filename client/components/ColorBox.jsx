import React from 'react';
import styled from 'styled-components';

const ColorBoxDiv = styled.div`
  height: 28px;
  width: 58px;
  margin: 2%;
  &:hover {
    border: 1px solid black;
  }
`;

function ColorBox (props) {
  return (
    <ColorBoxDiv style={{ backgroundColor: props.color }} />
  );
}

export default ColorBox;
