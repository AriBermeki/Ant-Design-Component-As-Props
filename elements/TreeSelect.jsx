import React from 'react';
import { TreeSelect } from 'antd';

const UITreeSelect = () => {
  const onChange = (value, label, extra) => {
    // Handle onChange event
  };

  const onDropdownVisibleChange = (open) => {
    // Handle onDropdownVisibleChange event
    console.log(open);
  };

  const onSearch = (value) => {
    // Handle onSearch event
  };

  const onSelect = (value, node, extra) => {
    // Handle onSelect event
  };

  const onTreeExpand = (expandedKeys) => {
    // Handle onTreeExpand event
  };

  const treeSelectProps = {
    allowClear: false,
    autoClearSearchValue: true,
    bordered: true,
    defaultValue: undefined,
    disabled: false,
    popupClassName: '',
    popupMatchSelectWidth: true,
    dropdownRender: undefined,
    dropdownStyle: {},
    fieldNames: { label: 'label', value: 'value', children: 'children' },
    filterTreeNode: true,
    getPopupContainer: () => document.body,
    labelInValue: false,
    listHeight: 256,
    loadData: undefined,
    maxTagCount: undefined,
    maxTagPlaceholder: undefined,
    maxTagTextLength: undefined,
    multiple: false,
    notFoundContent: 'Not Found',
    placeholder: '',
    placement: 'bottomLeft',
    searchValue: '',
    showArrow: true,
    showCheckedStrategy: 'SHOW_CHILD',
    showSearch: false,
    size: undefined,
    status: undefined,
    suffixIcon: undefined,
    switcherIcon: undefined,
    tagRender: undefined,
    treeCheckable: false,
    treeCheckStrictly: false,
    treeData: [],
    treeDataSimpleMode: false,
    treeDefaultExpandAll: false,
    treeDefaultExpandedKeys: [],
    treeExpandAction: false,
    treeExpandedKeys: [],
    treeIcon: false,
    treeLoadedKeys: [],
    treeLine: false,
    treeNodeFilterProp: 'value',
    treeNodeLabelProp: 'title',
    value: undefined,
    virtual: true,
    onChange: onChange,
    onDropdownVisibleChange: onDropdownVisibleChange,
    onSearch: onSearch,
    onSelect: onSelect,
    onTreeExpand: onTreeExpand,
  };

  return <TreeSelect {...treeSelectProps} />;
};

export default UITreeSelect;
