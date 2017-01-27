import React, { PureComponent, PropTypes } from 'react';

import Avatar from 'material-ui/Avatar';

class Teamvitar extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.generateAvitarInitials = () => {
      const {
        name
      } = this.props;

      const nameArray = name.split(' ');

      if (!nameArray.length) {
        console.warn(`'${name}' is not valid.`);
      } else if (nameArray.length === 1) {
        return nameArray[0][0] + nameArray[0][1];
      } else {
        return nameArray[0][0] + nameArray[nameArray.length - 1][0]
      }
    }
  }

  render() {
    return (
      <Avatar>
        {this.generateAvitarInitials()}
      </Avatar>
    );
  }
}

export default Teamvitar;
