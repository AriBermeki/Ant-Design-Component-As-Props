import React from 'react';
import { Checkbox, CheckboxGroup } from 'antd';

class UICheckbox extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state or bind methods here if needed
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
    } = this.props;

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
  }
}

export default UICheckbox;
