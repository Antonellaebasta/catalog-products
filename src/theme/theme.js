import React from 'react';
import {ThemeProvider} from 'styled-components';
import T from 'prop-types';

export const theme = {
  palette: {
    default: '#FFFFFF',
    primary: '#292929',
    secondary: '#5F5F5F',
    tertiary: '#FF2A3C'
  },
  fontSizes: {
    small: '14px',
    medium: '20px',
    large: '24px'
  }
};

const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

DefaultThemeProvider.propTypes = {
  children: T.node.isRequired
};

export default DefaultThemeProvider;