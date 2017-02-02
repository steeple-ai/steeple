// Core React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Router Imports
import Router from './router';

// Styletron Imports
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// MaterialUI And Theme Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepOrange500,
  deepOrange700,
} from 'material-ui/styles/colors';

import theme from 'assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

// InjectTapEvent for MaterialUI
import injectTapEventPlugin from 'react-tap-event-plugin';

// Global CSS Imports
import './styles/index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Locate the Styletron style tag
const styleElements = document.getElementsByClassName('_styletron_hydrate_');

// Set our MaterialUI Theme
const muiTheme = getMuiTheme({
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  palette: {
    primary1Color: deepOrange500,
    primary2Color: deepOrange700,
  },
});

ReactDOM.render(
  <StyletronProvider styletron={new Styletron(styleElements)}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ThemeProvider theme={theme}>
        {Router}
      </ThemeProvider>
    </MuiThemeProvider>
  </StyletronProvider>,
  document.getElementById('root')
);
