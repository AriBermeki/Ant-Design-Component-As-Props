import React from 'react';
import { Spin } from 'antd';

const UISpin = (props) => {
  const { delay, indicator, size, spinning, tip, wrapperClassName } = props;

  return (
    <Spin
      delay={delay}
      indicator={indicator}
      size={size}
      spinning={spinning}
      tip={tip}
      wrapperClassName={wrapperClassName}
    >
      {/* Hier können Sie den Inhalt platzieren, der während des Ladens angezeigt werden soll */}
      {/* Zum Beispiel: */}
      <div>Loading...</div>
    </Spin>
  );
};

export default UISpin;
