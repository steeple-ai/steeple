import React, { Component, PropTypes } from 'react';

import Slider from 'react-toolbox/lib/slider/Slider';

import {
  InputLabel,
  PercentStyled,
  Row,
  TithePercentContainer,
} from './styles';

class PercentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragged: false,
    };

    this.onDragStart = () => {
      this.setState(() => ({ isDragged: true }));
    };

    this.onDragStop = () => {
      this.setState(() => ({ isDragged: false }));
    };
  }

  render() {
    const {
      label,
      onChange,
      value,
    } = this.props;
    const {
      isDragged,
    } = this.state;

    return (
      <TithePercentContainer>
        <PercentStyled isActive={isDragged} />

        <Row>
          <InputLabel isActive={isDragged}>
            {label}
          </InputLabel>

          <Slider
            max={12}
            min={4}
            onChange={onChange}
            onDragStart={this.onDragStart}
            onDragStop={this.onDragStop}
            pinned
            ref={(slider) => this.slider = slider}
            snaps
            step={1}
            value={value}
          />
        </Row>
      </TithePercentContainer>
    );
  }
}

PercentInput.defaultProps = {
  onChange: () => {},
};

PercentInput.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default PercentInput;
