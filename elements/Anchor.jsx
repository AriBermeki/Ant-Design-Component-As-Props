import { Anchor } from 'antd';
import React from 'react';

const UIAnchor = ({ type, ...restProps }) => {
  if (type === 'Anchor') {
    return <Anchor {...restProps} />;
  } else if (type === 'Link') {
    return <Anchor.Link {...restProps} />;
  } else {
    return null;
  }
};

export default UIAnchor;
