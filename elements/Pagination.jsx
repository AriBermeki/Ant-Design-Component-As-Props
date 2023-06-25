import { Pagination } from 'antd';

function UIPagination(props) {
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
    } = props
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

export default UIPagination;