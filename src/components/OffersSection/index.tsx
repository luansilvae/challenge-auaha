import React from "react"
import { A11y, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "./OffersSection.scss"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { CartIcon } from "../Icons"
import { useProducts } from "../../hooks/useProducts"
import { formattedCurrency } from "../../utils/formattedCurrency"

export const OffersSection: React.FC = () => {
  const { products } = useProducts()

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
        {products &&
          products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="carousel__item">
                <div className="item__banner">
                  <img src={product.image} alt="Produto 1" />

                  {product.labels.discount && (
                    <span className="item__banner__offer-tag">
                      {product.labels.discount}% OFF
                    </span>
                  )}

                  <button className="item__banner__preview-button">
                    Espiar
                  </button>
                  <div className="item__banner__buttons">
                    {product.labels.bestSellers && (
                      <button className="button button--black">
                        Mais Vendidos
                      </button>
                    )}

                    {product.labels.freeShipping && (
                      <button className="button button--gray">
                        Frete Grátis
                      </button>
                    )}
                  </div>
                </div>
                <div className="item__content">
                  <span className="item__content__description">
                    {product.name}
                  </span>
                  <div className="item__content__price">
                    {product.price.oldValue && (
                      <span className="price__info price__info--from">
                        De {formattedCurrency(product.price.oldValue)}
                      </span>
                    )}

                    <strong className="price__info price__info--for">
                      Por {formattedCurrency(product.price.actualValue)}
                    </strong>
                    <span className="price__info price__info--installments">
                      {`${product.price.installments}X ${formattedCurrency(
                        product.price.actualValue / product.price.installments
                      )} Sem Juros`}
                    </span>
                  </div>

                  <button className="item__content__add-to-cart">
                    <CartIcon />
                    <span>Adicionar à sacola</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
