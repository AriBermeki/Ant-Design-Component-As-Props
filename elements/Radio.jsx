import React from 'react';
import { Radio, RadioGroup } from 'antd';

class UIRadio extends React.Component {
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
  const { type, ...props } = this.props;


  if (type === 'Radio') {
    return <Radio {...props} />;
  } else if (type === 'RadioButton') {
    return <Radio.Button {...props} />;
  } else if (type === 'RadioGroup') {
    return <RadioGroup {...props} />;
  } else {
    return null;
  }
  }
}

export default UIRadio;


