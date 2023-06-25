import { Affix } from 'antd';

const UIAffix = (props) => {
  const handleAffixChange = (affixed) => {
    // Callback function for when Affix state is changed
    console.log('Affix state changed:', affixed);
  };

  return (
    <Affix
      offsetBottom={props.offsetBottom} // Offset from the bottom of the viewport
      offsetTop={props.offsetTop} // Offset from the top of the viewport
      target={props.target} // Specifies the scrollable area DOM node
      onChange={handleAffixChange} // Callback for when Affix state is changed
      style={props.style} // Style for theUIffix  itself
    >
      {props.content}
      
    </Affix>
  );
};

export default UIAffix;
