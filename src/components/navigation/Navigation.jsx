import React, { PureComponent, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';

import Icon from '../icons/Icon';
import TabsWrapper from './tabsWrapper/TabsWrapper';
import UserSettings from './userSettings/UserSettings';

import {
  logoStyles,
  titleStyles,
} from './styles';

class Navigation extends PureComponent {
  static propTypes = {
    navigationZDepth: PropTypes.number,
    ...TabsWrapper.propTypes
  };

  render() {
    const {
      location,
      navigationZDepth,
      router,
    } = this.props;

    return (
      <AppBar
        showMenuIconButton={false}
        title={null}
        titleStyle={titleStyles}
        zDepth={navigationZDepth}
      >
        <Icon
          style={logoStyles}
          name="logo"
        />

        <TabsWrapper
          location={location}
          router={router}
        />

        <UserSettings />
      </AppBar>
    );
  }
}

export default Navigation;
