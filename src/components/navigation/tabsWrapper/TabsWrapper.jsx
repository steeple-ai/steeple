import React, { PureComponent, PropTypes } from 'react';
import map from 'lodash/map';

import { Tabs, Tab } from 'material-ui/Tabs';

import {
  getInkBarStyles,
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

  constructor(props) {
    super(props);

    this.state = {
      activeTabWidth: null, // Needs to be null or there is a strange animation on load.
      leftOffset: null, // Needs to be null or there is a strange animation on load.
    };
  }

  componentDidMount() {
    const {
      location
    } = this.props;

    // Get active tab for initial load. We need the dom to be there to figure out where inkBar can go.
    const activeTab = document.querySelectorAll(`.navigation__tab--${navigationItems[location.pathname].value}`);

    // Call helper to set state.
    this.setActiveTabState(activeTab);
  }

  onActive = (tab) => {
    const {
      router,
    } = this.props;

    // Get new active tab so inkBar can move to location.
    const activeTab = document.querySelectorAll(`.navigation__tab--${tab.props.label}`);

    // Call helper to set state.
    this.setActiveTabState(activeTab);

    // Push the route to router so that we can go there.
    router.push(tab.props.value);
  };

  setActiveTabState = (activeTab) => this.setState({
    // Get width of active tab, will become the width of inkBar.
    activeTabWidth: activeTab[0].offsetWidth,
    // Get the left offset of the activeTab. This is off of the viewport, no the parent.
    // We therefor need to get the offset of the first tab, and subtract that off.
    leftOffset: activeTab[0].offsetLeft - document.querySelectorAll('.navigation__tab')[0].offsetLeft,
  });

  render() {
    const {
      location
    } = this.props;
    const {
      activeTabWidth,
      leftOffset
    } = this.state;

    return (
      <Tabs
        inkBarStyle={getInkBarStyles(activeTabWidth, leftOffset)}
        style={tabsStyles}
        tabItemContainerStyle={tabItemContainerStyles}
        value={location.pathname}
      >
        {map(navigationItems, (navigationItem, key) => (
          <Tab
            className={`navigation__tab navigation__tab--${navigationItem.value}`}
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
