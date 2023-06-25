import React from 'react';
import { Result } from 'antd';

const UIResult = (props) => {
    const { extra, icon, status, subTitle, title } = props
  return (
    <Result
      extra={extra}
      icon={icon}
      status={status}
      subTitle={subTitle}
      title={title}
    />
  );
};

export default UIResult;
