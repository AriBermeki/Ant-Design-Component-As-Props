import React from 'react';
import { Affix } from 'antd';

class UIAffix extends React.Component {
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
    

    return (
      <Affix
        offsetBottom={this.props.offsetBottom} // Use this.props
        offsetTop={this.props.offsetTop} // Use this.props
        target={this.props.target} // Use this.props
        onChange={this.handleAffixChange}
        style={this.props.style} // Use this.props
      >
        {/* Render children or content that you want to affix */}
      </Affix>
    );
  }
}

export default UIAffix;
