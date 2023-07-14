import React from 'react';
import { Card } from 'antd';

class UICard extends React.Component {
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
      title,
      actions,
      activeTabKey,
      bodyStyle,
      bordered,
      cover,
      defaultActiveTabKey,
      extra,
      headStyle,
      hoverable,
      loading,
      size,
      tabBarExtraContent,
      tabList,
      tabProps,
      type,
      onTabChange
    } = this.props;

    return (
      <Card
        title={title}
        actions={actions}
        activeTabKey={activeTabKey}
        bodyStyle={bodyStyle}
        bordered={bordered}
        cover={cover}
        defaultActiveTabKey={defaultActiveTabKey}
        extra={extra}
        headStyle={headStyle}
        hoverable={hoverable}
        loading={loading}
        size={size}
        tabBarExtraContent={tabBarExtraContent}
        tabList={tabList}
        tabProps={tabProps}
        type={type}
        onTabChange={onTabChange}
      >
        {this.props.children}
      </Card>
    );
  }
}

export default UICard;
