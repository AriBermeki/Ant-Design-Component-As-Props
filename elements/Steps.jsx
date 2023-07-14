import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

class UISteps extends React.Component {
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
      className,
      current,
      direction,
      initial,
      labelPlacement,
      percent,
      progressDot,
      responsive,
      size,
      status,
      type,
      onChange,
      items,
    } = this.props;

    return (
      <Steps
        className={className}
        current={current}
        direction={direction}
        initial={initial}
        labelPlacement={labelPlacement}
        percent={percent}
        progressDot={progressDot}
        responsive={responsive}
        size={size}
        status={status}
        type={type}
        onChange={onChange}
      >
        {items.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Steps>
    );
  }
}

export default UISteps;
