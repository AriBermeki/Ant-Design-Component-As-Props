import React, { Component } from 'react';
import { Input } from 'antd';

class UIInput extends Component {
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
      addonAfter,
      addonBefore,
      allowClear,
      bordered,
      classNames,
      defaultValue,
      disabled,
      id,
      maxLength,
      showCount,
      status,
      styles,
      prefix,
      size,
      suffix,
      type,
      value,
      onChange,
      onPressEnter,
    } = this.props;

    return (
      <Input
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        allowClear={allowClear}
        bordered={bordered}
        classNames={classNames}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        showCount={showCount}
        status={status}
        styles={styles}
        prefix={prefix}
        size={size}
        suffix={suffix}
        type={type}
        value={value}
        onChange={onChange}
        onPressEnter={onPressEnter}
      />
    );
  }
}

export default UIInput;
