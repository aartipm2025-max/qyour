'use client'

import { useCart, PLANS } from '@/context/CartContext'
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import Link from 'next/link'
import { ShoppingCart, ArrowRight, CheckCircle, Trash2 } from 'lucide-react'

function CartContent() {
  const { cartPlan, addToCart, clearCart } = useCart()
  const searchParams = useSearchParams()

  useEffect(() => {
    const planId = searchParams.get('plan')
    if (planId) {
      const plan = PLANS.find(p => p.id === planId)
      if (plan) addToCart(plan)
    }
  }, [searchParams, addToCart])

  if (!cartPlan) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20 px-4">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mx-auto">
            <ShoppingCart size={36} className="text-taupe-600" />
          </div>
          <h2 className="heading-2">Your cart is empty</h2>
          <p className="body-base text-brown-600">Take our free AI quiz to find the right plan for you.</p>
          <Link href="/quiz" className="btn-primary mx-auto">
            Take Free Quiz <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  const savings = cartPlan.id === 'quarterly'
    ? 300
    : cartPlan.id === 'annual'
    ? 2089
    : 0

  return (
    <div className="min-h-screen bg-gradient-hero pt-28 pb-16 px-4">
      <div className="container-content max-w-3xl mx-auto space-y-8">
        <h1 className="heading-2">Your Cart</h1>

        {/* Cart item */}
        <div className="card flex items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl2 bg-sand-400/30 flex items-center justify-center shrink-0">
              <span className="font-playfair text-lg font-medium text-sand-700">Q</span>
            </div>
            <div className="space-y-1">
              <p className="font-playfair text-lg font-medium text-brown-900">
                QYOUR — {cartPlan.name} Plan
              </p>
              <p className="body-sm text-brown-600">{cartPlan.period} · ₹{cartPlan.pricePerMonth}/month</p>
              {savings > 0 && (
                <p className="font-inter text-xs font-semibold text-sage-600">You save ₹{savings}</p>
              )}
            </div>
          </div>
          <div className="text-right space-y-2">
            <p className="font-playfair text-2xl font-medium text-brown-900">
              ₹{cartPlan.price.toLocaleString('en-IN')}
            </p>
            <button onClick={clearCart} className="btn-text text-sm text-coral-600 hover:text-coral-600 flex items-center gap-1">
              <Trash2 size={14} /> Remove
            </button>
          </div>
        </div>

        {/* Other plans upsell */}
        <div className="space-y-3">
          <p className="font-inter text-sm font-medium text-brown-600">Or switch to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PLANS.filter(p => p.id !== cartPlan.id).map(p => (
              <button
                key={p.id}
                onClick={() => addToCart(p)}
                className="card py-4 px-5 text-left hover:border-sand-600 border-2 border-transparent transition-all"
              >
                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">{p.name}</p>
                <p className="font-playfair text-xl font-medium text-brown-900 mt-1">₹{p.price.toLocaleString('en-IN')}</p>
                <p className="body-sm text-brown-500">₹{p.pricePerMonth}/mo</p>
              </button>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div className="card space-y-4">
          <h3 className="heading-4">Order Summary</h3>
          <div className="space-y-2 border-b border-cream-200 pb-4">
            <div className="flex justify-between body-sm">
              <span className="text-brown-600">QYOUR {cartPlan.name}</span>
              <span className="text-brown-800 font-medium">₹{cartPlan.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between body-sm">
              <span className="text-brown-600">Shipping</span>
              <span className="text-sage-600 font-medium">Free</span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between body-sm">
                <span className="text-brown-600">Discount</span>
                <span className="text-sage-600 font-medium">−₹{savings}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between font-inter font-semibold text-brown-900">
            <span>Total</span>
            <span className="font-playfair text-xl">₹{cartPlan.price.toLocaleString('en-IN')}</span>
          </div>
          <Link href="/checkout" className="btn-primary w-full justify-center">
            Proceed to Checkout <ArrowRight size={16} />
          </Link>
          <div className="flex items-center justify-center gap-2 body-sm text-brown-500">
            <CheckCircle size={14} className="text-sage-600" />
            30-day money-back guarantee
          </div>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap justify-center gap-6">
          {['Secure Payment', 'Free Shipping', '30-Day Returns', 'GMP Certified'].map(t => (
            <span key={t} className="font-inter text-xs font-medium text-taupe-600 flex items-center gap-1.5">
              <CheckCircle size={12} className="text-sage-600" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  return (
    <Suspense>
      <CartContent />
    </Suspense>
  )
}
