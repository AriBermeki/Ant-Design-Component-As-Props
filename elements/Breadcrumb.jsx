import React from 'react';
import { Breadcrumb } from 'antd';

class UIBreadcrumb extends React.Component {
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
    const { itemRender, params, items, separator } = this.props;

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
  }
}

export default UIBreadcrumb;

