import React from 'react';
import { Slider } from 'antd';

class UISlider extends React.Component {
  constructor(props) {
    super(props);

    if (props.onChange) {
      this.handleAffixChange = () => {
        console.log('Affix handleAffixChange!');
      };
    }
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  render() {
    const {
      autoFocus,
      defaultValue,
      disabled,
      keyboard,
      dots,
      included,
      marks,
      max,
      min,
      range,
      reverse,
      step,
      tooltip,
      value,
      vertical,
      onAfterChange,
      onChange,
      trackStyle,
      railStyle,
      handleStyle,
      draggableTrack,
    } = this.props;

    return (
      <Slider
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        keyboard={keyboard}
        dots={dots}
        included={included}
        marks={marks}
        max={max}
        min={min}
        range={range}
        reverse={reverse}
        step={step}
        tooltip={tooltip}
        value={value}
        vertical={vertical}
        onAfterChange={onAfterChange}
        onChange={onChange}
        trackStyle={trackStyle}
        railStyle={railStyle}
        handleStyle={handleStyle}
        draggableTrack={draggableTrack}
      />
    );
  }
}

export default UISlider;
