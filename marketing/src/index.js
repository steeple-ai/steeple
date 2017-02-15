// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Import react-toolbox
import theme from '../public/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import '../public/react-toolbox/theme.css'

// Import Application
import Application from './components/application/Application';

// Global CSS Imports
import './styles/index.css';

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(document.getElementsByClassName('_styletron_hydrate_'))}>
    <ThemeProvider theme={theme}>
      <Application />
    </ThemeProvider>
  </StyletronProvider>,
  document.getElementById('root')
);
