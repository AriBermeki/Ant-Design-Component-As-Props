import { Layout } from 'antd';
import React from 'react';

const UILayout = ({ type, ...restProps }) => {
  if (type === 'Header') {
    return <Layout.Header {...restProps} />;
  } else if (type === 'Footer') {
    return <Layout.Footer {...restProps} />;
  } else if (type === 'Sider') {
    return <Layout.Sider {...restProps} />;
  } else if (type === 'Content') {
    return <Layout.Content {...restProps} />;
  } else {
    return null;
  }
};

export default UILayout;
