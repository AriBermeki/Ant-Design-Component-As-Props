import React from 'react';
import { DatePicker } from 'antd';

class UIDatePicker extends React.Component {
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
      picker,
      allowClear,
      autoFocus,
      bordered,
      className,
      dateRender,
      changeOnBlur,
      cellRender,
      disabled,
      disabledDate,
      format,
      popupClassName,
      getPopupContainer,
      inputReadOnly,
      locale,
      mode,
      nextIcon,
      open,
      panelRender,
      placeholder,
      placement,
      popupStyle,
      presets,
      prevIcon,
      size,
      status,
      style,
      suffixIcon,
      superNextIcon,
      superPrevIcon,
      onOpenChange,
      onPanelChange,
      defaultPickerValue,
      defaultValue,
      disabledTime,
      renderExtraFooter,
      showNow,
      showTime,
      showToday,
      value,
      onChange,
      onOk,
      allowEmpty,
      onCalendarChange,
    } = this.props;

    if (picker === 'year') {
      return (
        <DatePicker.YearPicker
          allowClear={allowClear}
          autoFocus={autoFocus}
          bordered={bordered}
          className={className}
          disabled={disabled}
          format={format}
          picker={picker}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }

    if (picker === 'quarter') {
      return (
        <DatePicker.QuarterPicker
          allowClear={allowClear}
          autoFocus={autoFocus}
          bordered={bordered}
          className={className}
          disabled={disabled}
          format={format}
          picker={picker}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }

    if (picker === 'month') {
      return (
        <DatePicker.MonthPicker
          allowClear={allowClear}
          autoFocus={autoFocus}
          bordered={bordered}
          className={className}
          disabled={disabled}
          format={format}
          picker={picker}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }

    if (picker === 'week') {
      return (
        <DatePicker.WeekPicker
          allowClear={allowClear}
          autoFocus={autoFocus}
          bordered={bordered}
          className={className}
          disabled={disabled}
          format={format}
          picker={picker}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }

    if (picker === 'range') {
      return (
        <DatePicker.RangePicker
          allowClear={allowClear}
          autoFocus={autoFocus}
          bordered={bordered}
          className={className}
          dateRender={dateRender}
          changeOnBlur={changeOnBlur}
          cellRender={cellRender}
          disabled={disabled}
          disabledDate={disabledDate}
          format={format}
          popupClassName={popupClassName}
          getPopupContainer={getPopupContainer}
          inputReadOnly={inputReadOnly}
          locale={locale}
          open={open}
          panelRender={panelRender}
          picker={picker}
          placeholder={placeholder}
          placement={placement}
          popupStyle={popupStyle}
          presets={presets}
          size={size}
          status={status}
          style={style}
          suffixIcon={suffixIcon}
          superNextIcon={superNextIcon}
          superPrevIcon={superPrevIcon}
          onOpenChange={onOpenChange}
          onPanelChange={onPanelChange}
          defaultPickerValue={defaultPickerValue}
          defaultValue={defaultValue}
          disabledTime={disabledTime}
          renderExtraFooter={renderExtraFooter}
          showNow={showNow}
          showTime={showTime}
          showToday={showToday}
          value={value}
          onChange={onChange}
          onOk={onOk}
          allowEmpty={allowEmpty}
          separator={separator}
          onCalendarChange={onCalendarChange}
        />
      );
    }

    // Standard DatePicker
    return (
      <DatePicker
        allowClear={allowClear}
        autoFocus={autoFocus}
        bordered={bordered}
        className={className}
        dateRender={dateRender}
        changeOnBlur={changeOnBlur}
        cellRender={cellRender}
        disabled={disabled}
        disabledDate={disabledDate}
        format={format}
        popupClassName={popupClassName}
        getPopupContainer={getPopupContainer}
        inputReadOnly={inputReadOnly}
        locale={locale}
        mode={mode}
        nextIcon={nextIcon}
        open={open}
        panelRender={panelRender}
        picker={picker}
        placeholder={placeholder}
        placement={placement}
        popupStyle={popupStyle}
        presets={presets}
        prevIcon={prevIcon}
        size={size}
        status={status}
        style={style}
        suffixIcon={suffixIcon}
        superNextIcon={superNextIcon}
        superPrevIcon={superPrevIcon}
        onOpenChange={onOpenChange}
        onPanelChange={onPanelChange}
        defaultPickerValue={defaultPickerValue}
        defaultValue={defaultValue}
        disabledTime={disabledTime}
        renderExtraFooter={renderExtraFooter}
        showNow={showNow}
        showTime={showTime}
        showToday={showToday}
        value={value}
        onChange={onChange}
        onOk={onOk}
      />
    );
  }
}

export default UIDatePicker;
