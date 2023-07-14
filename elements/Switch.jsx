import React from 'react';
import { Switch } from 'antd';

class UISwitch extends React.Component {
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
  handleOnChange = (checked, event) => {
    // Perform the desired action when the state changes
    const { onChange } = this.props;
    if (onChange) {
      onChange(checked, event);
    }
  };

  handleOnClick = (checked, event) => {
    // Perform the desired action when the switch is clicked
    const { onClick } = this.props;
    if (onClick) {
      onClick(checked, event);
    }
  };

  render() {
    const {
      autoFocus,
      checked,
      checkedChildren,
      className,
      defaultChecked,
      disabled,
      loading,
      size,
      unCheckedChildren,
    } = this.props;

    return (
      <Switch
        autoFocus={autoFocus}
        checked={checked}
        checkedChildren={checkedChildren}
        className={className}
        defaultChecked={defaultChecked}
        disabled={disabled}
        loading={loading}
        size={size}
        unCheckedChildren={unCheckedChildren}
        onChange={this.handleOnChange}
        onClick={this.handleOnClick}
      />
    );
  }
}

export default UISwitch;
