import Link from 'next/link'
import { CheckCircle, ArrowRight, Leaf, Shield, Award, Star } from 'lucide-react'
import { PLANS } from '@/lib/plans'
import AddToCartButton from '@/components/product/AddToCartButton'

const ingredients = [
  {
    name: 'Berberine HCl',
    dose: '500mg',
    benefit: 'Activates AMPK enzyme — the "metabolic master switch" — improving glucose uptake in cells. Comparable to Metformin in multiple studies.',
  },
  {
    name: 'Bitter Melon Extract',
    dose: '200mg',
    benefit: 'Contains polypeptide-p, an insulin-like compound. Reduces glucose absorption in the intestines and stimulates insulin secretion.',
  },
  {
    name: 'Gymnema Sylvestre',
    dose: '400mg',
    benefit: '"Sugar destroyer" in Sanskrit. Reduces sugar absorption, improves insulin function, and over time reduces sugar cravings.',
  },
  {
    name: 'Fenugreek Seed',
    dose: '500mg',
    benefit: 'High soluble fibre slows glucose absorption. Contains compounds that stimulate insulin release from the pancreas.',
  },
  {
    name: 'Cinnamon Extract',
    dose: '250mg',
    benefit: 'Improves insulin sensitivity and lowers fasting blood glucose. Anti-inflammatory properties support overall metabolic health.',
  },
  {
    name: 'Chromium Picolinate',
    dose: '200mcg',
    benefit: "Essential mineral for insulin action. Enhances insulin's ability to move glucose into cells, reducing insulin resistance.",
  },
]

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="badge-dark">100% Natural</span>
              <h1 className="heading-1">QYOUR Natural Diabetes Supplement</h1>
              <p className="body-lg">
                A scientifically formulated blend of 6 clinically-studied natural compounds
                that work synergistically to reduce blood sugar and improve insulin sensitivity.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AYUSH Certified', 'GMP Manufactured', 'No Side Effects', '30-Day Guarantee'].map(b => (
                  <span key={b} className="badge-success"><CheckCircle size={10} />{b}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="#pricing" className="btn-primary">
                  Order Now <ArrowRight size={16} />
                </Link>
                <Link href="/clinical-study" className="btn-text">
                  See Clinical Study →
                </Link>
              </div>
            </div>
            {/* Product visual placeholder */}
            <div className="bg-cream-100 rounded-xl4 aspect-square flex items-center justify-center shadow-card">
              <div className="text-center space-y-3">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <Leaf size={40} className="text-brown-900" />
                </div>
                <p className="font-playfair text-xl font-medium text-brown-800">QYOUR</p>
                <p className="font-inter text-sm text-brown-600">60 Capsules · 30-day supply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="section bg-white">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">What's Inside QYOUR</h2>
            <p className="body-lg max-w-xl mx-auto">
              Every ingredient is chosen for clinical evidence and traditional validation.
              No fillers, no artificial colours, no proprietary blends.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map(ing => (
              <div key={ing.name} className="card-hover space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="heading-4">{ing.name}</h3>
                    <span className="badge-brand mt-1">{ing.dose} per serving</span>
                  </div>
                  <Leaf size={20} className="text-sage-600 mt-1 shrink-0" />
                </div>
                <p className="body-sm text-brown-700 leading-relaxed">{ing.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to take */}
      <section className="section bg-cream-100">
        <div className="container-content max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <h2 className="heading-2">How to Take QYOUR</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { step: '01', title: 'Morning Dose', desc: '2 capsules with breakfast. Take with a full glass of water.', time: '8:00 AM' },
              { step: '02', title: 'Evening Dose', desc: '2 capsules with dinner. Consistent timing improves results.', time: '7:00 PM' },
              { step: '03', title: 'Track Progress', desc: 'Log your glucose readings in the dashboard weekly.', time: 'Weekly' },
            ].map(item => (
              <div key={item.step} className="card space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <span className="font-playfair text-lg font-medium text-brown-900">{item.step}</span>
                </div>
                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">{item.time}</p>
                <h3 className="heading-4">{item.title}</h3>
                <p className="body-sm text-brown-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-white">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Choose Your Plan</h2>
            <p className="body-lg max-w-xl mx-auto">
              We recommend the 3-month plan — the minimum period for measurable HbA1c improvement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PLANS.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-xl3 p-8 flex flex-col gap-5 transition-all duration-300 ${
                  plan.id === 'quarterly'
                    ? 'bg-white border-2 border-black shadow-lg scale-[1.03]'
                    : 'bg-white shadow-card border border-gray-100 hover:shadow-card-hover'
                }`}
              >
                {plan.id === 'quarterly' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-black rounded-t-xl3" />
                )}
                {plan.id === 'quarterly' && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge-dark text-[10px] whitespace-nowrap px-4">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className="font-inter text-xs font-semibold tracking-widest uppercase mb-1 text-taupe-600">
                    {plan.name}
                  </p>
                  <p className={`font-playfair text-4xl font-medium ${plan.id === 'quarterly' ? 'text-brown-900' : 'text-brown-900'}`}>
                    ₹{plan.price.toLocaleString('en-IN')}
                  </p>
                  <p className="font-inter text-sm mt-0.5 text-brown-600">
                    /{plan.period} · ₹{plan.pricePerMonth}/mo
                  </p>
                </div>
                <ul className="space-y-2 flex-1">
                  {['30-day supply', 'Free shipping', '30-day money back', ...(plan.id !== 'monthly' ? ['Free doctor consult'] : [])].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-inter text-brown-800">
                      <CheckCircle size={14} className="text-sage-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <AddToCartButton plan={plan} dark={plan.id === 'quarterly'} />
              </div>
            ))}
          </div>
          {/* Reassurance row — immediately below pricing (Proximity law) */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { text: '30-day money-back guarantee' },
              { text: 'Free shipping across India' },
              { text: 'Delivered in 3–5 business days' },
            ].map(({ text }) => (
              <span key={text} className="font-inter text-xs text-brown-500 flex items-center gap-1.5">
                <CheckCircle size={13} className="text-sage-600" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section bg-cream-100">
        <div className="container-content max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, title: '30-Day Money Back', desc: 'Full refund if you\'re not satisfied, no questions asked.' },
              { icon: Award, title: 'GMP Certified', desc: 'Manufactured in a WHO-GMP certified facility in India.' },
              { icon: Star, title: '4.8★ Patient Rating', desc: '200+ verified patients, independently reviewed.' },
            ].map(item => (
              <div key={item.title} className="card text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <item.icon size={22} className="text-brown-900" />
                </div>
                <h3 className="heading-4">{item.title}</h3>
                <p className="body-sm text-brown-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
