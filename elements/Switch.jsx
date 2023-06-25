import React from 'react';
import { Switch } from 'antd';

const UISwitch = (props) => {
  const { 
    autoFocus, 
    checked, 
    checkedChildren, 
    className, 
    defaultChecked, 
    disabled, 
    loading, 
    size, 
    unCheckedChildren, 
    onChange, 
    onClick 
    } = props;

  const handleOnChange = (checked, event) => {
    // Hier kannst du die gewünschte Aktion ausführen, wenn sich der Zustand ändert
    if (onChange) {
      onChange(checked, event);
    }
  };

  const handleOnClick = (checked, event) => {
    // Hier kannst du die gewünschte Aktion ausführen, wenn der Switch geklickt wird
    if (onClick) {
      onClick(checked, event);
    }
  };

  return (
    <Switch
      autoFocus={autoFocus}
      checked={checked}
      checkedChildren={checkedChildren}
      className={className}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      size={size}
      unCheckedChildren={unCheckedChildren}
      onChange={handleOnChange}
      onClick={handleOnClick}
    />
  );
};

export default UISwitch;
