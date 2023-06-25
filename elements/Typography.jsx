import { Typography } from 'antd';

const UITypography = (props) => {
  const { type, ...restProps } = props;

  if (type === 'title') {
    return <Typography.Title {...restProps} />;
  } else if (type === 'paragraph') {
    return <Typography.Paragraph {...restProps} />;
  } else if (type === 'text') {
    return <Typography.Text {...restProps} />;
  } else {
    return null;
  }
};

export default UITypography;
