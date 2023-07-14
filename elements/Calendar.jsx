import React from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

class UICalendar extends React.Component {
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
  dateCellRender = (date) => {
    // Customize the content of the date cell and return the result as ReactNode
    return <span>{date.date()}</span>;
  };

  monthCellRender = (date) => {
    // Customize the content of the month cell and return the result as ReactNode
    return <span>{date.format('MMM')}</span>;
  };

  onPanelChange = (date, mode) => {
    // Handle panel change events here
  };

  onSelect = (date, info) => {
    // Handle date selection events here
  };

  render() {
    return (
      <Calendar
        dateCellRender={this.dateCellRender}
        monthCellRender={this.monthCellRender}
        onPanelChange={this.onPanelChange}
        onSelect={this.onSelect}
      />
    );
  }
}

export default UICalendar;
