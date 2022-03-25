import React from "react"
import { Carousel } from "../../components/Carousel"
import { GridGallery } from "../../components/GridGallery"
import { PaymentBanner } from "../../components/PaymentBanner"

export const Home: React.FC = () => {
  return (
    <main>
      <Carousel />
      <PaymentBanner />
      <GridGallery />
    </main>
  )
}
