import React from 'react';
import { Anchor } from 'antd';

class UIAnchor extends React.Component {
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
    const { type, ...restProps } = this.props;

    if (type === 'Anchor') {
      return <Anchor {...restProps} />;
    } else if (type === 'Link') {
      return <Anchor.Link {...restProps} />;
    } else {
      return null;
    }
  }
}

export default UIAnchor;
