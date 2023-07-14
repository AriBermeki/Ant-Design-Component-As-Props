import React from 'react';
import { Radio } from 'antd';

class UISegmented extends React.Component {
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
    const { 
      block, 
      defaultValue, 
      disabled, 
      onChange, 
      options, 
      size, 
      value 
    } = this.props;

    return (
      <Radio.Group
        buttonStyle={block ? 'solid' : 'outline'}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        size={size}
        value={value}
      >
        {options.map((option, index) => (
          <Radio.Button key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    );
  }
}

export default UISegmented;
