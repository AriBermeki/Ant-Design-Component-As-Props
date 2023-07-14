import React from 'react';
import { AutoComplete } from 'antd';

class UIAutoComplete extends React.Component {
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
      allowClear,
      autoFocus,
      backfill,
      bordered,
      defaultActiveFirstOption,
      defaultOpen,
      defaultValue,
      disabled,
      filterOption,
      notFoundContent,
      options,
      placeholder,
      value,
      onBlur,
      onChange,
      onFocus,
      onSelect,
      onClear,
    } = this.props;

    return (
      <AutoComplete
        allowClear={allowClear}
        autoFocus={autoFocus}
        backfill={backfill}
        bordered={bordered}
        defaultActiveFirstOption={defaultActiveFirstOption}
        defaultOpen={defaultOpen}
        defaultValue={defaultValue}
        disabled={disabled}
        filterOption={filterOption}
        notFoundContent={notFoundContent}
        options={options}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onSelect={onSelect}
        onClear={onClear}
      />
    );
  }
}

export default UIAutoComplete;
