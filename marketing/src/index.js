// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Import Application
import Application from './components/application/Application';

// Global CSS Imports
import './styles/index.css';

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(document.getElementsByClassName('_styletron_hydrate_'))}>
    <Application />
  </StyletronProvider>,
  document.getElementById('root')
);
