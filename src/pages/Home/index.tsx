import React from "react"
import { Carousel } from "../../components/Carousel"
import { GridGallery } from "../../components/GridGallery"
import { OffersSection } from "../../components/OffersSection"
import { PaymentBanner } from "../../components/PaymentBanner"
import { Testimonials } from "../../components/Testimonials"

export const Home: React.FC = () => {
  return (
    <main>
      <Carousel />
      <PaymentBanner />
      <GridGallery />
      <OffersSection />
      <Testimonials />
    </main>
  )
}
