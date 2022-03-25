import React from "react"

import "./Newsletter.scss"

export const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <h1>RECEBA OFERTAS E NOVIDADES</h1>
      <h2>Cadastre-se e receba nossas novidades e promoções</h2>
      <form className="newsletter__form">
        <input type="text" placeholder="Seu nome" />
        <input type="text" placeholder="Seu e-mail" />

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
