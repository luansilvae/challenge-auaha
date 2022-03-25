import React from "react"

import "./Nav.scss"

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
    </nav>
  )
}
