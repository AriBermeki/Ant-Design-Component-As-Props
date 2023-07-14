import React from 'react';
import { Transfer } from 'antd';

class UITransfer extends React.Component {
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
  handleChange = (targetKeys, direction, moveKeys) => {
    // Callback function when transfer between columns is complete
    console.log(targetKeys, direction, moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    // Callback function when selected items are changed
    console.log(sourceSelectedKeys, targetSelectedKeys);
  };

  render() {
    const { dataSource, targetKeys } = this.props;

    return (
      <Transfer
        dataSource={dataSource}
        targetKeys={targetKeys}
        onChange={this.handleChange}
        onSelectChange={this.handleSelectChange}
        // Add other props here
      />
    );
  }
}

export default UITransfer;
