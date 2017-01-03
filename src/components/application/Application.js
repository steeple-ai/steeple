import React, { PureComponent, PropTypes } from 'react';


import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import {
  ApplicationContainer,
  inkBarStyles,
  tabsStyles,
  tabStyles,
  titleStyles,
} from './styles';

class Application extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <ApplicationContainer>
        <AppBar
          showMenuIconButton={false}
          titleStyle={titleStyles}
        >
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
        {children}
      </ApplicationContainer>
    );
  }
}

export default Application;
