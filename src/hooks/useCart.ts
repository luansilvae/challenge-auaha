import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const useCart = () => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    clearCart,
    isCartEmpty,
    ammountProducts,
    totalProducts
  } = useContext(CartContext)

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    clearCart,
    isCartEmpty,
    ammountProducts,
    totalProducts
  }
}
