import React from 'react';
import { Link } from 'react-router-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { SliderImg } from '../containers/sor-dev/HomePage/SliderImg.js';

export const WorkingCarousel = ({ sliderImgs }) => {
  return (
    <Carousel
      interval={3400}
      swipeScrollTolerance={200}
      showThumbs={false}
      autoPlay={false}
      infiniteLoop
      centerMode={true}
      // centerSlidePercentage={90}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      emulateTouch
      autoFocus
      // centerSlidePercentage={95}
      stopOnHover={false}
      useKeyboardArrows>
      <Link to='/dev/recent-projects'>
        <SliderImg img={sliderImgs[0]}>
          <h4>Recent mandates</h4>
          <p>Take a look at our recent work and see if it suits your tech/project needs.</p>
        </SliderImg>
      </Link>
      <Link to='/dev/our-tech' className='card'>
        <SliderImg img={sliderImgs[1]}>
          <h4>Our Tech Stack</h4>
          <p>We use the most recent technologies and framework to build your sophisticated applications.</p>
        </SliderImg>
      </Link>
      <Link to='/dev/about' className='card'>
        <SliderImg img={sliderImgs[2]}>
          <h4>What's SOR DEV?</h4>
          <p>Enterprise-level software solutions, stunning user experiences and lightning speed site performance. Discover what it's like to work with us.</p>
        </SliderImg>
      </Link>
    </Carousel>
  );
};
