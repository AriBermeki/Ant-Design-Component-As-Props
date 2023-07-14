import React, { Component } from 'react';
import { Image } from 'antd';

class UIImage extends Component {
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
      fallback,
      height,
      placeholder,
      preview,
      src,
      width,
      onError,
      rootClassName,
    } = this.props;

    return (
      <Image
        alt={alt}
        fallback={fallback}
        height={height}
        placeholder={placeholder}
        preview={preview}
        src={src}
        width={width}
        onError={onError}
        rootClassName={rootClassName}
      />
    );
  }
}

export default UIImage;
