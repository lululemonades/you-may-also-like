import React from 'react';
import ColorPicker from './ColorPicker.jsx';

function RelatedItem (props) {
  return (
    <div className="banner-item">
      <div className="image-wrapper">
        <img
          className="banner-img"
          alt=""
          src={props.item.main}
          onMouseOver={e => (e.currentTarget.src = props.item.hover)}
          onFocus={e => (e.currentTarget.src = props.item.hover)}
          onMouseOut={e => (e.currentTarget.src = props.item.main)}
          onBlur={e => (e.currentTarget.src = props.item.main)}
        />
        <ColorPicker colors={props.item.color} />
      </div>
      <div className="related-title">{props.item.title}</div>
      <div className="related-price">{props.item.price}</div>
    </div>
  );
}

export default RelatedItem;
