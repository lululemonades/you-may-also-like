import React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker.jsx';

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

function RelatedItem (props) {
  return (
    <BannerItem>
      <ImageWrapper>
        <img
          style={{ width: 300 }}
          alt=""
          src={props.item.main}
          onMouseOver={e => (e.currentTarget.src = props.item.hover)}
          onFocus={e => (e.currentTarget.src = props.item.hover)}
          onMouseOut={e => (e.currentTarget.src = props.item.main)}
          onBlur={e => (e.currentTarget.src = props.item.main)}
        />
        <ColorPicker colors={props.item.color} />
      </ImageWrapper>
      <RelatedTitle>{props.item.title}</RelatedTitle>
      <RelatedPrice>{props.item.price}</RelatedPrice>
    </BannerItem>
  );
}

export default RelatedItem;
