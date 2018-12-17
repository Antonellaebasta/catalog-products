import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import ProductItem from '../Product/Product.component';
import {TABLET, DESKTOP} from '../../theme/layout';

const ListWrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-flow: wrap;
  justify-content: stretch;
  align-items: center;
  margin: auto;
  padding-top: 30px;
  width: 90%;
  /* End fallback */
  
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    justify-self: stretch;
    justify-items: stretch;
    justify-content: center;
    align-content: stretch;
    grid-auto-flow: row dense;
    
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