import { Alert } from 'antd';

const UIAlert = (props) => {
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
  } = props;

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
        {props.children}
      </Alert.ErrorBoundary>
    </Alert>
  );
}

export default UIAlert;
