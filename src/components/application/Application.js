import React, { PureComponent, PropTypes } from 'react';
import throttle from 'lodash/throttle';

import Navigation from '../navigation/Navigation';
import FloatingActionButtonWrapper from './floatingActionButtonWrapper/FloatingActionButtonWrapper';

import {
  ApplicationContainer,
  Main,
} from './styles';

class Application extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    ...Navigation.propTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      isMainScrolled: false,
    };

    this.onScrollMain = throttle(() => {
      if (!!this.main.scrollTop) {
        // Check is there is a scrollTop
        if (!this.state.isMainScrolled) {
          // Check that we have not set the isMainScrolled to true.

          this.setState({
            isMainScrolled: true,
          })
        }
      } else {
        // scrollTop is 0.

        if (this.state.isMainScrolled) {
          // Check that we have not set the isMainScrolled to false.

          this.setState({
            isMainScrolled: false,
          })
        }
      }
    }, 100);
  }

  render() {
    const {
      Component,
      location,
      router,
    } = this.props;
    const {
      isMainScrolled,
    } = this.state;

    return (
      <ApplicationContainer>
        <Navigation
          location={location}
          isMainScrolled={isMainScrolled}
          router={router}
      />
        <Main
          onScroll={this.onScrollMain}
          innerRef={(r) => this.main = r} // Have to use innerRef since this is a styletron component.
        >
          <Component />
        </Main>

        <FloatingActionButtonWrapper/>
      </ApplicationContainer>
    );
  }
}

export default Application;
