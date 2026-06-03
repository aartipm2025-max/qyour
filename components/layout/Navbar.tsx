'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'How It Works',   href: '/how-it-works' },
  { label: 'Product',        href: '/product' },
  { label: 'Clinical Study', href: '/clinical-study' },
  { label: 'Blog',           href: '/blog' },
]

export default function Navbar() {
  const { cartCount } = useCart()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-soft border-b border-cream-200'
          : 'bg-white/80 backdrop-blur-sm',
      )}
    >
      <div className="container-content">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">

          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl font-medium text-black tracking-wider shrink-0">
            QYOUR
          </Link>

          {/* Center nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-inter text-sm font-medium text-neutral-700 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Book Doctor — outlined, desktop only */}
            <Link
              href="/doctor-booking"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-pill border-2 border-sand-600 text-sand-700 font-inter text-xs font-medium tracking-widest uppercase transition-all duration-200 hover:bg-cream-100 hover:border-sand-700 whitespace-nowrap"
            >
              Free Consultation
            </Link>

            {/* Take Quiz — black filled */}
            <Link href="/quiz" className="hidden md:inline-flex btn-dark py-2.5 px-5 text-xs whitespace-nowrap">
              Take Quiz
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-black hover:text-neutral-600 transition-colors">
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-black text-white text-[10px] font-medium flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-black hover:text-neutral-600 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-cream-200 px-4 pb-6 pt-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-inter text-base text-black hover:text-neutral-600 border-b border-cream-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/doctor-booking"
                onClick={() => setOpen(false)}
                className="w-full text-center px-6 py-3 rounded-pill border-2 border-sand-600 text-sand-700 font-inter text-sm font-medium tracking-widest uppercase hover:bg-cream-100 transition-colors"
              >
                Free Consultation
              </Link>
              <Link href="/quiz" className="btn-dark w-full justify-center" onClick={() => setOpen(false)}>
                Take Free AI Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
