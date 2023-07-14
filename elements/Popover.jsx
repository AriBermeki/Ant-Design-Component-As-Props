import React from 'react';
import { Popover } from 'antd';

class UIPopover extends React.Component {
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
    const { content, title, children } = this.props;

    return (
      <Popover content={content} title={title}>
        {children}
      </Popover>
    );
  }
}

export default UIPopover;
