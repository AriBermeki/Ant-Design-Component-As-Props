import React from 'react';
import { Tooltip } from 'antd';

class UITooltip extends React.Component {
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
      align,
      arrow,
      autoAdjustOverflow,
      color,
      defaultOpen,
      destroyTooltipOnHide,
      getPopupContainer,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayClassName,
      overlayStyle,
      overlayInnerStyle,
      placement,
      trigger,
      open,
      zIndex,
      onVisibleChange,
    } = this.props;

    return (
      <Tooltip
        align={align}
        arrow={arrow}
        autoAdjustOverflow={autoAdjustOverflow}
        color={color}
        defaultOpen={defaultOpen}
        destroyTooltipOnHide={destroyTooltipOnHide}
        getPopupContainer={getPopupContainer}
        mouseEnterDelay={mouseEnterDelay}
        mouseLeaveDelay={mouseLeaveDelay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        overlayInnerStyle={overlayInnerStyle}
        placement={placement}
        trigger={trigger}
        open={open}
        zIndex={zIndex}
        onVisibleChange={onVisibleChange}
      >
        {this.props.children}
      </Tooltip>
    );
  }
}

export default UITooltip;
