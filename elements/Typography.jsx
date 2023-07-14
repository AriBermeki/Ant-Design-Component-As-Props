import React from 'react';
import { Typography } from 'antd';

class UITypography extends React.Component {
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
      type,
      code,
      copyable,
      delete: del,
      disabled,
      editable,
      ellipsis,
      keyboard,
      mark,
      onClick,
      strong,
      italic,
      underline,
      level,
      ...otherProps
    } = this.props;

    if (type === 'title') {
      return (
        <Typography.Title
          code={code}
          copyable={copyable}
          delete={del}
          disabled={disabled}
          editable={editable}
          ellipsis={ellipsis}
          level={level}
          mark={mark}
          onClick={onClick}
          italic={italic}
          type={type}
          underline={underline}
          {...otherProps}
        />
      );
    } else if (type === 'paragraph') {
      return (
        <Typography.Paragraph
          code={code}
          copyable={copyable}
          delete={del}
          disabled={disabled}
          editable={editable}
          ellipsis={ellipsis}
          mark={mark}
          onClick={onClick}
          strong={strong}
          italic={italic}
          type={type}
          underline={underline}
          {...otherProps}
        />
      );
    } else if (type === 'text') {
      return (
        <Typography.Text
          code={code}
          copyable={copyable}
          delete={del}
          disabled={disabled}
          editable={editable}
          ellipsis={ellipsis}
          keyboard={keyboard}
          mark={mark}
          onClick={onClick}
          strong={strong}
          italic={italic}
          type={type}
          underline={underline}
          {...otherProps}
        />
      );
    } else {
      return null;
    }
  }
}

export default UITypography;
