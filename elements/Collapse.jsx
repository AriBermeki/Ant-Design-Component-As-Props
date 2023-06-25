import { Collapse } from 'antd';

const { Panel } = Collapse;

const UICollapse = (props) => {
    const { 
        accordion, 
        activeKey, 
        bordered, 
        collapsible, 
        defaultActiveKey, 
        destroyInactivePanel, 
        expandIcon, 
        expandIconPosition, 
        ghost, 
        size, 
        onChange, 
        items 
    } = props
  return (
    <Collapse
      accordion={accordion}
      activeKey={activeKey}
      bordered={bordered}
      collapsible={collapsible}
      defaultActiveKey={defaultActiveKey}
      destroyInactivePanel={destroyInactivePanel}
      expandIcon={expandIcon}
      expandIconPosition={expandIconPosition}
      ghost={ghost}
      size={size}
      onChange={onChange}
    >
      {items.map((item) => (
        <Panel
          key={item.key}
          collapsible={item.collapsible}
          extra={item.extra}
          forceRender={item.forceRender}
          header={item.header}
          showArrow={item.showArrow}
        >
          {item.content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default UICollapse;
