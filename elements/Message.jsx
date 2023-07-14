import { message } from 'antd';
import React from 'react';

class UIMessage extends React.Component {
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

  showMessage = () => {
  const { type, content, duration, onClose } = this.props;
  switch (type) {
  case 'success':
  message.success(content, duration, onClose);
  break;
  case 'error':
  message.error(content, duration, onClose);
  break;
  case 'info':
  message.info(content, duration, onClose);
  break;
  case 'warning':
  message.warning(content, duration, onClose);
  break;
  case 'loading':
  message.loading(content, duration, onClose);
  break;
  default:
  break;
  }
  };

  render() {
  return <button onClick={this.showMessage}>Show Message</button>;
  }
}

export default UIMessage;