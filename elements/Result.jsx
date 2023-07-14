import React from 'react';
import { Result } from 'antd';

class UIResult extends React.Component {
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
  render() {
  const { extra, icon, status, subTitle, title } = this.props;


  return (
    <Result
      extra={extra}
      icon={icon}
      status={status}
      subTitle={subTitle}
      title={title}
    />
  );
  }
}

export default UIResult;
