import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import prop from 'lodash/fp/prop';
import {TABLET, DESKTOP} from '../../theme/layout';
import {convertRatingScale, convertToDecimal} from '../../utils';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  flex: 0 0 44%;
  align-items: center;
  margin: 0 5px 10px;
  font-size: ${prop('theme.fontSizes.small')};
  text-align: center;
  
  &:hover {
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.15);
  }
  
  @media ${TABLET} {
    flex: 0 0 calc(90% / 3);
  }
  
  @media ${DESKTOP} {
    flex: 0 0 calc(90% / 4);
  }
  
  @supports (display: grid) {
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 215px;
  height: auto;
`;

const Figcaption = styled.figcaption`
  padding-bottom: 20px;
`;

const Rating = styled.span`
  &::before {
    content: "★";
    color: ${prop('theme.palette.tertiary')};
  }
`;

const ProductItem = ({ product }) => (
  <Figure>
    <Image src={product.image}
         alt={product.name}/>
    <Figcaption>
      <strong>{product.name}</strong>
      <p>{product.type}</p>
      <p><strong>{convertToDecimal(product.price)} € / {product.size}</strong></p>
      {[...Array(convertRatingScale(product.rating)).keys()].map(i => <Rating key={`star-${i}`}/>)}
    </Figcaption>
  </Figure>
);

ProductItem.propTypes = {
  product: T.object.isRequired
};

export default ProductItem;