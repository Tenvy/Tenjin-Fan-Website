import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrowright from '../assets/arrow-right.svg'
import arrowleft from '../assets/arrow-left.svg'

export const SingleCard = (props) => {
  const responsive = {
    0: { items: 1 },
  };

  const items = props.herodata.map((res, key) => {
    return (
      <div key={key} className="item">
        <img className="rounded-md" src={res} alt="" />
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
