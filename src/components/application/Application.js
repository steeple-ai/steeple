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
      navigationZDepth: 0,
    };

    this.onScrollMain = throttle(() => {
      if (!!this.main.scrollTop) {
        // Check is there is a scrollTop
        if (this.state.navigationZDepth !== 2) {
          // Check that we have not set the navigationZDepth to reflect that already.

          this.setState({
            navigationZDepth: 2,
          })
        }
      } else {
        // scrollTop is 0.

        if (this.state.navigationZDepth !== 0) {
          // CHeck that we have set navigationZDepth to reflect that already.

          this.setState({
            navigationZDepth: 0,
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
      navigationZDepth,
    } = this.state;

    return (
      <ApplicationContainer>
        <Navigation
          location={location}
          navigationZDepth={navigationZDepth}
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
