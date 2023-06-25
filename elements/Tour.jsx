import React from 'react';
import { Tour } from 'antd';
//import { Steps } from 'antd';



const UITour = ({
  arrow,
  placement,
  onClose,
  mask,
  type,
  open,
  onChange,
  current,
  scrollIntoViewOptions,
  indicatorsRender,
  zIndex
}) => {
   
  const handleClose = () => {
    // Callback function when the tour is closed
    if (onClose) {
      onClose();
    }
  };

  const handleStepChange = (currentStep) => {
    // Callback function when the step changes
    if (onChange) {
      onChange(currentStep);
    }
  };

  const renderIndicators = (currentStep, totalSteps) => {
    // Custom indicator rendering function
    if (indicatorsRender) {
      return indicatorsRender(currentStep, totalSteps);
    }
    return (
      <div>
        Steps {currentStep} of {totalSteps}
      </div>
    );
  };

  return (
    <Tour
      arrow={arrow}
      placement={placement}
      onClose={handleClose}
      mask={mask}
      type={type}
      open={open}
      onChange={handleStepChange}
      current={current}
      scrollIntoViewOptions={scrollIntoViewOptions}
      indicatorsRender={renderIndicators}
      zIndex={zIndex}
    >
      {/* Tour steps go here */}
    </Tour>
  );
};

export default UITour;
