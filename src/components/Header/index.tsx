import React, { useCallback, useState } from "react"
import "./Header.scss"

import LogoAuaha from "../../assets/logo.svg"

import { PhoneIcon, UserIcon, CartIcon, CloseIcon, MenuIcon } from "../Icons"
import { Search } from "../Search"
import { Nav } from "./Nav"
import { useCart } from "../../hooks/useCart"
import { Cart } from "./Cart"

export const Header: React.FC = () => {
  const [activeMenu, setaActiveMenu] = useState<boolean>(false)
  const [openCart, setOpenCart] = useState<boolean>(false)

  const handleActiveMenu = useCallback(
    () => setaActiveMenu(state => !state),
    []
  )

  const handleOpenCart = useCallback(() => setOpenCart(state => !state), [])

  const { amountProducts } = useCart()

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
            <span className="cart-button__counter">{amountProducts}</span>
          </button>

          <Cart openCart={openCart} />

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
