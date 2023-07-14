import React from 'react';
import { Spin } from 'antd';

class UISpin extends React.Component {
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
    const { delay, indicator, size, spinning, tip, wrapperClassName } = this.props;

    return (
      <Spin
        delay={delay}
        indicator={indicator}
        size={size}
        spinning={spinning}
        tip={tip}
        wrapperClassName={wrapperClassName}
      >
        {/* You can place the content to be displayed during the loading here */}
        {/* For example: */}
        <div>Loading...</div>
      </Spin>
    );
  }
}

export default UISpin;
