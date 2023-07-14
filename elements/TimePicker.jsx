import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

class UITimePicker extends React.Component {
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
  mydefaultValue = dayjs(this.props.defaultValue);

  disabledTime = (now) => {
    // Customize the function to set the desired time restrictions
    return {
      disabledHours: () => [1, 2, 3],
      disabledMinutes: () => [10, 20, 30],
      disabledSeconds: () => [0, 15, 45],
    };
  };

  getPopupContainer = (trigger) => trigger.parentNode;

  popupStyle = { zIndex: 9999 };

  renderExtraFooter = () => null;

  onChange = (time, timeString) => {
    // Process the selected time
    console.log('Selected Time:', time);
    console.log('Formatted Time String:', timeString);
  };

  onOpenChange = (open) => {
    // Process the panel open state
    console.log('Panel Open:', open);
  };

  onSelect = (time) => {
    // Process the selection of a time
    console.log('Selected Time:', time);
  };

  render() {
    const {
      allowClear,
      autoFocus,
      bordered,
      changeOnBlur,
      className,
      clearIcon,
      clearText,
      disabled,
      format,
      hideDisabledOptions,
      hourStep,
      inputReadOnly,
      minuteStep,
      open,
      placeholder,
      placement,
      popupClassName,
      secondStep,
      showNow,
      size,
      status,
      suffixIcon,
      use12Hours,
      value,
    } = this.props;

    return (
      <TimePicker
        defaultValue={this.mydefaultValue}
        allowClear={allowClear}
        autoFocus={autoFocus}
        bordered={bordered}
        changeOnBlur={changeOnBlur}
        className={className}
        clearIcon={clearIcon}
        clearText={clearText}
        disabled={disabled}
        disabledTime={this.disabledTime}
        format={format}
        getPopupContainer={this.getPopupContainer}
        hideDisabledOptions={hideDisabledOptions}
        hourStep={hourStep}
        inputReadOnly={inputReadOnly}
        minuteStep={minuteStep}
        open={open}
        placeholder={placeholder}
        placement={placement}
        popupClassName={popupClassName}
        popupStyle={this.popupStyle}
        renderExtraFooter={this.renderExtraFooter}
        secondStep={secondStep}
        showNow={showNow}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        use12Hours={use12Hours}
        value={value}
        onChange={this.onChange}
        onOpenChange={this.onOpenChange}
        onSelect={this.onSelect}
      />
    );
  }
}

export default UITimePicker;


// const defaultValue = dayjs('13:30:56', 'HH:mm:ss');
// const allowClear = true;
// const autoFocus = false;
// const bordered = true;
// const changeOnBlur = false;
// const className = "custom-timepicker";
// const clearIcon = null;
// const clearText = "Clear";
// const disabled = false;
// const format = "HH:mm:ss";
// const hideDisabledOptions = false;
// const hourStep = 1;
// const inputReadOnly = false;
// const minuteStep = 1;
// const open = false;
// const placeholder = "Select a time";
// const placement = "bottomLeft";
// const popupClassName = "custom-timepicker-popup";
// const popupStyle = { zIndex: 9999 };
// const secondStep = 1;
// const showNow = false;
// const size = "default";
// const status = undefined;
// const suffixIcon = null;
// const use12Hours = false;
// const value = null;