import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RelatedItem from './RelatedItem';

/* ~~~~~~ Styles ~~~~~~~ */

const RelatedItemListWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2%;
`;

/* ~~~~~~ Components ~~~~~~~ */

const RelatedItemList = props => (
  <RelatedItemListWrapper>
    {props.items.map(item => (
      <RelatedItem item={item} key={item.id} />
    ))}
  </RelatedItemListWrapper>
);

RelatedItemList.propTypes = {
  items: PropTypes.shape.isRequired
};

export default RelatedItemList;
