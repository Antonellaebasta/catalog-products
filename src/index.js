import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DefaultThemeProvider from './theme/theme';

ReactDOM.render(<DefaultThemeProvider><App /></DefaultThemeProvider>, document.getElementById('root'));
