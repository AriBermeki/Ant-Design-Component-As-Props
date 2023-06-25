import { message } from 'antd';
import React from 'react';

const UIMessage = ({ type, content, duration, onClose }) => {
  const showMessage = () => {
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

  return <button onClick={showMessage}>Show Message</button>;
};

export default UIMessage;
