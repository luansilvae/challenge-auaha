import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { Home } from "./pages/Home"

import "./styles/globalStyles.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
