import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import prop from 'lodash/fp/prop';
import {convertRatingScale, convertToDecimal} from '../../utils';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid ${prop('theme.palette.tertiary')};
  font-size: ${prop('theme.fontSizes.small')};
  text-align: center;
`;

const ProductItem = ({ product }) => (
  <Figure>
    <img src={product.image}
         alt={product.name}/>
    <figcaption>
      <strong>{product.name}</strong>
      <p>{product.type}</p>
      <p>{convertToDecimal(product.price)}/{product.size}</p>
      <strong>{convertRatingScale(product.rating)}</strong>
    </figcaption>
  </Figure>
);

ProductItem.propTypes = {
  product: T.object.isRequired
};

export default ProductItem;