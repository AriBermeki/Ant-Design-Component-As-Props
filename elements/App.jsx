import { ConfigProvider, message, notification } from 'antd';

const UIApp = () => {
  // Hier kannst du die globalen Konfigurationen für message und notification setzen
  const messageConfig = {  }; // Fülle dies mit den gewünschten Konfigurationen für MessageConfig
  const notificationConfig = {  }; // Fülle dies mit den gewünschten Konfigurationen für NotificationConfig

  return (
    <ConfigProvider message={messageConfig} notification={notificationConfig}>
      {/* Dein UIApp-Inhalt */}
    </ConfigProvider>
  );
};

export default UIApp;
