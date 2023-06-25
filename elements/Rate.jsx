import { Rate } from 'antd';

const UIRate = (props) => {
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
        onKeyDown
    } = props
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
};

export default UIRate;
