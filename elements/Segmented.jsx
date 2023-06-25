import React from 'react';
import { Radio } from 'antd';

const UISegmented = (props) => {
    const { 
        block, 
        defaultValue, 
        disabled, 
        onChange, 
        options, 
        size, 
        value 
    } = props
  return (
    <Radio.Group
      buttonStyle={block ? 'solid' : 'outline'}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      size={size}
      value={value}
    >
      {options.map((option, index) => (
        <Radio.Button key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default UISegmented;
