import React from 'react';
import { Tag } from 'antd';

class UITag extends React.Component {
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
      closable,
      closeIcon,
      color,
      icon,
      bordered,
      onClose,
      checked,
      onChange,
    } = this.props;

    if (checked !== undefined) {
      return (
        <Tag.CheckableTag checked={checked} onChange={onChange}>
          {this.props.children}
        </Tag.CheckableTag>
      );
    }

    return (
      <Tag
        closable={closable}
        closeIcon={closeIcon}
        color={color}
        icon={icon}
        bordered={bordered}
        onClose={onClose}
      >
        {this.props.children}
      </Tag>
    );
  }
}

export default UITag;
