import { Typography } from 'antd';

const UITypography = (props) => {
  const { type, code, copyable, delete: del, disabled, editable, ellipsis, keyboard, mark, onClick, strong, italic, underline, level, ...otherProps } = props;

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
};

export default UITypography;


