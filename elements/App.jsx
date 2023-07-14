import React from 'react';
import { ConfigProvider, message, notification } from 'antd';

class UIApp extends React.Component {
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
    const messageConfig = {}; // Fill this with the desired configurations for messageConfig
    const notificationConfig = {}; // Fill this with the desired configurations for notificationConfig

    return (
      <ConfigProvider message={messageConfig} notification={notificationConfig}>
        {/* Your UIApp content */}
      </ConfigProvider>
    );
  }
}

export default UIApp;
