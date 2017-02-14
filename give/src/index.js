import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import theme from '../public/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import '../public/react-toolbox/theme.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
