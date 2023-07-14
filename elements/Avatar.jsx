import React from 'react';
import { Avatar } from 'antd';

class UIAvatar extends React.Component {
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
  render() {
    const { 
      alt, 
      gap, 
      icon, 
      shape, 
      size, 
      src, 
      srcSet, 
      draggable, 
      crossOrigin, 
      onError } = this.props;

    return (
      <Avatar
        alt={alt}
        gap={gap}
        icon={icon}
        shape={shape}
        size={size}
        src={src}
        srcSet={srcSet}
        draggable={draggable}
        crossOrigin={crossOrigin}
        onError={onError}
      />
    );
  }
}

export default UIAvatar;
