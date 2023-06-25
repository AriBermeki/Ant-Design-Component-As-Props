import { Mentions } from 'antd';

const { Option } = Mentions;

const UIMentions = ({
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
}) => {
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
};

export default UIMentions;
