import React from 'react';
import { Slider } from 'antd';

const UISlider = (props) => {
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

  } = props;

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
};

export default UISlider;
