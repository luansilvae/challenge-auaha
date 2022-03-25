import React from "react"

import Aneis from "../../assets/aneis.png"
import Brincos from "../../assets/brincos.png"
import Pingentes from "../../assets/pingentes.png"
import Pulseiras from "../../assets/pulseiras.png"
import Colares from "../../assets/colares.png"

import "./GridGallery.scss"

export const GridGallery: React.FC = () => {
  return (
    <section className="grid">
      <div className="grid__item">
        <img src={Aneis} alt="Anéis" />
        <span>Anéis</span>
      </div>
      <div className="grid__item">
        <img src={Brincos} alt="Brincos" />
        <span>Brincos</span>
      </div>
      <div className="grid__item">
        <img src={Pingentes} alt="Pingentes" />
        <span>Pingentes</span>
      </div>
      <div className="grid__item">
        <img src={Pulseiras} alt="Pulseiras" />
        <span>Pulseiras</span>
      </div>
      <div className="grid__item grid__item--necklaces">
        <img src={Colares} alt="Colares" />
        <span>Colares</span>
      </div>
    </section>
  )
}
