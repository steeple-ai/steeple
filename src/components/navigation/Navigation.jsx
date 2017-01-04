import React, { PureComponent } from 'react';

import AppBar from 'material-ui/AppBar';
import TabsWrapper from './tabsWrapper/TabsWrapper';

import Icon from '../icons/Icon';

import {
  logoStyles,
  titleStyles,
} from './styles';

class Navigation extends PureComponent {
  static propTypes = {
    ...TabsWrapper.propTypes
  };

  render() {
    const {
      location,
      router,
    } = this.props;

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

        <TabsWrapper
          location={location}
          router={router}
        />
      </AppBar>
    );
  }
}

export default Navigation;
