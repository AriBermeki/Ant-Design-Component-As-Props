import React, { Component } from 'react';
import { ReactComponent as YourIcon } from '@ant-design/icons';
import { Icon } from 'antd';

class UIIcon extends Component {
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
    const { className, rotate, spin, style, twoToneColor } = this.props;

    const iconStyle = {
      fontSize: style && style.fontSize,
      color: style && style.color,
    };

    return (
      <Icon
        component={() => <YourIcon />}
        className={className}
        rotate={rotate}
        spin={spin}
        style={iconStyle}
        twoToneColor={twoToneColor}
      />
    );
  }
}

export default UIIcon;
