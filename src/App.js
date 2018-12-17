import React, { Component } from 'react';
import styled from 'styled-components';
import prop from 'lodash/fp/prop';
import Catalog from './components/Catalog/Catalog.component';
import productsList from './productsList';

const CatalogWrapper = styled.div`
  min-height: 100vh;
  color: ${prop('theme.palette.primary')};
`;

const Header = styled.header`
  padding: 20px;
  font-size: ${prop('theme.fontSizes.medium')};
  text-align: center;
  color: ${prop('theme.palette.default')};
  background-color: ${prop('theme.palette.tertiary')};
`;

class App extends Component {
  render() {
    return (
      <CatalogWrapper>
        <Header>
          <h1>Catalog Products</h1>
        </Header>
        <Catalog productsList={productsList}/>
      </CatalogWrapper>
    );
  }
}

export default App;
