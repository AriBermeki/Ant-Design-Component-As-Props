import React from 'react';
import { List } from 'antd';

const UIList = (props) => {
  const { 
    bordered, 
    dataSource, 
    footer, 
    grid, 
    header, 
    itemLayout, 
    loading, 
    loadMore, 
    locale, 
    pagination, 
    renderItem, 
    rowKey, 
    size, 
    split 
    } = props;

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
};

export default UIList;
