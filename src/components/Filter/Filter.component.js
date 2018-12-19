import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import prop from 'lodash/fp/prop';
import kebabCase from 'lodash/kebabCase';

const SelectBrandWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const Select = styled.select`
  min-height: 34px;
  width: auto;
  margin: 0 0 0 20px;
  padding: 6px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 0;
  border-bottom: 3px solid ${prop('theme.palette.tertiary')};
  background-color: transparent;
  color: ${prop('theme.palette.primary')};
  font-size: 16px;
  cursor: pointer;
`;

class FilterByBrand extends React.Component {
  /**
   * To get the list of brands, without duplications,
   * from the array of products.
   * @param products
   * @returns {Array}
   */
  getBrands= products => {
    return products.reduce(
      (acc, product) =>
        acc.includes(product.brand) ? acc : [...acc, product.brand],
      []
    );
  };

  onSelectChange = e => {
    this.props.handleSelectBrand(e.target.value);
  };

  render() {
    const { products } = this.props;

    return (
      <SelectBrandWrapper>
        <p>Filter by brand:</p>
        <Select onChange={this.onSelectChange}>
          <option value="">All</option>
          {this.getBrands(products).map(brand => (
            <option key={kebabCase(brand)} value={kebabCase(brand)} data-brand={kebabCase(brand)}>
              {brand}
            </option>
          ))}
        </Select>
      </SelectBrandWrapper>
    );
  }
}

FilterByBrand.propTypes = {
  products: T.array.isRequired,
  handleSelectBrand: T.func
};

FilterByBrand.defaultProps = {
  handleSelectBrand: () => {}
};

export default FilterByBrand;