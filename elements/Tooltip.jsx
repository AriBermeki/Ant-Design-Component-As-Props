import React from 'react';
import { Tooltip } from 'antd';

const UITooltip = (props) => {
    const {
        align,
        arrow,
        autoAdjustOverflow,
        colo,
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

    } = props
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
      {children}
    </Tooltip>
  );
};

export default UITooltip;
