import React from 'react';
import { InputNumber } from 'antd';

const UIInputNumber = (props) => {
  const {
    addonAfter,
    addonBefore,
    autoFocus,
    bordered,
    controls,
    decimalSeparator,
    defaultValue,
    disabled,
    formatter,
    keyboard,
    max,
    min,
    parser,
    precision,
    readOnly,
    status,
    prefix,
    size,
    step,
    stringMode,
    value,
    onChange,
    onPressEnter,
    onStep,
  } = props;

  return (
    <InputNumber
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      autoFocus={autoFocus}
      bordered={bordered}
      controls={controls}
      decimalSeparator={decimalSeparator}
      defaultValue={defaultValue}
      disabled={disabled}
      formatter={formatter}
      keyboard={keyboard}
      max={max}
      min={min}
      parser={parser}
      precision={precision}
      readOnly={readOnly}
      status={status}
      prefix={prefix}
      size={size}
      step={step}
      stringMode={stringMode}
      value={value}
      onChange={onChange}
      onPressEnter={onPressEnter}
      onStep={onStep}
    />
  );
};

export default UIInputNumber;
