import React, { PureComponent, PropTypes } from 'react';

import LogoIcon from './svg/logo.svg';

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
  };

  static IconTypes = {
    logo: LogoIcon,
  };

  render() {
    const {
      name,
      style,
    } = this.props;

    const IconType = Icon.IconTypes[name];

    return IconType ? (
        <IconType className="icon" {...this.props} style={style} />
      ) : (
        <span>No Icon Named {name}.</span>
      );
  }
}

export default Icon;
