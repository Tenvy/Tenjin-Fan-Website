import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrowright from '../assets/arrow-right.svg'
import arrowleft from '../assets/arrow-left.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const SingleCard = (props) => {
  const responsive = {
    0: { items: 1 },
  };

  const items = props.herodata.map((res, key) => {
    return (
      <div key={key} className="item">
        <LazyLoadImage
          effect="blur"
          className="rounded-md"
          src={res}
          alt="images" />
      </div>
    );
  });

	return (
    <div>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          keyboardNavigation={true}
          renderPrevButton={() => {
            return <img className="w-10 float-right cursor-pointer" src={arrowleft} alt="" />
          }}
          renderNextButton={() => {
            return <img className="w-10 cursor-pointer" src={arrowright} alt="" />
          }}
        />
    </div>
  );
};
