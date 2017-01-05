import React, { PureComponent, PropTypes } from 'react';
import throttle from 'lodash/throttle';

import Navigation from '../navigation/Navigation';
import FloatingActionButtonWrapper from './floatingActionButtonWrapper/FloatingActionButtonWrapper';

import {
  ApplicationContainer,
  Main,
  Shadow,
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


    this.scrollMainToTop = () => {
      const scrollDuration = this.main.scrollTop;

      // If scrollTop is 0, don't run the function.
      if (scrollDuration === 0) {
        return;
      }

      // Get a time stamp and a count started.
      let oldTimestamp = performance.now();
      let scrollCount = 0;

      // Step function used by requestAnimationFrame to make this nice and smooth,
      const step = (newTimestamp) => {
        // We are making an ease curve out of scrollCount. Using Math.PI and Math.cos,
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));

        // If the scroll count has gone outside the bounds of PI, we set the scroll top to 0.
        if (scrollCount >= Math.PI) {
          this.main.scrollTop = 0;
        }

        // If the scroll top is 0, end the function. We did our job.
        if (this.main.scrollTop === 0) {
          return;
        }

        // Set the scroll top base on our easing curve times the duration. Higher duration, longer curve.
        this.main.scrollTop = Math.round(scrollDuration * Math.cos(scrollCount));

        // Reset timestamp.
        oldTimestamp = newTimestamp;

        // Recall function.
        window.requestAnimationFrame(step);
      };

      // Initiate the scroll animation.
      window.requestAnimationFrame(step);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.Component !== this.props.Component) {
      this.scrollMainToTop();
    }
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
          router={router}
      />
        <Shadow
          isActive={isMainScrolled}
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
