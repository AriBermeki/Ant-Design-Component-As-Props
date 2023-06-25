import React from 'react';
import { Radio, RadioGroup } from 'antd';

const UIRadio = ({ type, ...props }) => {
  if (type === 'Radio') {
    return <Radio {...props} />;
  } else if (type === 'RadioButton') {
    return <Radio.Button {...props} />;
  } else if (type === 'RadioGroup') {
    return <RadioGroup {...props} />;
  } else {
    return null;
  }
};

export default UIRadio;
if (type === 'Radio') {
    return < Radio{...restProps} />;
  } else if (type === 'RadioButton') {
    return <TRadio.Button{...restProps} />;
  } else if (type === 'RadioGroup') {
    return < RadioGroup{...restProps} />;
  } else {
    return null;
  }