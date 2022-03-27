import React from "react"
import { WhatsAppIcon } from "../Icons"

import "./FloatButton.scss"

export const FloatButton: React.FC = () => {
  return (
    <div className="float">
      <a
        href="https://wa.me/+5511999999999?text=Olá, gostaria de uma informação."
        target="_blank"
        rel="noreferrer"
        className="float__button"
      >
        <button className="button__whatsapp">
          <WhatsAppIcon />
        </button>
        <div className="button__text">
          <span>Precisa de ajuda? </span>
        </div>
      </a>
    </div>
  )
}
