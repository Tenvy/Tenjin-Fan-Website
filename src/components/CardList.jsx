import React, { useState } from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrowright from '../assets/arrow-right.svg'
import arrowleft from '../assets/arrow-left.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CardList = (props) => {
  const responsive = {
    1024: { items: 3 },
    600: { items: 2 },
    0: { items: 1},
  };

  const items = props.product.map((res) => {
    return (
      <div key={res.id}>
        <div onClick={() => props.setFocusedProduct(res)} className='item mx-4 hover:bg-white rounded hover:bg-opacity-25 p-2 cursor-pointer'>
          <LazyLoadImage effect='blur' className='' src={res.imgurl[0]} alt="" />
          <h1 className='font-bold text-xl md:text-2xl'>{res.name}</h1>
          <h1 className='font-bold text-lg md:text-xl'>{res.price}</h1>
        </div>
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
  )
}
