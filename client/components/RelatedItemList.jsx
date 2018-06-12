import React from 'react';
import RelatedItem from './RelatedItem.jsx';

function RelatedItemList (props) {
  return (
    <div className="related-item-list">
      {props.items.map((item) => (
        <RelatedItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default RelatedItemList;
