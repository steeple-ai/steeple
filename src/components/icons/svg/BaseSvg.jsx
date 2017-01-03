import React, { PureComponent, PropTypes } from 'react';

class BaseSVG extends PureComponent {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.string,
  };

  static defaultProps = {
    variant: 'default',
    style: {},
  };

  getSVGProps(style) {
    const {
      alt,
      className,
      name,
      style: propsStyle,
    } = this.props;

    return {
      alt,
      className,
      name,
      style: {
        ...style,
        ...propsStyle,
      },
    };
  }

  render() {
    return <div>Remember to override BaseSVG render method</div>;
  }
}

export default BaseSVG;
