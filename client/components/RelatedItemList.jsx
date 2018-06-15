import React from 'react';
import PropTypes from 'prop-types';
import RelatedItem from './RelatedItem';

const RelatedItemList = props => (
  <div className="related-item-list-wrapper">
    {props.items.map(item => (
      <RelatedItem item={item} key={item.id} />
    ))}
  </div>
);

RelatedItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default RelatedItemList;
