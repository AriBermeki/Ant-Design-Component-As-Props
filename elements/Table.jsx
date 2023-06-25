import React from 'react';
import { Table } from 'antd';

const UITable = () => {
  const dataSource = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more data objects as needed
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    // Add more columns as needed
  ];

  const handleRowClick = (record) => {
    console.log('Clicked row:', record);
  };

  const handleHeaderRowClick = () => {
    console.log('Clicked header row');
  };

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      onRow={(record, rowIndex) => ({
        onClick: () => handleRowClick(record),
      })}
      onHeaderRow={(columns, index) => ({
        onClick: handleHeaderRowClick,
      })}
    />
  );
};

export default UITable;
