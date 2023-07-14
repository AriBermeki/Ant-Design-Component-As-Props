import React from 'react';
import { Statistic } from 'antd';
const { Countdown } = Statistic;

class UIStatistic extends React.Component {
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
      decimalSeparator,
      formatter,
      groupSeparator,
      loading,
      precision,
      prefix,
      suffix,
      title,
      value,
      valueStyle,
      onFinish,
      onChange,
    } = this.props;

    return (
      <Statistic
        decimalSeparator={decimalSeparator}
        formatter={formatter}
        groupSeparator={groupSeparator}
        loading={loading}
        precision={precision}
        prefix={prefix}
        suffix={suffix}
        title={title}
        value={value}
        valueStyle={valueStyle}
        onFinish={onFinish ? onFinish : null}
        onChange={onChange ? onChange : null}
      />
    );
  }
}

export default UIStatistic;
