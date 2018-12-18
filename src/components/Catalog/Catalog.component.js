import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import ProductItem from '../Product/Product.component';
import {TABLET, DESKTOP} from '../../theme/layout';

const ListWrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: stretch;
  margin: 30px auto;
  padding-top: 30px;
  width: 90%;
  /* End fallback */
  
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: stretch;
    
    @media ${TABLET} {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media ${DESKTOP} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

class Catalog extends Component {

  render() {
    const { productsList } = this.props;

    return (
      <React.Fragment>
        <ListWrapper>
          {productsList.map(p => (
            <ProductItem key={p.id} product={p}/>
          ))}
        </ListWrapper>
      </React.Fragment>
    );
  }
};

Catalog.propTypes = {
  productsList: T.array.isRequired
};

export default Catalog;