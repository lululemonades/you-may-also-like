import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

ColorBox.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorBox;
