'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, CreditCard, Shield } from 'lucide-react'
import { toast } from '@/components/ui/Toaster'
import { useRouter } from 'next/navigation'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your full name'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  address: z.string().min(10, 'Please enter your full address'),
  city:    z.string().min(2, 'Required'),
  state:   z.string().min(2, 'Required'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit PIN code'),
})

type FormData = z.infer<typeof schema>

export default function CheckoutPage() {
  const { cartPlan, clearCart } = useCart()
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setProcessing(true)
    // Razorpay demo mode simulation
    await new Promise(r => setTimeout(r, 2000))
    const order = {
      orderId: `QY${Date.now()}`,
      plan: cartPlan,
      customer: data,
      date: new Date().toISOString(),
    }
    localStorage.setItem('qyour_last_order', JSON.stringify(order))
    clearCart()
    setSuccess(true)
    toast({ type: 'success', title: 'Order placed!', message: `Order ${order.orderId} confirmed.` })
    setProcessing(false)
  }

  if (!cartPlan && !success) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20 px-4">
        <div className="text-center space-y-4">
          <p className="body-lg">No plan selected.</p>
          <Link href="/product" className="btn-primary">Browse Plans</Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20 px-4">
        <div className="card max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto">
            <CheckCircle size={40} className="text-sage-600" />
          </div>
          <h2 className="heading-2">Order Confirmed!</h2>
          <p className="body-base text-brown-700">
            Thank you for choosing QYOUR. Your supplement will be shipped within 2 business days.
            You'll receive a confirmation email shortly.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/dashboard" className="btn-primary justify-center">
              Go to Dashboard
            </Link>
            <Link href="/" className="btn-text justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-hero pt-28 pb-16 px-4">
      <div className="container-content max-w-5xl mx-auto">
        <Link href="/cart" className="btn-text mb-8 inline-flex">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            <h1 className="heading-2">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact */}
              <div className="card space-y-5">
                <h3 className="heading-4">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Full Name</label>
                    <input {...register('name')} placeholder="Rajesh Mehta" className="input-base" />
                    {errors.name && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Email</label>
                    <input {...register('email')} type="email" placeholder="rajesh@email.com" className="input-base" />
                    {errors.email && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Mobile Number</label>
                  <input {...register('phone')} placeholder="9876543210" className="input-base" />
                  {errors.phone && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Shipping */}
              <div className="card space-y-5">
                <h3 className="heading-4">Shipping Address</h3>
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Address</label>
                  <textarea {...register('address')} placeholder="Flat 12B, Sunrise Apartments, MG Road" rows={2} className="input-base resize-none" />
                  {errors.address && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.address.message}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">City</label>
                    <input {...register('city')} placeholder="Mumbai" className="input-base" />
                    {errors.city && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">State</label>
                    <input {...register('state')} placeholder="Maharashtra" className="input-base" />
                    {errors.state && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.state.message}</p>}
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">PIN Code</label>
                    <input {...register('pincode')} placeholder="400001" className="input-base" />
                    {errors.pincode && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.pincode.message}</p>}
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="card space-y-4">
                <h3 className="heading-4">Payment</h3>
                <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl2 border border-cream-200">
                  <CreditCard size={20} className="text-sand-600" />
                  <div>
                    <p className="font-inter text-sm font-medium text-brown-900">Razorpay Secure Payment</p>
                    <p className="font-inter text-xs text-brown-600">UPI, Cards, Net Banking, EMI — Demo Mode</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 body-sm text-brown-500">
                  <Shield size={14} className="text-sage-600" />
                  256-bit SSL encrypted. Your payment information is never stored.
                </div>
              </div>

              <button type="submit" disabled={processing} className="btn-primary w-full justify-center text-base py-4">
                {processing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <>Pay ₹{cartPlan?.price.toLocaleString('en-IN')} Securely</>
                )}
              </button>
            </form>
          </div>

          {/* Summary */}
          {cartPlan && (
            <div className="lg:col-span-2 space-y-4 lg:pt-16">
              <div className="card space-y-4 sticky top-24">
                <h3 className="heading-4">Order Summary</h3>
                <div className="flex items-center gap-4 pb-4 border-b border-cream-200">
                  <div className="w-12 h-12 rounded-xl bg-sand-400/30 flex items-center justify-center shrink-0">
                    <span className="font-playfair font-medium text-sand-700">Q</span>
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-brown-900">QYOUR {cartPlan.name}</p>
                    <p className="body-sm text-brown-600">₹{cartPlan.pricePerMonth}/month</p>
                  </div>
                  <p className="font-playfair text-lg font-medium text-brown-900 ml-auto">
                    ₹{cartPlan.price.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between body-sm text-brown-600">
                    <span>Shipping</span><span className="text-sage-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-inter font-semibold text-brown-900 pt-2 border-t border-cream-200">
                    <span>Total</span>
                    <span className="font-playfair text-xl">₹{cartPlan.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {['30-day money-back guarantee', 'Free shipping across India', 'Delivered in 3–5 business days'].map(f => (
                    <p key={f} className="flex items-center gap-2 body-sm text-brown-600">
                      <CheckCircle size={12} className="text-sage-600" />{f}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
