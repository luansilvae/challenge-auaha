import React from "react"

import "./Nav.scss"

import ProductImage from "../../../assets/product-image.png"

export const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Anéis
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Brincos
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Colares
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Pingentes
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Pulseiras
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Kit
          </a>
        </li>
      </ul>

      <div className="dropdown-nav">
        <div className="dropdown-nav__list">
          <ul className="list__product">
            <li>
              <strong>Folheado</strong>
            </li>
            <li>
              <a href="#">ANEL</a>
            </li>
            <li>
              <a href="#">SOLITÁRIA</a>
            </li>
            <li>
              <a href="#">CRISTAL</a>
            </li>
            <li>
              <a href="#">PÉROLA</a>
            </li>
            <li>
              <a href="#">ZIRCÔNIA</a>
            </li>
          </ul>

          <ul className="list__product">
            <li>
              <strong>Prata</strong>
            </li>
            <li>
              <a href="#">ANEL</a>
            </li>
            <li>
              <a href="#">SOLITÁRIA</a>
            </li>
            <li>
              <a href="#">CRISTAL</a>
            </li>
            <li>
              <a href="#">PÉROLA</a>
            </li>
            <li>
              <a href="#">ZIRCÔNIA</a>
            </li>
          </ul>

          <ul className="list__product">
            <li>
              <strong>Ouro</strong>
            </li>
            <li>
              <a href="#">ANEL</a>
            </li>
            <li>
              <a href="#">SOLITÁRIA</a>
            </li>
            <li>
              <a href="#">CRISTAL</a>
            </li>
            <li>
              <a href="#">PÉROLA</a>
            </li>
            <li>
              <a href="#">ZIRCÔNIA</a>
            </li>
          </ul>
        </div>

        <div className="dropdown-nav__img">
          <img src={ProductImage} alt="Product Image" />
        </div>
      </div>
    </nav>
  )
}
