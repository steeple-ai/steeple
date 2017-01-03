import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';
import './index.css';

const styleElements = document.getElementsByClassName('_styletron_hydrate_');

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    {Router}
  </StyletronProvider>,
  document.getElementById('root')
);
