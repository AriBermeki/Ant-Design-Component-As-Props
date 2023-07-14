import React from 'react';
import { Skeleton } from 'antd';

class UISkeleton extends React.Component {
  constructor(props) {
    super(props);

    if (props.onChange) {
      this.handleAffixChange = () => {
        console.log('Affix handleAffixChange!');
      };
    }
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  render() {
    const { active, avatar, loading, paragraph, round, title } = this.props;
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
  }
}

export default UISkeleton;
