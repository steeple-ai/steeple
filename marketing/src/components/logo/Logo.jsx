import React, { Component } from 'react';

import {
  LogoContainer,
} from './styles';

class Logo extends Component {
  render() {
    return (
      <LogoContainer width="32px" height="32px" viewBox="24 8 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...this.props}>
        <defs>
          <circle id="path-1" cx="16" cy="16" r="16" style={{ overflow: 'hidden' }} />
          <linearGradient x1="87.8155791%" y1="0%" x2="44.7136346%" y2="46.626616%" id="linearGradient-3">
            <stop stopColor="#FFC107" offset="0%" />
            <stop stopColor="#FFA000" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Group-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(24.000000, 8.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <use id="Oval" fill="#FFC107" xlinkHref="#path-1" />
          <polygon id="Rectangle-2" fill="url(#linearGradient-3)" mask="url(#mask-2)" transform="translate(17.281039, 22.399246) rotate(45.000000) translate(-17.281039, -22.399246) " points="5.06243439 11.9914997 29.4996429 11.9914997 25.877926 32.8069914" />
          <polygon id="Triangle" fill="#3F51B5" mask="url(#mask-2)" points="16 6.4 28.8 38.4 16 38.4" />
          <polygon id="Triangle-Copy" fill="#7986CB" mask="url(#mask-2)" points="16 6.4 3.2 38.4 16 38.4" />
        </g>
      </LogoContainer>
    );
  }
}

export default Logo;
