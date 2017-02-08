import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/application/Application';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Global CSS Imports
import './styles/index.css';

// Locate the Styletron style tag
const styleElements = document.getElementsByClassName('_styletron_hydrate_');


ReactDOM.render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <Application />
  </StyletronProvider>,
  document.getElementById('root')
);
