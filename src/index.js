import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';
import './index.css';

const styleElements = document.getElementsByClassName('_styletron_hydrate_');

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <MuiThemeProvider>
      {Router}
    </MuiThemeProvider>
  </StyletronProvider>,
  document.getElementById('root')
);
