import { Cascader } from 'antd';

const UICascader = (props) => {
    const {
        allowClear,
        autoFocus,
        bordered,
        clearIcon,
        changeOnSelect,
        className,
        defaultValue,
        disabled,
        displayRender,
        tagRender,
        popupClassName,
        dropdownRender,
        expandIcon,
        expandTrigger,
        fieldNames,
        getPopupContainer,
        loadData,
        maxTagCount,
        maxTagPlaceholder,
        maxTagTextLength,
        notFoundContent,
        open,
        options,
        placeholder,
        placement,
        showSearch,
        size,
        status,
        style,
        suffixIcon,
        value,
        onChange,
        onDropdownVisibleChange,
        multiple,
        removeIcon,
        showCheckedStrategy,
        searchValue,
        onSearch,
        dropdownMenuColumnStyle,
        loadingIcon,
    } = props;

  return (
    <Cascader
      options={options}
      onChange={onChange}
      allowClear={allowClear}
      autoFocus={autoFocus}
      bordered={bordered}
      clearIcon={clearIcon}
      changeOnSelect={changeOnSelect}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      displayRender={displayRender}
      tagRender={tagRender}
      popupClassName={popupClassName}
      dropdownRender={dropdownRender}
      expandIcon={expandIcon}
      expandTrigger={expandTrigger}
      fieldNames={fieldNames}
      getPopupContainer={getPopupContainer}
      loadData={loadData}
      maxTagCount={maxTagCount}
      maxTagPlaceholder={maxTagPlaceholder}
      maxTagTextLength={maxTagTextLength}
      notFoundContent={notFoundContent}
      open={open}
      placeholder={placeholder}
      placement={placement}
      showSearch={showSearch}
      size={size}
      status={status}
      style={style}
      suffixIcon={suffixIcon}
      value={value}
      onDropdownVisibleChange={onDropdownVisibleChange}
      multiple={multiple}
      removeIcon={removeIcon}
      showCheckedStrategy={showCheckedStrategy}
      searchValue={searchValue}
      onSearch={onSearch}
      dropdownMenuColumnStyle={dropdownMenuColumnStyle}
      loadingIcon={loadingIcon}
    />
  );
};

export default UICascader;
