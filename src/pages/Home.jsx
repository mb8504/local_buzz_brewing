import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper sliderCustomHeight">
        <SwiperSlide><img className='h-auto w-full' src="/1600_944_hero1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-auto w-full' src="/1600_944_hero2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-auto w-full' src="/1600_944_hero3.png" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
