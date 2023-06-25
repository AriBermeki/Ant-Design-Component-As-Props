import React from 'react';
import { Statistic } from 'antd';
const { Countdown } = Statistic;

const UIStatistic = (props) => {
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
  } = props;

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
      onFinish={onFinish ? onFinish:null}
      onChange={onChange ? onChange:null}
    />
  );
};

export default UIStatistic;
