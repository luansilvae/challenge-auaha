import React, { ChangeEvent, useCallback, useEffect, useState } from "react"
import { SearchIcon } from "../Icons"
import { useProducts } from "../../hooks/useProducts"
import { Products } from "../../types"

import "./Search.scss"
interface SearchProps {
  className: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  const { products } = useProducts()
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([])

  useEffect(() => setFilteredProducts(products), [products])

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const filteredProducts = products.filter(product =>
        product.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      )

      setFilteredProducts(filteredProducts)
    },
    [products]
  )

  return (
    <div className={`search `.concat(className)}>
      <input
        type="text"
        name="search"
        id="search"
        className="search__input"
        placeholder="O que deseja encontrar?"
        onChange={handleSearch}
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
          {filteredProducts.length <= 0 && (
            <div className="products__not-found">
              <span> Nenhum produto encontrado.</span>
            </div>
          )}

          {filteredProducts.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
