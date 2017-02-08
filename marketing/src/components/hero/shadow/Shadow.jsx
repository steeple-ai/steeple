import React, { Component } from 'react';

import { ShadowContainer } from './styles';

class Shadow extends Component {
  render() {
    return (
      <ShadowContainer
        width="2209px"
        height="2209px"
        viewBox="-26 204 2209 2209"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient x1="50%" y1="0.746787365%" x2="0.383545093%" y2="0%" id="linearGradient-1">
            <stop stopColor="#FFC107" offset="0%" />
            <stop stopColor="#FFA000" offset="100%" />
          </linearGradient>
        </defs>
        <polygon id="Rectangle-2" stroke="none" fill="url(#linearGradient-1)" fillRule="evenodd"  points="43.8407231 781.383573 2113.26294 784.212 1098.18573 1834.7891" />
      </ShadowContainer>
    );
  }
}

export default Shadow;
