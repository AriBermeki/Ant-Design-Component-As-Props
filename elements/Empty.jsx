import React from 'react';
import { Empty } from 'antd';

class UIEmpty extends React.Component {
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
    const { children, description, imageStyle } = this.props;

    return (
      <Empty description={description} imageStyle={imageStyle}>
        {children}
      </Empty>
    );
  }
}

export default UIEmpty;
