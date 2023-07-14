import React from 'react';
import { Alert } from 'antd';

class UIAlert extends React.Component {
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
      action,
      afterClose,
      banner,
      closable,
      closeText,
      closeIcon,
      description,
      icon,
      message,
      showIcon,
      type,
      onClose,
      // ErrorBoundary Props
      errorDescription,
      errorMessage
    } = this.props;

    return (
      <Alert
        action={action}
        afterClose={afterClose}
        banner={banner}
        closable={closable}
        closeText={closeText}
        closeIcon={closeIcon}
        description={description}
        icon={icon}
        message={message}
        showIcon={showIcon}
        type={type}
        onClose={onClose}
      >
        {/* ErrorBoundary Props */}
        <Alert.ErrorBoundary
          description={errorDescription}
          message={errorMessage}
        >
          {this.props.children}
        </Alert.ErrorBoundary>
      </Alert>
    );
  }
}

export default UIAlert;
