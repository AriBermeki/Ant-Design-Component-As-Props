import React from 'react';
import { Progress } from 'antd';

class UIProgress extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state or bind methods here if needed
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  render() {
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
    } = this.props;

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
  }
}

export default UIProgress;
