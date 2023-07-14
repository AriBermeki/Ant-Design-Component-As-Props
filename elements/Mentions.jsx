import { Mentions } from 'antd';
import React from 'react';

const { Option } = Mentions;

class UIMentions extends React.Component {
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
  autoFocus,
  autoSize,
  defaultValue,
  filterOption,
  getPopupContainer,
  notFoundContent,
  placement,
  prefix,
  split,
  status,
  validateSearch,
  value,
  onBlur,
  onChange,
  onFocus,
  onResize,
  onSearch,
  onSelect,
  options,
  } = this.props;

  return (
    <Mentions
      autoFocus={autoFocus}
      autoSize={autoSize}
      defaultValue={defaultValue}
      filterOption={filterOption}
      getPopupContainer={getPopupContainer}
      notFoundContent={notFoundContent}
      placement={placement}
      prefix={prefix}
      split={split}
      status={status}
      validateSearch={validateSearch}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onResize={onResize}
      onSearch={onSearch}
      onSelect={onSelect}
      options={options}
    >
      {/* Beispieloptionen */}
      {options.map((option) => (
        <Option key={option.key} value={option.label}>
          {option.label}
        </Option>
      ))}
    </Mentions>
  );
  }
}

export default UIMentions;