import { AutoComplete } from 'antd';



function UIAutoComplete(props) {
    const {
        allowClear, 
        autoFocus, 
        backfill, 
        bordered, 
        defaultActiveFirstOption, 
        defaultOpen, 
        defaultValue, 
        disabled, 
        filterOption, 
        notFoundContent,
        options,
        placeholder, 
        value,
        onBlur, 
        onChange, 
        onFocus,
        onSelect, 
        onClear,
      } = props
  return (
    <AutoComplete
        allowClear = {allowClear} 
        autoFocus = {autoFocus} 
        backfill = {backfill} 
        bordered = {bordered} 
        defaultActiveFirstOption = {defaultActiveFirstOption} 
        defaultOpen = {defaultOpen} 
        defaultValue = {defaultValue} 
        disabled = {disabled} 
        filterOption = {filterOption} 
        notFoundContent = {notFoundContent}
        options = {options}
        placeholder = {placeholder} 
        value = {value}
        onBlur = {onBlur} 
        onChange = {onChange} 
        onFocus = {onFocus}
        onSelect = {onSelect} 
        onClear = {onClear}
    />
  );
}
export default UIAutoComplete;