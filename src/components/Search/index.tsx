import React from "react"
import { SearchIcon } from "../Icons"

import "./Search.scss"

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
    </div>
  )
}
