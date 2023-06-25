import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);


const UITimePicker = (props) => {
    const {
        allowClear,
        autoFocus,
        bordered,
        defaultValue,
        changeOnBlur,
        className,
        clearIcon,
        clearText,
        disabled,
        format,
        hideDisabledOptions,
        hourStep,
        open,
        placeholder,
        placement,
        minuteStep,
        inputReadOnly,
        secondStep,
        value,
        showNow,
        size,
        status,
        popupClassName,
        suffixIcon,
        use12Hours,

    } = props
  const mydefaultValue = dayjs(defaultValue);

  const disabledTime = (now) => {
    // Hier kannst du die Funktion anpassen, um die gewünschten Zeitbeschränkungen festzulegen
    return {
      disabledHours: () => [1, 2, 3],
      disabledMinutes: () => [10, 20, 30],
      disabledSeconds: () => [0, 15, 45],
    };
  };


  const getPopupContainer = (trigger) => trigger.parentNode;

  const popupStyle = { zIndex: 9999 };
  const renderExtraFooter = () => null;


  const onChange = (time, timeString) => {
    // Hier kannst du die gewählte Zeit verarbeiten
    console.log('Selected Time:', time);
    console.log('Formatted Time String:', timeString);
  };

  const onOpenChange = (open) => {
    // Hier kannst du den Öffnungszustand des Panels verarbeiten
    console.log('Panel Open:', open);
  };

  const onSelect = (time) => {
    // Hier kannst du die Auswahl einer Zeit verarbeiten
    console.log('Selected Time:', time);
  };

  return (
    <TimePicker
      defaultValue={mydefaultValue}
      allowClear={allowClear}
      autoFocus={autoFocus}
      bordered={bordered}
      changeOnBlur={changeOnBlur}
      className={className}
      clearIcon={clearIcon}
      clearText={clearText}
      disabled={disabled}
      disabledTime={disabledTime}
      format={format}
      getPopupContainer={getPopupContainer}
      hideDisabledOptions={hideDisabledOptions}
      hourStep={hourStep}
      inputReadOnly={inputReadOnly}
      minuteStep={minuteStep}
      open={open}
      placeholder={placeholder}
      placement={placement}
      popupClassName={popupClassName}
      popupStyle={popupStyle}
      renderExtraFooter={renderExtraFooter}
      secondStep={secondStep}
      showNow={showNow}
      size={size}
      status={status}
      suffixIcon={suffixIcon}
      use12Hours={use12Hours}
      value={value}
      onChange={onChange}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
    />
  );
};

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