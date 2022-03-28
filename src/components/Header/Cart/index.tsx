import React from "react"
import { useCart } from "../../../hooks/useCart"
import { formattedCurrency } from "../../../utils/formattedCurrency"
import { RemoveIcon } from "../../Icons"

import "./Cart.scss"

type Props = {
  openCart: boolean
}

export const Cart: React.FC<Props> = ({ openCart }) => {
  const { cart, isCartEmpty, totalProducts, clearCart, handleRemoveFromCart } =
    useCart()

  return (
    <div
      className={`cart-section cart-section--${openCart ? "active" : "hidden"}`}
    >
      {isCartEmpty ? (
        <strong>Sua sacola está vazia.</strong>
      ) : (
        <div className="cart-section__content">
          <ul className="content__list">
            {cart.map((cartProduct, index) => (
              <li key={index} className="list__product">
                <img src={cartProduct.image} alt={cartProduct.name} />
                <div className="product__info">
                  <h4>{cartProduct.name}</h4>

                  <span>
                    Qtd. {cartProduct.amount}
                    <strong>
                      {formattedCurrency(
                        cartProduct.amount * cartProduct.price.actualValue
                      )}
                    </strong>
                  </span>
                </div>
                <button
                  className="product__button"
                  onClick={() => handleRemoveFromCart(cartProduct.id)}
                >
                  <RemoveIcon />
                </button>
              </li>
            ))}
          </ul>
          <div className="content__submit">
            <div className="submit-header">
              <span>
                Subtotal
                <strong>{formattedCurrency(totalProducts)}</strong>
              </span>

              <button onClick={clearCart}>Limpar sacola</button>
            </div>

            <button>Finalizar compra</button>
          </div>
        </div>
      )}
    </div>
  )
}
