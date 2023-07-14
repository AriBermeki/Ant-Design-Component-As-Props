import { Rate } from 'antd';
import React from 'react';

class UIRate extends React.Component {
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
  const {
  allowClear,
  allowHalf,
  autoFocus,
  character,
  className,
  count,
  defaultValue,
  disabled,
  style,
  tooltips,
  value,
  onBlur,
  onChange,
  onFocus,
  onHoverChange,
  onKeyDown,
  } = this.props;


  return (
    <Rate
      allowClear={allowClear}
      allowHalf={allowHalf}
      autoFocus={autoFocus}
      character={character}
      className={className}
      count={count}
      defaultValue={defaultValue}
      disabled={disabled}
      style={style}
      tooltips={tooltips}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onHoverChange={onHoverChange}
      onKeyDown={onKeyDown}
    />
  );
  }
}

export default UIRate;