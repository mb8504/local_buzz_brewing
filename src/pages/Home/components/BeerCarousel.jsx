import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function BeerCarousel() {
  return (
    <section className='bg-navBlack pt-32 pb-32'>
      <div className='mb-12'>
        <p className='siteContainer text-white text-4xl mb-20'>Featured Beers</p>
      </div>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /></SwiperSlide>
      </Swiper>
      <div className='flex justify-center mt-40'>
        <button className='bg-slate-100 text-[#145769] p-4 text-xl rounded-3xl hover:bg-[#145769] hover:text-white'>SEE OUR BEERS</button>
      </div>
    </section>
  );
}
