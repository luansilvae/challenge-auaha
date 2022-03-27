import React from "react"
import { A11y, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Product01 from "../../assets/product01.png"
import Product02 from "../../assets/product02.png"
import Product03 from "../../assets/product03.png"
import Product04 from "../../assets/product04.png"

import "./OffersSection.scss"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { CartIcon } from "../Icons"

export const OffersSection: React.FC = () => {
  return (
    <section className="offers">
      <h1 className="offers__title">PROMOÇÕES</h1>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerGroup={1}
        grabCursor={true}
        navigation
        className="offers__carousel"
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          980: {
            slidesPerView: 3
          },
          1300: {
            slidesPerView: 4
          }
        }}
      >
        <SwiperSlide>
          <div className="carousel__item">
            <div className="item__banner">
              <img src={Product01} alt="Produto 1" />
              <span className="item__banner__offer-tag">10% OFF</span>
              <button className="item__banner__preview-button">Espiar</button>
              <div className="item__banner__buttons">
                <button className="button button--black">Mais Vendidos</button>
                <button className="button button--gray">Frete Grátis</button>
              </div>
            </div>
            <div className="item__content">
              <span className="item__content__description">
                Anel Banhado Ouro Com Zirconia
              </span>
              <div className="item__content__price">
                <span className="price__info price__info--from">
                  De R$ 188,00
                </span>
                <strong className="price__info price__info--for">
                  Por R$ 188,00
                </strong>
                <span className="price__info price__info--installments">
                  6X R$ 31,33 Sem Juros
                </span>
              </div>

              <button className="item__content__add-to-cart">
                <CartIcon />
                <span>Adicionar à sacola</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel__item">
            <div className="item__banner">
              <img src={Product02} alt="Produto 1" />
              <button className="item__banner__preview-button">Espiar</button>
            </div>
            <div className="item__content">
              <span className="item__content__description">
                Anel Banhado Ouro Com Zirconia
              </span>
              <div className="item__content__price">
                <strong className="price__info price__info--for">
                  Por R$ 188,00
                </strong>
                <span className="price__info price__info--installments">
                  6X R$ 31,33 Sem Juros
                </span>
              </div>

              <button className="item__content__add-to-cart">
                <CartIcon />
                Adicionar à sacola
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel__item">
            <div className="item__banner">
              <img src={Product03} alt="Produto 1" />
              <button className="item__banner__preview-button">Espiar</button>
              <div className="item__banner__buttons">
                <button className="button button--black">Mais Vendidos</button>
              </div>
            </div>
            <div className="item__content">
              <span className="item__content__description">
                Anel Banhado Ouro Com Zirconia
              </span>
              <div className="item__content__price">
                <strong className="price__info price__info--for">
                  Por R$ 188,00
                </strong>
                <span className="price__info price__info--installments">
                  6X R$ 31,33 Sem Juros
                </span>
              </div>

              <button className="item__content__add-to-cart">
                <CartIcon />
                Adicionar à sacola
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel__item">
            <div className="item__banner">
              <img src={Product04} alt="Produto 1" />
              <span className="item__banner__offer-tag">10% OFF</span>
              <button className="item__banner__preview-button">Espiar</button>
              <div className="item__banner__buttons">
                <button className="button button--gray">Frete Grátis</button>
              </div>
            </div>
            <div className="item__content">
              <span className="item__content__description">
                Anel Banhado Ouro Com Zirconia
              </span>
              <div className="item__content__price">
                <span className="price__info price__info--from">
                  De R$ 188,00
                </span>
                <strong className="price__info price__info--for">
                  Por R$ 188,00
                </strong>
                <span className="price__info price__info--installments">
                  6X R$ 31,33 Sem Juros
                </span>
              </div>

              <button className="item__content__add-to-cart">
                <CartIcon />
                Adicionar à sacola
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="offers__news">
        <div className="news__card">
          <div className="card__content">
            <h2>Novidades</h2>
          </div>
        </div>
        <div className="news__card">
          <div className="card__content">
            <h2>Destaques</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
