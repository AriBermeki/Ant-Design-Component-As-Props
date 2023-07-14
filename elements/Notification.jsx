import React from 'react';
import { notification } from 'antd';

class NotificationComponent extends React.Component {
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
  showSuccessNotification = () => {
    notification.success({
      message: 'Success',
      description: 'This is a success notification.',
    });
  };

  showErrorNotification = () => {
    notification.error({
      message: 'Error',
      description: 'This is an error notification.',
    });
  };

  showInfoNotification = () => {
    notification.info({
      message: 'Info',
      description: 'This is an info notification.',
    });
  };

  showWarningNotification = () => {
    notification.warning({
      message: 'Warning',
      description: 'This is a warning notification.',
    });
  };

  showCustomNotification = () => {
    notification.open({
      message: 'Custom',
      description: 'This is a custom notification.',
      duration: 5,
      style: { backgroundColor: 'pink' },
    });
  };

  render() {
    return (
      <div>
        {/* Render your component content here */}
      </div>
    );
  }
}

export default NotificationComponent;
