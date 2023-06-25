import React from 'react';
import { ColorPicker } from 'antd';

const UIColorPicker = (props) => {
  const { 
    format, 
    value, 
    defaultValue,
    allowClear, 
    presets, 
    children, 
    trigger, 
    open, 
    disabled, 
    placement, 
    arrow, 
    onChange, 
    onFormatChange, 
    onOpenChange, 
    onClear 
} = props;

  const handleChange = (color, hex) => {
    if (onChange) {
      onChange(color, hex);
    }
  };

  const handleFormatChange = (format) => {
    if (onFormatChange) {
      onFormatChange(format);
    }
  };

  const handleOpenChange = (open) => {
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <ColorPicker
      format={format}
      value={value}
      defaultValue={defaultValue}
      allowClear={allowClear}
      presets={presets}
      children={children}
      trigger={trigger}
      open={open}
      disabled={disabled}
      placement={placement}
      arrow={arrow}
      onChange={handleChange}
      onFormatChange={handleFormatChange}
      onOpenChange={handleOpenChange}
      onClear={handleClear}
    />
  );
};

export default UIColorPicker;
