import React from 'react';
import { Image } from 'antd';

const UIImage = (props) => {
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
  } = props;

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
};

export default UIImage;
