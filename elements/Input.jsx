import { Input } from 'antd';

const UIInput = (props) => {
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
    onPressEnter 
    } = props;

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
};

export default UIInput;
