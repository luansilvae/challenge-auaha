import React from "react"

import "./Testimonials.scss"

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">O QUE OS CLIENTES DIZEM</h2>

      <div className="testimonials__grid">
        <div className="grid__card">
          <strong>Nome do Cliente</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            eros, interdum in purus vitae, semper porttitor ligula. Sed egestas
            odio ut pretium aliquet.
          </p>
          <span>12/10/2020</span>
        </div>
        <div className="grid__card">
          <strong>Nome do Cliente</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            eros, interdum in purus vitae, semper porttitor ligula. Sed egestas
            odio ut pretium aliquet.
          </p>
          <span>12/10/2020</span>
        </div>
        <div className="grid__card">
          <strong>Nome do Cliente</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            eros, interdum in purus vitae, semper porttitor ligula. Sed egestas
            odio ut pretium aliquet.
          </p>
          <span>12/10/2020</span>
        </div>
      </div>
    </section>
  )
}
