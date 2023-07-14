import React from 'react';
import { Badge } from 'antd';

class UIBadge extends React.Component {
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
    const {
      color,
      count,
      dot,
      offset,
      overflowCount,
      showZero,
      size,
      status,
      text,
      title,
      ribbonColor,
      ribbonPlacement,
      ribbonText
    } = this.props;

    return (
      <Badge
        color={color}
        count={count}
        dot={dot}
        offset={offset}
        overflowCount={overflowCount}
        showZero={showZero}
        size={size}
        status={status}
        text={text}
        title={title}
        ribbon={
          ribbonText ? (
            <Badge.Ribbon color={ribbonColor} placement={ribbonPlacement} text={ribbonText} />
          ) : null
        }
      />
    );
  }
}

export default UIBadge;
