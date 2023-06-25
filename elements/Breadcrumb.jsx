import React from 'react';
import { Breadcrumb } from 'antd';

const UIBreadcrumb = ({ itemRender, params, items, separator }) => {
  return (
    <Breadcrumb separator={separator}>
      {items.map((item, index) => {
        if (item.type === 'separator') {
          return <Breadcrumb.Separator key={index} {...item} />;
        } else {
          return (
            <Breadcrumb.Item key={index} {...item}>
              {itemRender ? itemRender(item.route, params, items, item.paths) : item.title}
            </Breadcrumb.Item>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default UIBreadcrumb;
