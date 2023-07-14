import React from 'react';
import { Tour } from 'antd';

class UITour extends React.Component {
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
  handleClose = () => {
    // Callback function when the tour is closed
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleStepChange = (currentStep) => {
    // Callback function when the step changes
    if (this.props.onChange) {
      this.props.onChange(currentStep);
    }
  };

  renderIndicators = (currentStep, totalSteps) => {
    // Custom indicator rendering function
    if (this.props.indicatorsRender) {
      return this.props.indicatorsRender(currentStep, totalSteps);
    }
    return (
      <div>
        Steps {currentStep} of {totalSteps}
      </div>
    );
  };

  render() {
    const {
      arrow,
      placement,
      mask,
      type,
      open,
      current,
      scrollIntoViewOptions,
      zIndex,
    } = this.props;

    return (
      <Tour
        arrow={arrow}
        placement={placement}
        onClose={this.handleClose}
        mask={mask}
        type={type}
        open={open}
        onChange={this.handleStepChange}
        current={current}
        scrollIntoViewOptions={scrollIntoViewOptions}
        indicatorsRender={this.renderIndicators}
        zIndex={zIndex}
      >
        {this.props.children}
      </Tour>
    );
  }
}

export default UITour;
