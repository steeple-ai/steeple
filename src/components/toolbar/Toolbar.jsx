import React, { PureComponent } from 'react';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import Icon from '../icons/Icon';

import {
  inkBarStyles,
  tabsStyles,
  tabStyles,
  titleStyles,
  logoStyles,
} from './styles';

class Toolbar extends PureComponent {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        titleStyle={titleStyles}
        title={null}
      >
        <Icon
          style={logoStyles}
          name="logo"
        />

        <Tabs
          inkBarStyle={inkBarStyles}
          style={tabsStyles}
        >
          <Tab
            style={tabStyles}
            label="HOME"
          />
          <Tab
            style={tabStyles}
            label="CONGREGATION"
          />
          <Tab
            label="TEAM"
            style={tabStyles}
          />
          <Tab
            label="OFFERING"
            style={tabStyles}
          />
          <Tab
            label="STATUS"
            style={tabStyles}
          />
        </Tabs>
      </AppBar>
    );
  }
}

export default Toolbar;
