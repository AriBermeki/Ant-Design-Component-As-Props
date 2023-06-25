import React from 'react';
import { Button } from 'antd';

const UIButton = (props) => {
  const { block, classNames, danger, disabled, ghost, href, htmlType, icon, loading, shape, size, styles, target, type } = props;

  const handleClick = (event) => {
    // Füge hier deine Logik für den Click-Event hinzu
    console.log('Button wurde geklickt');
  };

  return (
    <Button
      block={block}
      className={classNames}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size}
      style={styles}
      target={target}
      type={type}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
};

export default UIButton;

