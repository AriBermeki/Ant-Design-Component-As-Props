import React from 'react';
import { TreeSelect } from 'antd';

class UITreeSelect extends React.Component {
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
  onChange = (value, label, extra) => {
    // Handle onChange event
  };

  onDropdownVisibleChange = (open) => {
    // Handle onDropdownVisibleChange event
    console.log(open);
  };

  onSearch = (value) => {
    // Handle onSearch event
  };

  onSelect = (value, node, extra) => {
    // Handle onSelect event
  };

  onTreeExpand = (expandedKeys) => {
    // Handle onTreeExpand event
  };

  treeSelectProps = {
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
    onChange: this.onChange,
    onDropdownVisibleChange: this.onDropdownVisibleChange,
    onSearch: this.onSearch,
    onSelect: this.onSelect,
    onTreeExpand: this.onTreeExpand,
  };

  render() {
    return <TreeSelect {...this.treeSelectProps} />;
  }
}

export default UITreeSelect;
