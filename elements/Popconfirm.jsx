import React from 'react';
import { Popconfirm, Button } from 'antd';

const UIPopconfirm = (props) => {
  const {
    cancelButtonProps,
    cancelText,
    disabled,
    icon,
    okButtonProps,
    okText,
    okType,
    showCancel,
    title,
    description,
    onCancel,
    onConfirm,
    onPopupClick,
  } = props;

  return (
    <Popconfirm
      cancelButtonProps={cancelButtonProps}
      cancelText={cancelText}
      disabled={disabled}
      icon={icon}
      okButtonProps={okButtonProps}
      okText={okText}
      okType={okType}
      showCancel={showCancel}
      title={title}
      description={description}
      onCancel={onCancel}
      onConfirm={onConfirm}
      onPopupClick={onPopupClick}
    >
      <Button>Click me</Button>
    </Popconfirm>
  );
};

export default UIPopconfirm;
