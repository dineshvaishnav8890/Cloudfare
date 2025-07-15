import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Hero1 from '../assets/hero/Hero1.jpg';
import Hero2 from '../assets/hero/Hero2.jpg';
import Hero3 from '../assets/hero/Hero3.jpg';

const Hero = () => {
  const images = [Hero1, Hero2, Hero3];

  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Text removed */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

