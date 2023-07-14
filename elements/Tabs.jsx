import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class UITabs extends React.Component {
  constructor(props) {
    super(props);

    if (props.onChange) {
      this.handleAffixChange = () => {
        console.log('Affix handleAffixChange!');
      };
    }
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  renderTabContent = () => {
    const { items } = this.props;
    return items.map((item) => (
      <TabPane
        key={item.key}
        closable={item.closable}
        closeIcon={item.closeIcon}
        disabled={item.disabled}
        forceRender={item.forceRender}
        tab={item.label}
      >
        {item.children}
      </TabPane>
    ));
  };

  render() {
    const {
      activeKey,
      addIcon,
      animated,
      centered,
      defaultActiveKey,
      hideAdd,
      moreIcon,
      popupClassName,
      renderTabBar,
      size,
      tabBarExtraContent,
      tabBarGutter,
      tabBarStyle,
      tabPosition,
      destroyInactiveTabPane,
      type,
      onChange,
      onEdit,
      onTabClick,
      onTabScroll,
    } = this.props;

    return (
      <Tabs
        activeKey={activeKey}
        addIcon={addIcon}
        animated={animated}
        centered={centered}
        defaultActiveKey={defaultActiveKey}
        hideAdd={hideAdd}
        moreIcon={moreIcon}
        popupClassName={popupClassName}
        renderTabBar={renderTabBar}
        size={size}
        tabBarExtraContent={tabBarExtraContent}
        tabBarGutter={tabBarGutter}
        tabBarStyle={tabBarStyle}
        tabPosition={tabPosition}
        destroyInactiveTabPane={destroyInactiveTabPane}
        type={type}
        onChange={onChange}
        onEdit={onEdit}
        onTabClick={onTabClick}
        onTabScroll={onTabScroll}
      >
        {this.renderTabContent()}
      </Tabs>
    );
  }
}

export default UITabs;
