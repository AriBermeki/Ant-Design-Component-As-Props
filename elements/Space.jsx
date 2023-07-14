import React from 'react';
import { Space } from 'antd';

class UISpace extends React.Component {
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
  render() {
    const { align, direction, size, split, wrap } = this.props;

    return (
      <Space align={align} direction={direction} size={size} split={split} wrap={wrap}>
        {/* Add your child components here */}
      </Space>
    );
  }
}

export default UISpace;
