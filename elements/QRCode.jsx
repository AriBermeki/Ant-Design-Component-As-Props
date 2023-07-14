import React from 'react';
import { QRCode } from 'antd';

class UIQRCode extends React.Component {
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
      value,
      type,
      icon,
      size,
      iconSize,
      color,
      bgColor,
      bordered,
      errorLevel,
      status,
      onRefresh,
    } = this.props;

    return (
      <QRCode
        value={value}
        type={type}
        icon={icon}
        size={size}
        iconSize={iconSize}
        color={color}
        bgColor={bgColor}
        bordered={bordered}
        errorLevel={errorLevel}
        status={status}
        onRefresh={onRefresh}
      />
    );
  }
}

export default UIQRCode;

