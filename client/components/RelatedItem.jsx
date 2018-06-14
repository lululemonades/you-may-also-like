import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';

/* ~~~~~~ Styles ~~~~~~~ */

const RelatedTitle = styled.div`
    position: relative;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: left;
    margin: 3% 0;
    cursor: pointer;
`;

const RelatedPrice = styled.div`
  position: relative;
  font-size: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

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
`;

const BannerItem = styled.div`
  margin-left: 2%;
  cursor: grab;
  &:hover ${ColorPickerDiv} {
    opacity: 1;
  } 
`;

/* ~~~~~~ Components ~~~~~~~ */

class RelatedItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hovering: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover () {
    const currentState = this.state.hovering;
    this.setState({ hovering: !currentState });
  }

  renderImage () {
    if (this.state.hovering) {
      return (<img
        style={{ width: 300, cursor: 'pointer' }}
        alt=""
        src={this.props.item.main}
        onMouseOver={this.handleHover}
        onFocus={this.handleHover}
        onMouseOut={this.handleHover}
        onBlur={this.handleHover}
      />);
    }
    return (<img
      style={{ width: 300, cursor: 'pointer' }}
      alt=""
      src={this.props.item.hover}
      onMouseOver={this.handleHover}
      onFocus={this.handleHover}
      onMouseOut={this.handleHover}
      onBlur={this.handleHover}
    />);
  }

  render () {
    const { color, title, price } = this.props.item;
    return (
      <BannerItem>
        <ImageWrapper>
          {this.renderImage()}
          <ColorPickerDiv>
            <ColorPicker colors={color} hover={this.handleHover} isHovering={this.state.hovering} />
          </ColorPickerDiv>
        </ImageWrapper>
        <RelatedTitle>{title}</RelatedTitle>
        <RelatedPrice>{price}</RelatedPrice>
      </BannerItem>
    );
  }
}

RelatedItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    hover: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    color: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
};

export default RelatedItem;
