import React from 'react';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

const RelatedItemListWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2%;
`;

function RelatedItemList (props) {
  return (
    <RelatedItemListWrapper>
      {props.items.map((item) => (
        <RelatedItem item={item} key={item.id} />
      ))}
    </RelatedItemListWrapper>
  );
}

export default RelatedItemList;
