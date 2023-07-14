import React from 'react';
import { Table } from 'antd';

class UITable extends React.Component {
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
  dataSource = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more data objects as needed
  ];

  columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    // Add more columns as needed
  ];

  handleRowClick = (record) => {
    console.log('Clicked row:', record);
  };

  handleHeaderRowClick = () => {
    console.log('Clicked header row');
  };

  render() {
    return (
      <Table
        bordered
        columns={this.columns}
        dataSource={this.dataSource}
        pagination={false}
        onRow={(record, rowIndex) => ({
          onClick: () => this.handleRowClick(record),
        })}
        onHeaderRow={(columns, index) => ({
          onClick: this.handleHeaderRowClick,
        })}
      />
    );
  }
}

export default UITable;
