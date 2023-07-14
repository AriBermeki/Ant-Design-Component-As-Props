import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;

class UITree extends React.Component {
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
  renderTreeNodes = (data) =>
    data.map((node) => (
      <TreeNode
        key={node.key}
        title={node.title}
        disabled={node.disabled}
        checkable={node.checkable}
        selectable={node.selectable}
        isLeaf={node.isLeaf}
        icon={node.icon}
      >
        {node.children && this.renderTreeNodes(node.children)}
      </TreeNode>
    ));

  render() {
    const {
      allowDrop,
      autoExpandParent,
      blockNode,
      checkable,
      checkedKeys,
      checkStrictly,
      defaultCheckedKeys,
      defaultExpandAll,
      defaultExpandedKeys,
      defaultExpandParent,
      defaultSelectedKeys,
      disabled,
      draggable,
      expandedKeys,
      fieldNames,
      filterTreeNode,
      height,
      icon,
      loadData,
      loadedKeys,
      multiple,
      rootClassName,
      rootStyle,
      selectable,
      selectedKeys,
      showIcon,
      showLine,
      switcherIcon,
      titleRender,
      treeData,
      virtual,
      onCheck,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop,
      onExpand,
      onLoad,
      onRightClick,
      onSelect,
    } = this.props;

    return (
      <Tree
        allowDrop={allowDrop}
        autoExpandParent={autoExpandParent}
        blockNode={blockNode}
        checkable={checkable}
        checkedKeys={checkedKeys}
        checkStrictly={checkStrictly}
        defaultCheckedKeys={defaultCheckedKeys}
        defaultExpandAll={defaultExpandAll}
        defaultExpandedKeys={defaultExpandedKeys}
        defaultExpandParent={defaultExpandParent}
        defaultSelectedKeys={defaultSelectedKeys}
        disabled={disabled}
        draggable={draggable}
        expandedKeys={expandedKeys}
        fieldNames={fieldNames}
        filterTreeNode={filterTreeNode}
        height={height}
        icon={icon}
        loadData={loadData}
        loadedKeys={loadedKeys}
        multiple={multiple}
        rootClassName={rootClassName}
        rootStyle={rootStyle}
        selectable={selectable}
        selectedKeys={selectedKeys}
        showIcon={showIcon}
        showLine={showLine}
        switcherIcon={switcherIcon}
        titleRender={titleRender}
        treeData={treeData}
        virtual={virtual}
        onCheck={onCheck}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onExpand={onExpand}
        onLoad={onLoad}
        onRightClick={onRightClick}
        onSelect={onSelect}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    );
  }
}

export default UITree;
