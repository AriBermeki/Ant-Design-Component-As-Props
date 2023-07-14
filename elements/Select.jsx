import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

class UISelect extends React.Component {
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
      allowClear,
      autoClearSearchValue,
      autoFocus,
      bordered,
      clearIcon,
      defaultActiveFirstOption,
      defaultOpen,
      defaultValue,
      disabled,
      popupClassName,
      popupMatchSelectWidth,
      dropdownRender,
      dropdownStyle,
      fieldNames,
      filterOption,
      filterSort,
      getPopupContainer,
      labelInValue,
      listHeight,
      loading,
      maxTagCount,
      maxTagPlaceholder,
      maxTagTextLength,
      menuItemSelectedIcon,
      mode,
      notFoundContent,
      open,
      optionFilterProp,
      optionLabelProp,
      options,
      placeholder,
      placement,
      removeIcon,
      searchValue,
      showArrow,
      showSearch,
      size,
      status,
      suffixIcon,
      tagRender,
      tokenSeparators,
      value,
      virtual,
      onBlur,
      onChange,
      onClear,
      onDeselect,
      onDropdownVisibleChange,
      onFocus,
      onInputKeyDown,
      onMouseEnter,
      onMouseLeave,
      onPopupScroll,
      onSearch,
      onSelect,
    } = this.props;

    return (
      <Select
        allowClear={allowClear}
        autoClearSearchValue={autoClearSearchValue}
        autoFocus={autoFocus}
        bordered={bordered}
        clearIcon={clearIcon}
        defaultActiveFirstOption={defaultActiveFirstOption}
        defaultOpen={defaultOpen}
        defaultValue={defaultValue}
        disabled={disabled}
        popupClassName={popupClassName}
        popupMatchSelectWidth={popupMatchSelectWidth}
        dropdownRender={dropdownRender}
        dropdownStyle={dropdownStyle}
        fieldNames={fieldNames}
        filterOption={filterOption}
        filterSort={filterSort}
        getPopupContainer={getPopupContainer}
        labelInValue={labelInValue}
        listHeight={listHeight}
        loading={loading}
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder}
        maxTagTextLength={maxTagTextLength}
        menuItemSelectedIcon={menuItemSelectedIcon}
        mode={mode}
        notFoundContent={notFoundContent}
        open={open}
        optionFilterProp={optionFilterProp}
        optionLabelProp={optionLabelProp}
        placeholder={placeholder}
        placement={placement}
        removeIcon={removeIcon}
        searchValue={searchValue}
        showArrow={showArrow}
        showSearch={showSearch}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        tagRender={tagRender}
        tokenSeparators={tokenSeparators}
        value={value}
        virtual={virtual}
        onBlur={onBlur}
        onChange={onChange}
        onClear={onClear}
        onDeselect={onDeselect}
        onDropdownVisibleChange={onDropdownVisibleChange}
        onFocus={onFocus}
        onInputKeyDown={onInputKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPopupScroll={onPopupScroll}
        onSearch={onSearch}
        onSelect={onSelect}
      >
        {options.map((option) => {
          if (option.groupLabel) {
            return (
              <OptGroup key={option.groupLabel} label={option.groupLabel}>
                {option.options.map((subOption) => (
                  <Option key={subOption.value} value={subOption.value}>
                    {subOption.label}
                  </Option>
                ))}
              </OptGroup>
            );
          } else {
            return (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            );
          }
        })}
      </Select>
    );
  }
}

export default UISelect;
