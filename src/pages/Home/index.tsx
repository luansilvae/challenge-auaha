import React from "react"
import { Carousel } from "../../components/Carousel"

import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <main>
      <Carousel />
      <h1>Main content</h1>
    </main>
  )
}
