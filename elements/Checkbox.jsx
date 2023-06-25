import React from 'react';
import { Checkbox, CheckboxGroup } from 'antd';

const UICheckbox = (props) => {
    const{ 
        type, 
        autoFocus, 
        checked, 
        defaultChecked, 
        disabled, 
        indeterminate, 
        onChange, 
        defaultValue, 
        name, 
        options, 
        value 
    } = peops
  if (type === 'Checkbox') {
    return (
      <Checkbox
        autoFocus={autoFocus}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        indeterminate={indeterminate}
        onChange={onChange}
      />
    );
  } else if (type === 'CheckboxGroup') {
    return (
      <CheckboxGroup
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
      />
    );
  } else {
    return null;
  }
};

export default UICheckbox;
