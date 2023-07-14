import React from 'react';
import { Descriptions } from 'antd';

class UIDescriptions extends React.Component {
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
      bordered,
      colon,
      column,
      contentStyle,
      extra,
      labelStyle,
      layout,
      size,
      title,
    } = this.props;

    return (
      <Descriptions
        bordered={bordered}
        colon={colon}
        column={column}
        contentStyle={contentStyle}
        extra={extra}
        labelStyle={labelStyle}
        layout={layout}
        size={size}
        title={title}
      >
        {this.props.children}
      </Descriptions>
    );
  }
}

export default UIDescriptions;
