import React from "react"
import { HeaderCarousel } from "../../components/HeaderCarousel"
import { GridGallery } from "../../components/GridGallery"
import { Newsletter } from "../../components/Newsletter"
import { OffersSection } from "../../components/OffersSection"
import { PaymentBanner } from "../../components/PaymentBanner"
import { Testimonials } from "../../components/Testimonials"
import { FloatButton } from "../../components/FloatButton"

import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <main>
      <HeaderCarousel />
      <PaymentBanner />
      <article>
        <GridGallery />
        <OffersSection />
        <Testimonials />
        <Newsletter />
      </article>

      <FloatButton />
    </main>
  )
}
