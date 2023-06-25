import React from 'react';
import { Skeleton } from 'antd';

const UISkeleton = (props) => {
  const { active, avatar, loading, paragraph, round, title } = props;
  const { active: avatarActive, shape, size: avatarSize } = avatar || {};
  const { width: titleWidth } = title || {};
  const { rows, width: paragraphWidth } = paragraph || {};

  return (
    <Skeleton
      active={active}
      avatar={avatar}
      loading={loading}
      paragraph={paragraph}
      round={round}
      title={title}
    >
      {avatar && (
        <Skeleton.Avatar active={avatarActive} shape={shape} size={avatarSize} />
      )}
      {title && <Skeleton.Title width={titleWidth} />}
      {paragraph && (
        <Skeleton.Paragraph rows={rows} width={paragraphWidth} />
      )}
    </Skeleton>
  );
};

export default UISkeleton;
