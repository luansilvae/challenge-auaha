import React, { useCallback, useState } from "react"
import "./Header.scss"

import LogoAuaha from "../../assets/logo.svg"

import {
  PhoneIcon,
  UserIcon,
  CartIcon,
  CloseIcon,
  MenuIcon,
  RemoveIcon
} from "../Icons"
import { Search } from "../Search"
import { Nav } from "./Nav"
import { useCart } from "../../hooks/useCart"
import { formattedCurrency } from "../../utils/formattedCurrency"

export const Header: React.FC = () => {
  const [activeMenu, setaActiveMenu] = useState<boolean>(false)
  const [openCart, setOpenCart] = useState<boolean>(false)

  const handleActiveMenu = useCallback(
    () => setaActiveMenu(state => !state),
    []
  )

  const handleOpenCart = useCallback(() => setOpenCart(state => !state), [])

  const {
    cart,
    isCartEmpty,
    ammountProducts,
    totalProducts,
    clearCart,
    handleRemoveFromCart
  } = useCart()

  return (
    <header className="header">
      <div className="header__top-bar">
        <Search className="search--desktop" />

        <a href="#" className="logo">
          <img src={LogoAuaha} alt="Logo Auaha" className="logo__img" />
        </a>

        <div className="header-menu">
          <ul className="header-menu__desktop">
            <li className="menu-item menu-item--user">
              <UserIcon /> Minha conta
              <ul className="menu-item__dropdown">
                <li className="menu-item__dropdown__list">
                  <a href="#">Entrar</a>
                </li>
                <li className="menu-item__dropdown__list">
                  <a href="#">Cadastrar</a>
                </li>
                <ul className="menu-item__dropdown__account">
                  <li>
                    <a href="#">Meus pedidos</a>
                  </li>
                  <li>
                    <a href="#">Minha conta</a>
                  </li>
                  <li>
                    <a href="#">Sair</a>
                  </li>
                </ul>
              </ul>
            </li>
            <li className="menu-item">
              <PhoneIcon /> (11) 999899-8888
            </li>
          </ul>

          <button className="cart-button" onClick={handleOpenCart}>
            <CartIcon />
            <span className="cart-button__counter">{ammountProducts}</span>
          </button>

          <div
            className={`cart-section cart-section--${
              openCart ? "active" : "hidden"
            }`}
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

          <button className="toggle-menu-button" onClick={handleActiveMenu}>
            {activeMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {activeMenu && (
          <div className="menu-mobile">
            <ul className="header-menu__mobile">
              <li className="menu-item menu-item--user">
                <UserIcon /> Minha conta
                <ul className="menu-item__dropdown">
                  <li className="menu-item__dropdown__list">
                    <a href="#">Entrar</a>
                  </li>
                  <li className="menu-item__dropdown__list">
                    <a href="#">Cadastrar</a>
                  </li>
                  <ul className="menu-item__dropdown__account">
                    <li>
                      <a href="#">Meus pedidos</a>
                    </li>
                    <li>
                      <a href="#">Minha conta</a>
                    </li>
                    <li>
                      <a href="#">Sair</a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="menu-item">
                <PhoneIcon /> (11) 999899-8888
              </li>

              <Search className="search--mobile" />
            </ul>
          </div>
        )}
      </div>

      <Nav />
    </header>
  )
}
