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
    router: PropTypes.object,
  };

  onActive = (tab) => {
    const {
      router,
    } = this.props;

    router.push(tab.props.value);
  };

  render() {
    const {
      location
    } = this.props;

    return (
      <Tabs
        inkBarStyle={inkBarStyles}
        style={tabsStyles}
        tabItemContainerStyle={tabItemContainerStyles}
        value={location.pathname}
      >
        {map(navigationItems, (navigationItem, key) => (
          <Tab
            key={key}
            label={navigationItem.value}
            onActive={this.onActive}
            style={tabStyles}
            value={key}
          />
        ))}
      </Tabs>
    );
  }
}

export default TabsWrapper;
