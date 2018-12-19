import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import ProductItem from '../Product/Product.component';
import FilterByBrand from '../Filter/Filter.component';
import {TABLET, DESKTOP} from '../../theme/layout';
import kebabCase from 'lodash/kebabCase';

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
  state = {
    brandSelected: ""
  };

  handleSelectChange = brandSelected => {
    this.setState({ brandSelected });
  };

  /**
   * To filter the list of products, onChange the brand selected
   * @returns {Array}
   */
  filteredProducts = () => {
    const { brandSelected } = this.state;
    const { productsList } = this.props;

    if (!brandSelected.length) return productsList;

    return productsList.filter(p => kebabCase(p.brand) === brandSelected);
  };

  render() {
    const { productsList } = this.props;

    return (
      <React.Fragment>
        <FilterByBrand products={productsList} handleSelectBrand={this.handleSelectChange}/>
        <ListWrapper>
          {this.filteredProducts().map(p => (
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