import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Hazy IPA</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Pilsner</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>West Coast IPA</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Oatmeal Stout</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Leamonade Shandy</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Lager</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Seasonal Ale</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>New England IPA</h3></div>
        </SwiperSlide>
        <SwiperSlide><img src="/33_carousel_beer.png" alt="" /><div className='absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-slate-700/75 z-10 flex items-center justify-center'><h3 className='text-white py-6 px-3 mx-auto text-xl'>Double Dry Hopped IPA</h3></div>
        </SwiperSlide>
      </Swiper>
      <div className='flex justify-center mt-40'>
        <a href="/beers"><button className='bg-slate-100 text-[#145769] p-4 text-xl rounded-3xl hover:bg-[#145769] hover:text-white'>SEE OUR BEERS</button></a>
      </div>
    </section>
  );
}
