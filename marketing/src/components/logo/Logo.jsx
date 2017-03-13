import React, { Component } from 'react';

import {
  LogoContainer,
} from './styles';

class Logo extends Component {
  render() {
    return (
      <LogoContainer
        width="32"
        height="32"
        viewBox="24 8 32 32"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >
        <defs>
          <circle
            id="a"
            cx="16"
            cy="16"
            r="16"
            overflow="hidden"
          />
          <linearGradient
            x1="87.816%"
            y1="0%"
            x2="44.714%"
            y2="46.627%"
            id="b"
          >
            <stop
              stopColor="#FFC107"
              offset="0%"
            />
            <stop
              stopColor="#FFA000"
              offset="100%"
            />
          </linearGradient>
        </defs>

        <g
          fill="none"
          fillRule="evenodd"
          transform="translate(24 8)"
        >
          <mask
            id="c"
            fill="#fff"
          >
            <use
              xmlnsXlink="http://www.w3.org/1999/xlink"
               xlinkHref="#a"
            />
          </mask>
          <use
            fill="#FFC107"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#a"
          />
          <path
            fill="url(#b)"
            mask="url(#c)"
            transform="rotate(45 17.28 22.4)"
            d="M5.062 11.99H29.5l-3.622 20.817"
          />
          <path
            fill="#3F51B5"
            mask="url(#c)"
            d="M16 6.4l12.8 32H16"
          />
          <path
            fill="#7986CB"
            mask="url(#c)"
            d="M16 6.4l-12.8 32H16"
          />
        </g>
      </LogoContainer>
    );
  }
}

export default Logo;
