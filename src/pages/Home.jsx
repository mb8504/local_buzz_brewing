import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import gsap from 'gsap';

export default function App() {
  const textRefs = useRef([]);
  const buttonRefs = useRef([]);

  const animateSlide = (index) => {
    gsap.fromTo(
      textRefs.current[index],
      { opacity: 0 }, 
      { opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      buttonRefs.current[index],
      { opacity: 0 }, 
      { opacity: 1, duration: 2, delay: 0.5 } // Delay to stagger the button animation
    );
    gsap.fromTo(
      buttonRefs.current[index],
      { opacity: 0 }, 
      { opacity: 1, duration: 2, delay: 0.5 } // Delay to stagger the button animation
    );
  };

  useEffect(() => {
    animateSlide(0); // Trigger animation for the first slide on initial load
  }, []);

  return (
    <>
      <Swiper 
        spaceBetween={30} 
        autoplay={{ delay: 7500, disableOnInteraction: false }} 
        pagination={{ clickable: true }} 
        modules={[Autoplay, Pagination]} 
        className="mySwiper sliderCustomHeight"
        onSlideChange={({ activeIndex }) => {
          setTimeout(() => animateSlide(activeIndex), 0);
        }}
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img className="h-auto w-full" src="/1600_944_hero1.png" alt="" />
            <div className="absolute inset-0 flex items-center justify-start pl-14">
              <div>
                <h1
                  className="text text-white text-md md:text-7xl font-bold"
                  ref={(el) => textRefs.current[0] = el}
                >
                  50% Off <br />
                  Select Pints <br />
                  Every Wednesday <br />
                </h1>
                <button
                  className="slideOneButton bg-[#145769] hover:bg-black hover:bg-opacity-35 text-white p-2 lg:p-6 tracking-wider text-sm md:text-lg lg:text-2xl mt-1 md:mt-2 lg:mt-12 font-bold"
                  ref={(el) => buttonRefs.current[0] = el}
                >
                  <a href="">View Our Beers</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-auto w-full' src="/1600_944_hero2.png" alt="" />
          <div className='absolute inset-0 flex justify-center items-center'>
            <button
              className='slideTwoButton bg-[#145769] text-white p-5 md:p-12 md:pl-4 md:pr-4 font-bold tracking-wide text-xl md:text-5xl'
              ref={(el) => buttonRefs.current[1] = el}
            >
              <a
                className='border-2 border-white px-5 md:px-10 p-2 md:p-6'
                href=""
              >
                Join Locals Only Beer Club
              </a>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <img className="h-auto w-full" src="/1600_944_hero3.png" alt="" />
            <div className="absolute inset-0 flex items-center justify-start pl-14">
              <div>
                <h1
                  className="text text-white sm:text-l md:text-7xl font-bold"
                  ref={(el) => textRefs.current[2] = el}
                >
                  Beer news <br />
                  emailed <br />
                  every Friday!<br />
                </h1>
                <button
                  className="slideOneButton bg-[#145769] hover:bg-black hover:bg-opacity-35 text-white p-2 lg:p-6 tracking-wider text-sm md:text-lg lg:text-2xl mt-1 md:mt-2 lg:mt-12 font-bold"
                  ref={(el) => buttonRefs.current[2] = el}
                >
                  <a href="">Add me to the list!</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
