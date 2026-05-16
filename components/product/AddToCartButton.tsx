'use client'

import { useCart, type Plan } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/Toaster'

export default function AddToCartButton({ plan, dark = false }: { plan: Plan; dark?: boolean }) {
  const { addToCart } = useCart()
  const router = useRouter()

  const handle = () => {
    addToCart(plan)
    toast({ type: 'success', title: 'Added to cart!', message: `${plan.name} plan — ₹${plan.price}` })
    router.push('/cart')
  }

  return (
    <button
      onClick={handle}
      className={dark ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
    >
      Add to Cart
    </button>
  )
}
