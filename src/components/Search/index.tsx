import React from "react"
import { SearchIcon } from "../Icons"

import "./Search.scss"

import ProductImage from "../../assets/product01.png"
interface SearchProps {
  className: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={`search `.concat(className)}>
      <input
        type="text"
        name="search"
        id="search"
        className="search__input"
        placeholder="O que deseja encontrar?"
      />

      <SearchIcon />

      <div className="search__suggestion-box">
        <div className="suggestion-box__header">
          <strong>Sugestões</strong>
          <ul>
            <li>Brinco</li>
            <li>Brinco Prata</li>
            <li>Brinco Ouro</li>
          </ul>
        </div>

        <ul className="suggestion-box__products">
          <li>
            <img src={ProductImage} alt="Product image" />
            <span>Anel banhado ouro reto com zirconia</span>
          </li>

          <li>
            <img src={ProductImage} alt="Product image" />
            <span>Anel banhado ouro reto com zirconia</span>
          </li>

          <li>
            <img src={ProductImage} alt="Product image" />
            <span>Anel banhado ouro reto com zirconia</span>
          </li>

          <li>
            <img src={ProductImage} alt="Product image" />
            <span>Anel banhado ouro reto com zirconia</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
