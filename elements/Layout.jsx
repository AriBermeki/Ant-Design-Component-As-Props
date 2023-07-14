import { Layout } from 'antd';
import React, { Component } from 'react';

class UILayout extends Component {
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
  
  static Sider = (props) => {
    const {
      breakpoint,
      className,
      collapsed,
      collapsedWidth,
      collapsible,
      defaultCollapsed,
      reverseArrow,
      style,
      theme,
      trigger,
      width,
      zeroWidthTriggerStyle,
      onBreakpoint,
      onCollapse,
      ...restProps
    } = props;

    return (
      <Layout.Sider
        breakpoint={breakpoint}
        className={className}
        collapsed={collapsed}
        collapsedWidth={collapsedWidth}
        collapsible={collapsible}
        defaultCollapsed={defaultCollapsed}
        reverseArrow={reverseArrow}
        style={style}
        theme={theme}
        trigger={trigger}
        width={width}
        zeroWidthTriggerStyle={zeroWidthTriggerStyle}
        onBreakpoint={onBreakpoint}
        onCollapse={onCollapse}
        {...restProps}
      />
    );
  };

  render() {
    const { type, ...restProps } = this.props;

    if (type === 'Header') {
      return <Layout.Header {...restProps} />;
    } else if (type === 'Footer') {
      return <Layout.Footer {...restProps} />;
    } else if (type === 'Sider') {
      return <UILayout.Sider {...restProps} />;
    } else if (type === 'Content') {
      return <Layout.Content {...restProps} />;
    } else {
      return null;
    }
  }
}

export default UILayout;
