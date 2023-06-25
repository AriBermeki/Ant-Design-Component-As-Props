import { Card } from 'antd';

const UICard = (props) => {
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
  } = props;

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
      {props.children}
    </Card>
  );
};

export default UICard;
