import React from 'react';
import { Drawer } from 'antd';

const UIDrawer = (props) => {
  const {
    content,
    autoFocus,
    afterOpenChange,
    bodyStyle,
    className,
    closable,
    closeIcon,
    contentWrapperStyle,
    destroyOnClose,
    extra,
    footer,
    footerStyle,
    forceRender,
    getContainer,
    headerStyle,
    height,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    placement,
    push,
    rootClassName,
    rootStyle,
    style,
    size,
    title,
    open,
    width,
    zIndex,
    onClose,
  } = props;

  return (
    <Drawer
      autoFocus={autoFocus}
      afterOpenChange={afterOpenChange}
      bodyStyle={bodyStyle}
      className={className}
      closable={closable}
      closeIcon={closeIcon}
      contentWrapperStyle={contentWrapperStyle}
      destroyOnClose={destroyOnClose}
      extra={extra}
      footer={footer}
      footerStyle={footerStyle}
      forceRender={forceRender}
      getContainer={getContainer}
      headerStyle={headerStyle}
      height={height}
      keyboard={keyboard}
      mask={mask}
      maskClosable={maskClosable}
      maskStyle={maskStyle}
      placement={placement}
      push={push}
      rootClassName={rootClassName}
      rootStyle={rootStyle}
      style={style}
      size={size}
      title={title}
      visible={open}
      width={width}
      zIndex={zIndex}
      onClose={onClose}
    >
      {content}
    </Drawer>
  );
};

export default UIDrawer;
