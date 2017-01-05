import React, { PureComponent, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';

import Icon from '../icons/Icon';
import TabsWrapper from './tabsWrapper/TabsWrapper';
import UserSettings from './userSettings/UserSettings';

import {
  Shadow,
  appBarStyles,
  logoStyles,
  titleStyles,
} from './styles';

class Navigation extends PureComponent {
  static propTypes = {
    isMainScrolled: PropTypes.bool,
    muiTheme: PropTypes.object,
    ...TabsWrapper.propTypes
  };

  render() {
    const {
      isMainScrolled,
      location,
      muiTheme,
      router,
    } = this.props;

    return (
      <AppBar
        showMenuIconButton={false}
        style={appBarStyles}
        title={null}
        titleStyle={titleStyles}
        zDepth={0}
      >
        <Shadow
          isActive={isMainScrolled}
          muiTheme={muiTheme}
        />

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
