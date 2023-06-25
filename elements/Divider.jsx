import React from 'react';
import { Divider } from 'antd';

const UIDivider = ({
  children,
  className,
  dashed = false,
  orientation = 'center',
  orientationMargin,
  plain = true,
  style,
  type = 'horizontal',
}) => {
  const dividerStyle = {
    ...style,
    margin: orientationMargin && (orientation === 'left' || orientation === 'right') ? `0 ${orientationMargin}` : undefined,
  };

  return (
    <Divider
      className={className}
      dashed={dashed}
      orientation={orientation}
      plain={plain}
      style={dividerStyle}
      type={type}
    >
      {children}
    </Divider>
  );
};

export default UIDivider;
