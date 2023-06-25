import { Popover } from 'antd';

const UIPopover = (props) => {
    const { 
        content, 
        title, 
        children 
    } = props
  return (
    <Popover
      content={content}
      title={title}
    >
      {children}
    </Popover>
  );
};

export default UIPopover;
