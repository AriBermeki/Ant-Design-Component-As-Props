import React from 'react';
import { Font } from 'antd';

const UIWatermark = (props) => {
  const {
    width = 120,
    height = 64,
    rotate = -22,
    zIndex = 9,
    image = '',
    content = '',
    font = {
      color: 'rgba(0,0,0,.15)',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'sans-serif',
      fontStyle: 'normal'
    },
    gap = [100, 100],
    offset = [gap[0] / 2, gap[1] / 2]
  } = props;

  const watermarkStyle = {
    position: 'relative',
    width: `${width}px`,
    height: `${height}px`,
    transform: `rotate(${rotate}deg)`,
    zIndex: zIndex,
    backgroundImage: image && `url(${image})`,
    backgroundRepeat: 'repeat',
    pointerEvents: 'none',
    userSelect: 'none'
  };

  const contentStyle = {
    position: 'absolute',
    top: `${offset[1]}px`,
    left: `${offset[0]}px`,
    color: font.color,
    fontSize: `${font.fontSize}px`,
    fontWeight: font.fontWeight,
    fontFamily: font.fontFamily,
    fontStyle: font.fontStyle
  };

  return (
    <div style={watermarkStyle}>
      {Array.isArray(content) ? (
        content.map((text, index) => (
          <div key={index} style={contentStyle}>
            {text}
          </div>
        ))
      ) : (
        <div style={contentStyle}>{content}</div>
      )}
    </div>
  );
};

export default UIWatermark;
