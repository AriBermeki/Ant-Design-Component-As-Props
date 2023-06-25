import { Carousel } from 'antd';

const UICarousel = (props) => {
    const { 
        autoplay, 
        dotPosition, 
        dots,
        waitForAnimate, 
        easing, 
        effect, 
        afterChange, 
        beforeChange, 
        content
    } = props
  return (
    <Carousel
      autoplay={autoplay}
      dotPosition={dotPosition}
      dots={dots}
      waitForAnimate={waitForAnimate}
      easing={easing}
      effect={effect}
      afterChange={afterChange}
      beforeChange={beforeChange}
    >
      {content}
    
      
    </Carousel>
  );
};

export default UICarousel;
