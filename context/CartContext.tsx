'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Plan } from '@/lib/plans'

export type { Plan }
export { PLANS } from '@/lib/plans'

type CartContextType = {
  cartPlan: Plan | null
  addToCart: (plan: Plan) => void
  clearCart: () => void
  cartCount: number
}

const CartContext = createContext<CartContextType>({
  cartPlan: null,
  addToCart: () => {},
  clearCart: () => {},
  cartCount: 0,
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartPlan, setCartPlan] = useState<Plan | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('qyour_cart')
    if (saved) setCartPlan(JSON.parse(saved))
  }, [])

  const addToCart = (plan: Plan) => {
    setCartPlan(plan)
    localStorage.setItem('qyour_cart', JSON.stringify(plan))
  }

  const clearCart = () => {
    setCartPlan(null)
    localStorage.removeItem('qyour_cart')
  }

  return (
    <CartContext.Provider value={{ cartPlan, addToCart, clearCart, cartCount: cartPlan ? 1 : 0 }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
