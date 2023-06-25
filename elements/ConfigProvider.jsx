import React from 'react';
import { ConfigProvider } from 'antd';

const UIConfigProvider = ({
  autoInsertSpaceInButton = true,
  componentDisabled,
  componentSize,
  csp,
  direction = 'ltr',
  popupMatchSelectWidth,
  popupOverflow,
  form,
  getPopupContainer = () => document.body,
  getTargetContainer = () => window,
  iconPrefixCls = 'anticon',
  input,
  select,
  button,
  locale,
  prefixCls = 'ant',
  renderEmpty,
  space,
  theme,
  virtual,
  children,
}) => {
  // Set the config using the provided properties
  React.useEffect(() => {
    ConfigProvider.config({
      autoInsertSpaceInButton,
      componentDisabled,
      componentSize,
      csp,
      direction,
      popupMatchSelectWidth,
      popupOverflow,
      form,
      getPopupContainer,
      getTargetContainer,
      iconPrefixCls,
      input,
      select,
      button,
      locale,
      prefixCls,
      renderEmpty,
      space,
      theme,
      virtual,
    });
  }, []);

  return <ConfigProvider>{children}</ConfigProvider>;
};

export default UIConfigProvider;
