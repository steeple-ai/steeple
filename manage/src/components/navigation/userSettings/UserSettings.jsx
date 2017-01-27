import React, { PureComponent } from 'react';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

import {
  UserSettingsContainer,
  userAvatarStyle,
} from './styles';

class UserSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  onTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  onRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      anchorEl,
      open,
    } = this.state;

    return (
      <UserSettingsContainer>
        <Avatar
          onTouchTap={this.onTouchTap}
          size={32}
          src="https://pbs.twimg.com/profile_images/791792092477399040/UJoYVQZ7_400x400.jpg"
          style={userAvatarStyle}
        />

        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.onRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <Divider />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </UserSettingsContainer>
    );
  }
}

export default UserSettings;
