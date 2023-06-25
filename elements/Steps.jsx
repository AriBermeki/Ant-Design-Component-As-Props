import { Steps } from 'antd';

const { Step } = Steps;

const UISteps = ({ props }) => {
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
  } = props;

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
      items={items}
    >
      {items.map((step, index) => (
        <Step key={index} {...step} />
      ))}
    </Steps>
  );
};

export default UISteps;
