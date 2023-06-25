import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const UITabs = (props) => {
  const {
    activeKey,
    addIcon,
    animated,
    centered,
    defaultActiveKey,
    hideAdd,
    items,
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
    onTabScroll
  } = props;

  const renderTabContent = () => {
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
      {renderTabContent()}
    </Tabs>
  );
};

export default UITabs;




// import React from 'react';
// import MyTabs from './MyTabs';

// const App = () => {
//   const items = [
//     {
//       key: '1',
//       closable: true,
//       closeIcon: <CloseOutlined />,
//       disabled: false,
//       forceRender: false,
//       label: 'Tab 1',
//       children: <div>Content for Tab 1</div>
//     },
//     {
//       key: '2',
//       closable: true,
//       closeIcon: <CloseOutlined />,
//       disabled: false,
//       forceRender: false,
//       label: 'Tab 2',
//       children: <div>Content for Tab 2</div>
//     }
//   ];

//   const handleTabChange = (key) => {
//     console.log('Active tab changed:', key);
//   };

//   return (
//     <div>
//       <MyTabs
//         activeKey="1"
//         items={items}
//         type="editable-card"
//         onChange={handleTabChange}
//       />
//     </div>
//   );
// };

// export default App;
