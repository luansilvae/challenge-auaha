import { createContext, useCallback, useMemo, useState } from "react"
import { useProducts } from "../../hooks/useProducts"
import { Products } from "../../types"
import { CartContextData, CartProps } from "./types"

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProps) {
  const { products } = useProducts()

  const [cart, setCart] = useState<any[]>([])

  const handleAddToCart = useCallback(
    (productId: number) => {
      const productAdded = products.find(product => product.id === productId)

      setCart((prev: Products[]) => {
        const isProductInCart = prev.find(product => product.id === productId)

        if (isProductInCart) {
          return prev.map(product =>
            product.id === productId
              ? { ...product, amount: product.amount + 1 }
              : product
          )
        }
        return [...prev, { ...productAdded, amount: 1 }]
      })
    },
    [products]
  )

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCart((prev: Products[]) =>
      prev.reduce((ack, item) => {
        if (item.id === productId) {
          if (item.amount === 1) return ack
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [] as Products[])
    )
  }, [])

  // const handleRemoveFromCart = useCallback(
  //   (productId: number) => {
  //     const filteredCart = cart.filter(
  //       cartProduct => cart.indexOf(cartProduct) !== productId
  //     )

  //     setCart(filteredCart)
  //   },
  //   [cart]
  // )

  const isCartEmpty = useMemo(() => cart.length === 0, [cart.length])

  const ammountProducts = useMemo(
    () => cart.reduce((ack: number, item) => ack + item.amount, 0),
    [cart]
  )

  const totalProducts = useMemo(
    () =>
      cart.reduce(
        (ack: number, item) => ack + item.amount * item.price.actualValue,
        0
      ),
    [cart]
  )

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cart,
        handleRemoveFromCart,
        clearCart,
        isCartEmpty,
        ammountProducts,
        totalProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
