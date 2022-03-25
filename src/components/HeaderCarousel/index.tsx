import React from "react"
import { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "./HeaderCarousel.scss"

import CarouselBackground from "../../assets/carousel-background.png"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

export const HeaderCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      navigation
      loop={true}
      slidesPerGroup={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      className="header-carousel"
    >
      <SwiperSlide>
        <div className="header-carousel__slide">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="header-carousel__slide">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="header-carousel__slide">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="header-carousel__slide">
          <img src={CarouselBackground} alt="Carousel image" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
