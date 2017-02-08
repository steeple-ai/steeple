import React, { Component, PropTypes } from 'react';

import { LogotypeContainer } from './styles';

class Logotype extends Component {
  render() {
    const {
      className,
      fill,
    } = this.props;

    return (
      <LogotypeContainer
        className={className}
        height="132"
        viewBox="-175 419 602 132"
        width="602"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-113.2 450.3C-113.2 447-113.8 444.1-115.1 441.6 -116.4 439.2-118.2 437.1-120.4 435.5 -122.6 433.8-125.1 432.6-128 431.7 -130.9 430.8-133.9 430.4-137.1 430.4 -139.9 430.4-142.5 430.8-145 431.5 -147.5 432.2-149.7 433.2-151.7 434.6 -153.7 435.9-155.2 437.6-156.4 439.6 -157.5 441.5-158.1 443.8-158.1 446.4L-158.1 447.3C-158.1 450-157.5 452.4-156.4 454.4 -155.2 456.4-153.5 458-151.3 459.4 -149 460.8-146.2 462-142.8 462.9 -139.5 463.8-135.5 464.6-131 465.3 -120.5 466.9-112.7 470-107.7 474.6 -102.7 479.1-100.2 485.2-100.2 492.9L-100.2 494.6C-100.2 499-101 502.9-102.4 506.5 -103.9 510.1-106.1 513.2-109.1 515.8 -112 518.4-115.6 520.4-119.9 521.9 -124.3 523.3-129.3 524-134.9 524 -141.4 524-147 523.1-152 521.2 -156.9 519.3-161.1 516.7-164.4 513.4 -167.7 510.1-170.2 506.2-171.9 501.8 -173.7 497.3-174.5 492.4-174.5 487.2L-174.5 482.8 -162.4 482.8 -162.4 486.3C-162.4 495.1-160 501.7-155.2 506.2 -150.3 510.6-143.6 512.8-134.9 512.8 -127.4 512.8-121.8 511.1-118 507.8 -114.2 504.5-112.3 500.1-112.3 494.6L-112.3 493.8C-112.3 488.5-114.3 484.5-118.1 481.7 -122 478.9-128.3 476.9-137.1 475.6 -142.2 475-146.8 473.9-150.8 472.5 -154.9 471.1-158.4 469.3-161.3 467.1 -164.2 464.8-166.4 462.1-167.9 458.9 -169.4 455.8-170.2 452-170.2 447.7L-170.2 446C-170.2 442-169.4 438.4-167.8 435.2 -166.1 431.9-163.8 429.1-160.9 426.7 -158 424.3-154.5 422.4-150.4 421.1 -146.3 419.8-141.8 419.2-136.9 419.2 -131.3 419.2-126.2 420-121.7 421.6 -117.3 423.3-113.5 425.4-110.4 428.2 -107.4 430.9-105 434.1-103.5 437.8 -101.9 441.5-101.1 445.4-101.1 449.4L-101.1 455.5 -113.2 455.5 -113.2 450.3ZM-82.8 450.6L-60.3 450.6 -60.3 421.2 -49.1 421.2 -49.1 450.6 -21.4 450.6 -21.4 460.9 -49.1 460.9 -49.1 507.3C-49.1 510.2-47.8 511.6-45.2 511.6L-24.9 511.6 -24.9 522 -49.2 522C-52.5 522-55.2 520.9-57.2 518.8 -59.3 516.7-60.3 514-60.3 510.8L-60.3 460.9 -82.8 460.9 -82.8 450.6ZM16 489.7C16.3 496.8 18.5 502.6 22.6 506.9 26.7 511.2 32.5 513.4 39.9 513.4 43.3 513.4 46.2 513 48.7 512.2 51.2 511.4 53.3 510.4 55.1 509 56.9 507.7 58.3 506.1 59.4 504.4 60.5 502.6 61.4 500.7 62.1 498.7L72.7 501.6C70.7 508.2 67 513.6 61.6 517.8 56.1 521.9 48.8 524 39.6 524 34.5 524 29.8 523.1 25.6 521.4 21.3 519.6 17.6 517.1 14.6 513.8 11.5 510.5 9.1 506.6 7.4 502.1 5.6 497.6 4.8 492.6 4.8 487.2L4.8 483.7C4.8 478.7 5.6 474 7.4 469.7 9.2 465.4 11.7 461.7 14.8 458.6 18 455.4 21.7 453 26 451.2 30.3 449.4 34.9 448.6 39.9 448.6 45.8 448.6 50.8 449.6 55.1 451.8 59.4 454 62.9 456.6 65.6 459.8 68.3 463 70.4 466.4 71.6 470.2 72.9 473.9 73.6 477.4 73.6 480.5L73.6 489.7 16 489.7ZM39.9 459.2C36.7 459.2 33.8 459.7 31 460.7 28.3 461.7 25.9 463.2 23.8 465 21.8 466.8 20.1 468.9 18.8 471.4 17.5 473.8 16.7 476.5 16.3 479.4L62.4 479.4C62.2 476.3 61.4 473.5 60.1 471 58.8 468.5 57.2 466.4 55.1 464.7 53 463 50.7 461.6 48 460.7 45.4 459.7 42.7 459.2 39.9 459.2ZM104.1 489.7C104.4 496.8 106.6 502.6 110.7 506.9 114.9 511.2 120.6 513.4 128 513.4 131.4 513.4 134.3 513 136.8 512.2 139.3 511.4 141.4 510.4 143.2 509 145 507.7 146.4 506.1 147.5 504.4 148.6 502.6 149.5 500.7 150.2 498.7L160.9 501.6C158.8 508.2 155.1 513.6 149.7 517.8 144.3 521.9 137 524 127.7 524 122.6 524 118 523.1 113.7 521.4 109.4 519.6 105.8 517.1 102.7 513.8 99.6 510.5 97.2 506.6 95.5 502.1 93.8 497.6 92.9 492.6 92.9 487.2L92.9 483.7C92.9 478.7 93.8 474 95.6 469.7 97.3 465.4 99.8 461.7 103 458.6 106.1 455.4 109.9 453 114.1 451.2 118.4 449.4 123 448.6 128 448.6 133.9 448.6 138.9 449.6 143.2 451.8 147.5 454 151 456.6 153.7 459.8 156.5 463 158.5 466.4 159.8 470.2 161.1 473.9 161.7 477.4 161.7 480.5L161.7 489.7 104.1 489.7ZM128 459.2C124.9 459.2 121.9 459.7 119.2 460.7 116.4 461.7 114 463.2 112 465 109.9 466.8 108.2 468.9 106.9 471.4 105.6 473.8 104.8 476.5 104.4 479.4L150.5 479.4C150.3 476.3 149.6 473.5 148.3 471 147 468.5 145.3 466.4 143.2 464.7 141.2 463 138.8 461.6 136.2 460.7 133.5 459.7 130.8 459.2 128 459.2ZM192.7 550.8L181.4 550.8 181.4 450.6 192.7 450.6 192.7 461.8 194.4 461.8C196.9 457.5 200.4 454.2 204.8 451.9 209.2 449.7 214 448.6 219.2 448.6 223.6 448.6 227.8 449.4 231.7 451 235.6 452.6 239.1 455 242.1 458.1 245.2 461.1 247.6 464.9 249.3 469.4 251.1 474 252 479.1 252 484.8L252 487.7C252 493.6 251.1 498.8 249.4 503.3 247.7 507.8 245.3 511.6 242.3 514.7 239.3 517.7 235.7 520.1 231.7 521.6 227.7 523.2 223.4 524 218.9 524 216.6 524 214.2 523.8 211.8 523.2 209.4 522.7 207.2 521.9 205 520.8 202.8 519.7 200.8 518.3 199 516.7 197.2 515.2 195.7 513.3 194.4 511.1L192.7 511.1 192.7 550.8ZM216.6 513.4C220 513.4 223.2 512.8 226.1 511.6 229 510.4 231.5 508.7 233.6 506.4 235.8 504.2 237.5 501.6 238.7 498.4 239.9 495.2 240.5 491.7 240.5 487.7L240.5 484.8C240.5 481 239.9 477.5 238.7 474.4 237.5 471.3 235.8 468.6 233.6 466.3 231.5 464.1 228.9 462.3 226 461.1 223.1 459.8 219.9 459.2 216.6 459.2 213.2 459.2 210.1 459.9 207.2 461.2 204.3 462.5 201.8 464.3 199.7 466.6 197.5 468.9 195.8 471.6 194.6 474.8 193.3 478.1 192.7 481.6 192.7 485.4L192.7 487.2C192.7 491.1 193.3 494.7 194.6 497.9 195.8 501.1 197.5 503.9 199.7 506.2 201.8 508.5 204.3 510.2 207.2 511.5 210.1 512.7 213.2 513.4 216.6 513.4ZM272.2 511.6L298.1 511.6 298.1 431.6 273 431.6 273 421.2 309.3 421.2 309.3 511.6 335.2 511.6 335.2 522 272.2 522 272.2 511.6ZM368.5 489.7C368.8 496.8 371 502.6 375.1 506.9 379.3 511.2 385 513.4 392.4 513.4 395.8 513.4 398.7 513 401.2 512.2 403.7 511.4 405.8 510.4 407.6 509 409.4 507.7 410.8 506.1 411.9 504.4 413 502.6 413.9 500.7 414.6 498.7L425.2 501.6C423.2 508.2 419.5 513.6 414.1 517.8 408.7 521.9 401.3 524 392.1 524 387 524 382.4 523.1 378.1 521.4 373.8 519.6 370.1 517.1 367.1 513.8 364 510.5 361.6 506.6 359.9 502.1 358.1 497.6 357.3 492.6 357.3 487.2L357.3 483.7C357.3 478.7 358.2 474 359.9 469.7 361.7 465.4 364.2 461.7 367.4 458.6 370.5 455.4 374.2 453 378.5 451.2 382.8 449.4 387.4 448.6 392.4 448.6 398.3 448.6 403.3 449.6 407.6 451.8 411.9 454 415.4 456.6 418.1 459.8 420.8 463 422.9 466.4 424.2 470.2 425.5 473.9 426.1 477.4 426.1 480.5L426.1 489.7 368.5 489.7ZM392.4 459.2C389.2 459.2 386.3 459.7 383.6 460.7 380.8 461.7 378.4 463.2 376.4 465 374.3 466.8 372.6 468.9 371.3 471.4 370 473.8 369.2 476.5 368.8 479.4L414.9 479.4C414.7 476.3 413.9 473.5 412.6 471 411.3 468.5 409.7 466.4 407.6 464.7 405.5 463 403.2 461.6 400.5 460.7 397.9 459.7 395.2 459.2 392.4 459.2Z"
          fill={fill}
        />
      </LogotypeContainer>
    );
  }
}

Logotype.defaultProps = {
  className: '',
  fill: '#FF5722',
};

Logotype.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default Logotype;
