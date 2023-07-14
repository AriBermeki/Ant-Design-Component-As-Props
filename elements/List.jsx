import React from 'react';
import { List } from 'antd';

class UIList extends React.Component {
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
    const { bordered, dataSource, footer, grid, header, itemLayout, loading, loadMore, locale, pagination, renderItem, rowKey, size, split } = this.props;

    return (
      <List
        bordered={bordered}
        dataSource={dataSource}
        footer={footer}
        grid={grid}
        header={header}
        itemLayout={itemLayout}
        loading={loading}
        loadMore={loadMore}
        locale={locale}
        pagination={pagination}
        renderItem={renderItem}
        rowKey={rowKey}
        size={size}
        split={split}
      />
    );
  }
}

export default UIList;
