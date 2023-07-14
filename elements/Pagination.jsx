import React from 'react';
import { Pagination } from 'antd';

class UIPagination extends React.Component {
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
      onChange,
      onShowSizeChange,
      current,
      defaultCurrent,
      defaultPageSize,
      disabled,
      hideOnSinglePage,
      itemRender,
      pageSize,
      pageSizeOptions,
      responsive,
      showLessItems,
      showQuickJumper,
      showSizeChanger,
      showTitle,
      showTotal,
      simple,
      size,
      total
    } = this.props;

    return (
      <Pagination
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        current={current}
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        disabled={disabled}
        hideOnSinglePage={hideOnSinglePage}
        itemRender={itemRender}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        responsive={responsive}
        showLessItems={showLessItems}
        showQuickJumper={showQuickJumper}
        showSizeChanger={showSizeChanger}
        showTitle={showTitle}
        showTotal={showTotal}
        simple={simple}
        size={size}
        total={total}
      />
    );
  }
}

export default UIPagination;
