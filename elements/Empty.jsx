import { Empty } from 'antd';

const UIEmpty = (props) => {
    const { children,description,imageStyle } = props
  return (
    <Empty
      description={description}
      imageStyle={imageStyle}
    >
      {children}
    </Empty>
  );
};

export default UIEmpty;
