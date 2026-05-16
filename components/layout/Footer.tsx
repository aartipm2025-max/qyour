import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'How It Works',   href: '/how-it-works' },
    { label: 'Ingredients',    href: '/product#ingredients' },
    { label: 'Clinical Study', href: '/clinical-study' },
    { label: 'Pricing',        href: '/product#pricing' },
  ],
  Support: [
    { label: 'Book Free Consultation', href: '/doctor-booking' },
    { label: 'FAQ',                    href: '/faq' },
    { label: 'Contact Us',             href: '/contact' },
    { label: 'Blog',                   href: '/blog' },
  ],
  Company: [
    { label: 'About QYOUR',    href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use',   href: '/terms' },
    { label: 'Refund Policy',  href: '/refund' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-cream-100">
      <div className="container-content px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-playfair text-2xl font-medium text-sand-500 tracking-wider">QYOUR</p>
            <p className="font-inter text-sm text-cream-200 leading-relaxed max-w-xs">
              Clinically proven natural supplement for newly diagnosed Type 2 diabetics.
              Take control before medications become necessary.
            </p>
            <p className="font-inter text-xs font-medium tracking-widest uppercase text-sand-500">
              Clinically Proven. 100% Natural.
            </p>
            <div className="space-y-2 pt-2">
              <a href="mailto:hello@qyour.in" className="flex items-center gap-2 text-sm text-cream-200 hover:text-sand-500 transition-colors">
                <Mail size={14} /> hello@qyour.in
              </a>
              <a href="tel:+918000000000" className="flex items-center gap-2 text-sm text-cream-200 hover:text-sand-500 transition-colors">
                <Phone size={14} /> +91 80000 00000
              </a>
              <p className="flex items-center gap-2 text-sm text-cream-200">
                <MapPin size={14} /> Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-inter text-xs font-semibold tracking-widest uppercase text-sand-500 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-inter text-sm text-cream-200 hover:text-sand-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium tracking-widest uppercase text-taupe-500">
            <span>AYUSH Registered</span>
            <span>GMP Certified</span>
            <span>FSSAI Licensed</span>
            <span>50+ Doctors Approved</span>
            <span>30-Day Money Back</span>
          </div>
          <p className="font-inter text-xs text-taupe-600 text-center md:text-right">
            © {new Date().getFullYear()} QYOUR. All rights reserved.
          </p>
        </div>

        <p className="mt-6 font-inter text-xs text-taupe-600 leading-relaxed max-w-2xl">
          Disclaimer: QYOUR is a dietary supplement, not a medicine. Results may vary.
          Always consult your physician before starting any supplement, especially if you are on medication.
          Not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </footer>
  )
}
