import { Tag } from 'antd';

const UITag = (props) => {
  const { closable, closeIcon, color, icon, bordered, onClose, checked, onChange } = props;

  if (checked !== undefined) {
    return (
      <Tag.CheckableTag
        checked={checked}
        onChange={onChange}
      >
        {props.children}
      </Tag.CheckableTag>
    );
  }

  return (
    <Tag
      closable={closable}
      closeIcon={closeIcon}
      color={color}
      icon={icon}
      bordered={bordered}
      onClose={onClose}
    >
      {props.children}
    </Tag>
  );
};

export default UITag;



// import React from 'react';
// import UITag from './UITag';

// const App = () => {
//   return (
//     <div>
//       <UITag closable={true} onClose={() => console.log('Tag closed')}>
//         Tag 1
//       </UITag>

//       <UITag
//         checked={true}
//         onChange={(checked) => console.log('Tag checked:', checked)}
//       >
//         Tag 2
//       </UITag>
//     </div>
//   );
// };

// export default App;
