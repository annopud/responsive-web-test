'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sliderStyles from './slider.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function Slider({ children }: { children: React.ReactNode[] }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={`${sliderStyles.slider_layout} mySwiper`}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <div className={`${sliderStyles.grid_layout}`}>{children}</div>
    </>
  );
}
