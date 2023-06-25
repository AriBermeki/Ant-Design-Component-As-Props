import { Avatar } from 'antd';

function UIAvatar(props) {
    const{ alt, gap, icon, shape, size, src, srcSet, draggable, crossOrigin, onError } = props
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
export default UIAvatar;