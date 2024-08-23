import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function App() {
  return (
    <>
      <Swiper spaceBetween={30} autoplay={{delay: 7500,disableOnInteraction: false,}} pagination={{clickable: true,}} modules={[Autoplay, Pagination]} className="mySwiper sliderCustomHeight">
        <SwiperSlide>
          <img className='h-auto w-full sliderText1' src="/1600_944_hero1.png" alt="" />
          <div className='absolute top-24 left-14'>
            <h1 className=''>
              THIS IS MY HERO 1 TEXT
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-auto w-full' src="/1600_944_hero2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-auto w-full' src="/1600_944_hero3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
