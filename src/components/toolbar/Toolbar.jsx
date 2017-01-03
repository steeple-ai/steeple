import React, { PureComponent } from 'react';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import Icon from '../icons/Icon';

import {
  inkBarStyles,
  logoStyles,
  tabsStyles,
  tabStyles,
  titleStyles,
} from './styles';

class Toolbar extends PureComponent {
  onActive(event) {
    console.log(event);
  }

  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={null}
        titleStyle={titleStyles}
      >
        <Icon
          style={logoStyles}
          name="logo"
        />

        <Tabs
          inkBarStyle={inkBarStyles}
          style={tabsStyles}
          value="home"
        >
          <Tab
            label="home"
            style={tabStyles}
            value="home"
            onActive={this.onActive}
          />
          <Tab
            label="congregation"
            style={tabStyles}
            value="congregation"
            onActive={this.onActive}
          />
          <Tab
            label="team"
            style={tabStyles}
            value="team"
            onActive={this.onActive}
          />
          <Tab
            label="offering"
            style={tabStyles}
            value="offering"
            onActive={this.onActive}
          />
          <Tab
            label="status"
            style={tabStyles}
            value="status"
            onActive={this.onActive}
          />
        </Tabs>
      </AppBar>
    );
  }
}

export default Toolbar;
