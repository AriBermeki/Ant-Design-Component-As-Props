import React, { Component } from 'react';
import { Modal } from 'antd';

class UIModal extends Component {
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
      content,
      afterClose,
      bodyStyle,
      cancelButtonProps,
      cancelText,
      centered,
      closable,
      closeIcon,
      confirmLoading,
      destroyOnClose,
      focusTriggerAfterClose,
      footer,
      forceRender,
      getContainer,
      keyboard,
      mask,
      maskClosable,
      maskStyle,
      modalRender,
      okButtonProps,
      okText,
      okType,
      style,
      title,
      open,
      width,
      wrapClassName,
      zIndex,
      onCancel,
      onOk,
      afterOpenChange,
    } = this.props;

    return (
      <Modal
        afterClose={afterClose}
        bodyStyle={bodyStyle}
        cancelButtonProps={cancelButtonProps}
        cancelText={cancelText}
        centered={centered}
        closable={closable}
        closeIcon={closeIcon}
        confirmLoading={confirmLoading}
        destroyOnClose={destroyOnClose}
        focusTriggerAfterClose={focusTriggerAfterClose}
        footer={footer}
        forceRender={forceRender}
        getContainer={getContainer}
        keyboard={keyboard}
        mask={mask}
        maskClosable={maskClosable}
        maskStyle={maskStyle}
        modalRender={modalRender}
        okButtonProps={okButtonProps}
        okText={okText}
        okType={okType}
        style={style}
        title={title}
        visible={open}
        width={width}
        wrapClassName={wrapClassName}
        zIndex={zIndex}
        onCancel={onCancel}
        onOk={onOk}
        afterOpenChange={afterOpenChange}
      >
        {content}
      </Modal>
    );
  }
}

export default UIModal;
