import React from 'react';
import { notification } from 'antd';


const showSuccessNotification = () => {
    notification.success({
      message: 'Success',
      description: 'This is a success notification.',
    });
};

const showErrorNotification = () => {
    notification.error({
      message: 'Error',
      description: 'This is an error notification.',
    });
};

const showInfoNotification = () => {
    notification.info({
      message: 'Info',
      description: 'This is an info notification.',
    });
};

const showWarningNotification = () => {
    notification.warning({
      message: 'Warning',
      description: 'This is a warning notification.',
    });
};

const showCustomNotification = () => {
    notification.open({
      message: 'Custom',
      description: 'This is a custom notification.',
      duration: 5,
      style: { backgroundColor: 'pink' },
    });
};


export default {
    showSuccessNotification,
    showErrorNotification,
    showInfoNotification,
    showWarningNotification,
    showCustomNotification

}