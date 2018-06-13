import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker.jsx';

const RelatedTitle = styled.div`
    position: relative;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.2;
    text-transform: capitalize;
    text-align: left;
    margin: 3% 0;
`;

const RelatedPrice = styled.div`
  position: relative;
  font-size: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const BannerItem = styled.div`
  margin-left: 2%;
`;

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
        style={{ width: 300 }}
        alt=""
        src={this.props.item.main}
        onMouseOver={this.handleHover}
        onFocus={this.handleHover}
        onMouseOut={this.handleHover}
        onBlur={this.handleHover}
      />);
    }
    return (<img
      style={{ width: 300 }}
      alt=""
      src={this.props.item.hover}
      onMouseOver={this.handleHover}
      onFocus={this.handleHover}
      onMouseOut={this.handleHover}
      onBlur={this.handleHover}
    />);
  }

  render () {
    return (
      <BannerItem>
        <ImageWrapper>
          {this.renderImage()}
          <ColorPicker colors={this.props.item.color} hover={this.handleHover} />
        </ImageWrapper>
        <RelatedTitle>{this.props.item.title}</RelatedTitle>
        <RelatedPrice>{this.props.item.price}</RelatedPrice>

      </BannerItem>
    );
  }
}

RelatedItem.propTypes = {
  item: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default RelatedItem;
