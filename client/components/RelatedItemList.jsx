import React from 'react';
import RelatedItem from './RelatedItem.jsx';

function RelatedItemList (props) {
  return (
    <div className="related-item-list">
      {props.items.map(function (item, index) {
        return <RelatedItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default RelatedItemList;
