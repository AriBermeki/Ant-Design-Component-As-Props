import { ReactComponent as YourIcon } from '@ant-design/icons';
import { Icon } from 'antd';


const UIIcon= ({ className, rotate, spin, style, twoToneColor }) => {
    const iconStyle = {
      fontSize: style && style.fontSize,
      color: style && style.color,
    };
  
    return (
      <Icon
        component={YourIcon}
        className={className}
        rotate={rotate}
        spin={spin}
        style={iconStyle}
        twoToneColor={twoToneColor}
      />
    );
};


export default UIIcon;