import React from 'react';
import { ColorPicker } from 'antd';

class UIColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleOpenChange = this.handleOpenChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }

  handleChange(color, hex) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(color, hex);
    }
  }

  handleFormatChange(format) {
    const { onFormatChange } = this.props;
    if (onFormatChange) {
      onFormatChange(format);
    }
  }

  handleOpenChange(open) {
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  }

  handleClear() {
    const { onClear } = this.props;
    if (onClear) {
      onClear();
    }
  }

  render() {
    const {
      format,
      value,
      defaultValue,
      allowClear,
      presets,
      children,
      trigger,
      open,
      disabled,
      placement,
      arrow,
    } = this.props;

    return (
      <ColorPicker
        format={format}
        value={value}
        defaultValue={defaultValue}
        allowClear={allowClear}
        presets={presets}
        children={children}
        trigger={trigger}
        open={open}
        disabled={disabled}
        placement={placement}
        arrow={arrow}
        onChange={this.handleChange}
        onFormatChange={this.handleFormatChange}
        onOpenChange={this.handleOpenChange}
        onClear={this.handleClear}
      />
    );
  }
}

export default UIColorPicker;
