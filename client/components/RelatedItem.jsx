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

/* ~~~~~~ Components ~~~~~~~ */

class RelatedItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hovering: false };
    this.handleHover = this.handleHover.bind(this);
  }

  // this.setState((prevState) => ({
  //   hovering: !prevState
  // }));

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
    const { color, title, price } = this.props.item;
    return (
      <BannerItem>
        <ImageWrapper>
          {this.renderImage()}
          <ColorPicker colors={color} hover={this.handleHover} />
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
    price: PropTypes.string.isRequired
    }).isRequired
};

export default RelatedItem;
