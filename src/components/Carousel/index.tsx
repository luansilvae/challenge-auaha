import React from "react"
import { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "./Carousel.scss"

import CarouselBackground from "../../assets/carousel-background.png"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

export const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      navigation
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <div className="swiper-img">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-img">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
