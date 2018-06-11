import React from 'react';

function RelatedItem (props) {
  return (
    <div className="banner-item">
      <div className="image-wrapper">
        <img
          className="banner-img"
          alt=""
          src={props.item.main}
          onMouseOver={e => (e.currentTarget.src = `${props.item.hover}`)}
          onFocus={e => (e.currentTarget.src = `${props.item.hover}`)}
          onMouseOut={e => (e.currentTarget.src = `${props.item.main}`)}
          onBlur={e => (e.currentTarget.src = `${props.item.main}`)}
        />
        <div className="color-picker">Color Picker</div>
      </div>
      <div className="related-details">{props.item.title}</div>
    </div>
  );
}

export default RelatedItem;
