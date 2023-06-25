import { Badge } from 'antd';

const UIBadge = (props) => {
  const {
    color,
    count,
    dot,
    offset,
    overflowCount,
    showZero,
    size,
    status,
    text,
    title,
    ribbonColor,
    ribbonPlacement,
    ribbonText
  } = props;

  return (
    <Badge
      color={color}
      count={count}
      dot={dot}
      offset={offset}
      overflowCount={overflowCount}
      showZero={showZero}
      size={size}
      status={status}
      text={text}
      title={title}
      ribbon={
        ribbonText ? (
          <Badge.Ribbon color={ribbonColor} placement={ribbonPlacement} text={ribbonText} />
        ) : null
      }
    />
  );
};

export default UIBadge;
