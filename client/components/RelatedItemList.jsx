import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RelatedItem from './RelatedItem';

/* ~~~~~~ Styles ~~~~~~~ */

const RelatedItemListWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 25%;
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
  items: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default RelatedItemList;
