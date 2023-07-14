import React from 'react';
import { Timeline } from 'antd';

class UITimeline extends React.Component {
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
    const { mode, pending, pendingDot, reverse, items } = this.props;

    return (
      <Timeline mode={mode} pending={pending} pendingDot={pendingDot} reverse={reverse}>
        {items.map((item, index) => (
          <Timeline.Item key={index} color={item.color} dot={item.dot} label={item.label} position={item.position}>
            {item.children}
          </Timeline.Item>
        ))}
      </Timeline>
    );
  }
}

export default UITimeline;
