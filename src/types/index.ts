export interface Products {
  id: number
  name: string
  image: string
  labels: {
    discount: number
    freeShipping: boolean
    bestSellers: boolean
  }
  price: {
    oldValue: number
    actualValue: number
    installments: number
  }
  amount: number
}
