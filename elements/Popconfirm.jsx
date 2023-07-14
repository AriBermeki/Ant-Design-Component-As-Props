import React from 'react';
import { Popconfirm, Button } from 'antd';

class UIPopconfirm extends React.Component {
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
    } = this.props;

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
  }
}

export default UIPopconfirm;
