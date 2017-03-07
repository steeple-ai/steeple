import React, { Component, PropTypes } from 'react';

import Slider from 'react-toolbox/lib/slider/Slider';

import {
  InputLabel,
  PercentContainer,
  PercentStyled,
  Row,
  Value,
  ValueRow,
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

    this.renderValues = () => {
      const {
        max,
        min,
        value,
      } = this.props;
      const values = [];

      for (let i = min; i <= max; i++) {
        values.push(<Value
          left={(100 / (max - min)) * (i - min)}
          key={i}
          isActive={value === i}
        >
          {i}%
        </Value>)
      }

      return values;
    }
  }

  render() {
    const {
      label,
      max,
      min,
      onChange,
      value,
    } = this.props;
    const {
      isDragged,
    } = this.state;

    return (
      <PercentContainer>
        <PercentStyled isActive={isDragged} />

        <Row>
          <InputLabel isActive={isDragged}>
            {label}
          </InputLabel>

          <Slider
            max={max}
            min={min}
            onChange={onChange}
            onDragStart={this.onDragStart}
            onDragStop={this.onDragStop}
            pinned
            ref={(slider) => this.slider = slider}
            snaps
            step={1}
            value={value}
          />

          <ValueRow>
            {this.renderValues()}
          </ValueRow>
        </Row>
      </PercentContainer>
    );
  }
}

PercentInput.defaultProps = {
  onChange: () => {},
};

PercentInput.propTypes = {
  label: PropTypes.node,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default PercentInput;
