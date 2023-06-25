import React from 'react';
import { Progress } from 'antd';

const UIProgress = (props) => {
  const {
    format,
    percent,
    showInfo,
    status,
    strokeColor,
    strokeLinecap,
    success,
    trailColor,
    type,
    size,
    steps,
    strokeWidth,
    gapDegree,
    gapPosition,
  } = props;

  return (
    <Progress
      format={format}
      percent={percent}
      showInfo={showInfo}
      status={status}
      strokeColor={strokeColor}
      strokeLinecap={strokeLinecap}
      success={success}
      trailColor={trailColor}
      type={type}
      size={size}
      steps={steps}
      strokeWidth={strokeWidth}
      gapDegree={gapDegree}
      gapPosition={gapPosition}
    />
  );
};

export default UIProgress;
