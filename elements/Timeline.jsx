import React from 'react';
import { Timeline } from 'antd';


const UITimeline = (props) => {
    const { mode, pending, pendingDot, reverse, items } = props
  return (
    <Timeline mode={mode} pending={pending} pendingDot={pendingDot} reverse={reverse}>
      {items.map((item, index) => (
        <Timeline.Item key={index} color={item.color} dot={item.dot} label={item.label} position={item.position}>
          {item.children}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default UITimeline;
