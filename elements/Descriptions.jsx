import React from 'react';
import { Descriptions } from 'antd';

const UIDescriptions = (props) => {
  const {
    bordered,
    colon,
    column,
    contentStyle,
    extra,
    labelStyle,
    layout,
    size,
    title,
  } = props;

  return (
    <Descriptions
      bordered={bordered}
      colon={colon}
      column={column}
      contentStyle={contentStyle}
      extra={extra}
      labelStyle={labelStyle}
      layout={layout}
      size={size}
      title={title}
    >
      {props.children}
    </Descriptions>
  );
};

export default UIDescriptions;
