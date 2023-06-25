import { QRCode } from 'antd';

const UIQRCode = (props) => {
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
        onRefresh 
    } = props
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
};

export default UIQRCode;
