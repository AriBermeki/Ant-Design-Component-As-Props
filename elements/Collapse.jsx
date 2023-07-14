import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

class UICollapse extends React.Component {
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
    } = this.props;

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
  }
}

export default UICollapse;
