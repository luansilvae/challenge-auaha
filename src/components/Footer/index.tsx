import React from "react"

import "./Footer.scss"

import {
  AuahaLogo,
  CardsIcons,
  ClockIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon
} from "../../components/Icons"

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <ul className="top__contact list">
          <li className="list__title">Contato</li>
          <li>
            <ClockIcon /> Das 9:00 as 17:00
          </li>
          <li>
            <WhatsAppIcon /> (11) 98751-2918
          </li>
          <li>
            <EmailIcon />
            vendas@surijoias.com.br
          </li>
        </ul>
        <div className="links">
          <ul className="list">
            <li className="list__title">Institucional</li>
            <li>Sobre nós</li>
            <li>Trocas e Devoluções</li>
            <li>Entregas e Prazos</li>
            <li>Blog</li>
          </ul>

          <ul className="list">
            <li className="list__title">Ajuda</li>
            <li>Contato</li>
            <li>Tire suas dúvidas</li>
            <li>Garantia e Cuidados</li>
          </ul>
          <ul className="list">
            <li className="list__title">Pagamento</li>
            <li>
              <CardsIcons />
            </li>
          </ul>
        </div>
        <ul className="socials list">
          <li className="list__title">Siga-nos</li>
          <li>
            <FacebookIcon /> <InstagramIcon /> <WhatsAppIcon />
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <p>
          © SURI JOIAS. Proibida reprodução total ou parcial. Preços e estoques
          sujeitos à alteração sem aviso prévio - CNPJ: 00.680.164.0001/07 - R.
          Exemplo, 00, Bairro Exemplo, Exemplo – EX
        </p>

        <a href="#" aria-label="Home page" title="Logo Auaha">
          <AuahaLogo />
        </a>
      </div>
    </footer>
  )
}
