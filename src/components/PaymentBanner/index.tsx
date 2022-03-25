import React from "react"
import { BoxIcon, CreditCardIcon } from "../Icons"

import "./PaymentBanner.scss"

export const PaymentBanner: React.FC = () => {
  return (
    <section className="payment-banner">
      <div className="payment-banner__content">
        <div className="payment-banner__content__item">
          <BoxIcon />
          <span>
            <strong>Frete grátis</strong> nas compras acima de R$ 299,00
          </span>
        </div>
        <div className="payment-banner__content__item">
          <CreditCardIcon />
          <span>
            <strong>6 vezes sem juros </strong> no cartão de crédito
          </span>
        </div>
      </div>
    </section>
  )
}
