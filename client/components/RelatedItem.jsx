import React from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';

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
        style={{ width: 290, cursor: 'pointer' }}
        alt=""
        src={this.props.item.main}
        onMouseOver={this.handleHover}
        onFocus={this.handleHover}
        onMouseOut={this.handleHover}
        onBlur={this.handleHover}
      />);
    }
    return (<img
      style={{ width: 290, cursor: 'pointer' }}
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
      <div className="banner-item">
        <div className="image-wrapper">
          {this.renderImage()}
          <ColorPicker colors={color} hover={this.handleHover} isHovering={this.state.hovering} />
        </div>
        <div className="related-title">{title}</div>
        <div className="related-price">{price}</div>
      </div>
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
