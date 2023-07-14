import React from 'react';
import { Divider } from 'antd';

class UIDivider extends React.Component {
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
      children,
      className,
      dashed = false,
      orientation = 'center',
      orientationMargin,
      plain = true,
      style,
      type = 'horizontal',
    } = this.props;

    const dividerStyle = {
      ...style,
      margin:
        orientationMargin && (orientation === 'left' || orientation === 'right')
          ? `0 ${orientationMargin}`
          : undefined,
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
  }
}

export default UIDivider;
