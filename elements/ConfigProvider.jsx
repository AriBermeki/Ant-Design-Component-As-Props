import React from 'react';
import { ConfigProvider } from 'antd';

class UIConfigProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
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
    } = this.props;

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
  }


  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }

  render() {
    const { children } = this.props;

    return <ConfigProvider>{children}</ConfigProvider>;
  }
}

export default UIConfigProvider;
