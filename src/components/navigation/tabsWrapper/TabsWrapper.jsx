import React, { PureComponent, PropTypes } from 'react';
import map from 'lodash/map';

import { Tabs, Tab } from 'material-ui/Tabs';

import {
  inkBarStyles,
  tabItemContainerStyles,
  tabsStyles,
  tabStyles,
} from './styles';

const navigationItems = {
  '/': {
    value: 'home',
  },
  '/congregation': {
    value: 'congregation'
  },
  '/team': {
    value: 'team',
  },
  '/offering': {
    value: 'offering',
  },
  '/status': {
    value: 'status',
  },
};

class TabsWrapper extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
  };

  onActive(tab) {

  }

  render() {
    const {
      location
    } = this.props;

    console.log(location, );

    return (
      <Tabs
        inkBarStyle={inkBarStyles}
        style={tabsStyles}
        tabItemContainerStyle={tabItemContainerStyles}
        value={navigationItems[location.pathname].value}
      >
        {map(navigationItems, (navigationItem, key) => (
          <Tab
            key={key}
            label={navigationItem.value}
            onActive={this.onActive}
            style={tabStyles}
            value={navigationItem.value}
          />
        ))}
      </Tabs>
    );
  }
}

export default TabsWrapper;
