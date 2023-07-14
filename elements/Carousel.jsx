import React from 'react';
import { Carousel } from 'antd';

class UICarousel extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state or bind methods here if needed
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  render() {
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
    } = this.props;

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
  }
}

export default UICarousel;

