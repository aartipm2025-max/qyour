import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, TrendingDown, Users, Award, Shield, Clock, Leaf } from 'lucide-react'

const stats = [
  { value: '0.9%',  label: 'Avg HbA1c Reduction' },
  { value: '50+',   label: 'Clinical Trial Patients' },
  { value: '90',    label: 'Days to Full Results' },
  { value: '4.8★',  label: 'Patient Rating' },
]

const features = [
  {
    icon: TrendingDown,
    title: 'Clinically Proven Results',
    description: 'Our 50-patient trial demonstrated an average 0.9% HbA1c reduction in 90 days — moving participants out of the diabetic range.',
  },
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    description: 'Carefully selected herbs and botanicals — Berberine, Bitter Melon, Gymnema Sylvestre — with centuries of traditional use and modern validation.',
  },
  {
    icon: Users,
    title: 'AI-Personalised Dosage',
    description: 'Our 10-question health quiz analyses your profile and tailors your dosage, timeline, and dietary recommendations specifically for you.',
  },
  {
    icon: Award,
    title: 'Doctor Approved',
    description: 'Reviewed and recommended by 50+ Indian physicians specialising in metabolic health and integrative medicine.',
  },
]

const testimonials = [
  {
    name: 'Rajesh Mehta',
    location: 'Mumbai',
    age: 44,
    hba1cBefore: 7.2,
    hba1cAfter: 6.1,
    quote: 'I was terrified when my doctor said Type 2 diabetes. QYOUR gave me a natural path forward. My HbA1c dropped 1.1% in just 3 months without any medication.',
    months: 3,
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    age: 38,
    hba1cBefore: 6.8,
    hba1cAfter: 5.9,
    quote: 'As a working mother, I needed something simple and effective. QYOUR fit perfectly into my routine. The AI quiz even suggested recipes my family loves.',
    months: 4,
  },
  {
    name: 'Suresh Nair',
    location: 'Bangalore',
    age: 51,
    hba1cBefore: 7.5,
    hba1cAfter: 6.4,
    quote: 'My doctor was impressed at my 3-month checkup. The combination of QYOUR and the dietary guidance made a remarkable difference.',
    months: 3,
  },
]

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 699,
    period: 'month',
    perMonth: 699,
    popular: false,
    cta: 'Start Monthly',
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: 1799,
    period: '3 months',
    perMonth: 600,
    popular: true,
    savings: 'Save ₹300',
    cta: 'Best Value',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: 6299,
    period: '12 months',
    perMonth: 525,
    popular: false,
    savings: 'Save ₹2,089',
    cta: 'Best Price',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center bg-gradient-hero pt-20 pb-16">
        <div className="container-content section">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="badge-success">
              <CheckCircle size={12} />
              Clinically Proven
            </span>

            <h1 className="heading-1 text-balance">
              Just Diagnosed with Diabetes?
            </h1>

            <p className="font-playfair text-h3-sm md:text-h3 font-medium text-brown-700 text-balance leading-snug">
              Take Control Naturally — Before<br className="hidden sm:block" /> Medications Become Necessary
            </p>

            <p className="body-lg max-w-xl mx-auto text-center text-balance">
              Clinically proven to reduce HbA1c by 0.8–1.2% in newly diagnosed diabetics.
              100% natural. Doctor-approved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/quiz" className="btn-dark">
                Take Free AI Assessment
                <ArrowRight size={16} />
              </Link>
              <Link href="/doctor-booking" className="btn-secondary">
                Book Free Consultation
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="text-sand-600 fill-sand-600" />
                ))}
              </div>
              <span className="font-inter text-sm font-medium text-brown-600">
                4.8/5 from 200+ verified patients
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.value} className="card text-center py-6 px-4">
                <p className="font-playfair text-3xl font-medium text-sand-600">{s.value}</p>
                <p className="font-inter text-xs font-medium text-brown-600 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section className="bg-cream-100 border-y border-cream-200 py-5">
        <div className="container-content px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {['AYUSH Registered', 'GMP Certified', 'FSSAI Licensed', '50+ Doctors Approved', '30-Day Money Back'].map(t => (
              <span key={t} className="font-inter text-xs font-medium tracking-widest uppercase text-taupe-600 flex items-center gap-1.5">
                <Shield size={12} className="text-sand-600" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="section bg-cream-50">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Why QYOUR Works</h2>
            <p className="body-lg max-w-xl mx-auto">
              A science-backed approach that addresses the root cause, not just the symptoms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(f => (
              <div key={f.title} className="card-hover flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-sand-400/50 flex items-center justify-center shrink-0">
                  <f.icon size={24} className="text-sand-700" />
                </div>
                <div>
                  <h3 className="heading-4 mb-2">{f.title}</h3>
                  <p className="body-base text-brown-700">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (3 steps) ────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Your Path to Better Health</h2>
            <p className="body-lg max-w-xl mx-auto">Three simple steps to take control of your blood sugar naturally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Take the AI Quiz',
                desc: 'Answer 10 questions about your health. Our AI personalises your dosage, timeline, and diet plan.',
                href: '/quiz',
              },
              {
                step: '02',
                title: 'Start Your Regimen',
                desc: 'Receive QYOUR with a personalised programme. Take twice daily with meals for best results.',
                href: '/product',
              },
              {
                step: '03',
                title: 'Track Your Progress',
                desc: 'Log your glucose readings in the dashboard and watch your HbA1c improve month over month.',
                href: '/dashboard',
              },
            ].map(item => (
              <Link key={item.step} href={item.href} className="group text-center space-y-4 p-8 rounded-xl3 hover:bg-cream-50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-sand-400/40 flex items-center justify-center mx-auto group-hover:bg-sand-400/70 transition-colors">
                  <span className="font-playfair text-xl font-medium text-sand-700">{item.step}</span>
                </div>
                <h3 className="heading-4">{item.title}</h3>
                <p className="body-sm text-brown-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/product" className="btn-secondary">
              View Product Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section bg-cream-100">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Real People, Real Results</h2>
            <p className="body-lg max-w-xl mx-auto">Verified patient stories from our clinical trial and early community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-cream-50 rounded-xl4 p-8 shadow-card space-y-5">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={14} className="text-sand-600 fill-sand-600" />
                  ))}
                </div>
                <p className="font-playfair italic text-base text-brown-800 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="border-t border-cream-200 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm font-semibold text-brown-900">{t.name}</p>
                    <p className="font-inter text-xs text-brown-600">{t.location}, {t.age} yrs</p>
                  </div>
                  <div className="text-right">
                    <p className="font-inter text-xs text-brown-600">HbA1c</p>
                    <p className="font-inter text-sm font-semibold text-sage-600">
                      {t.hba1cBefore}% → {t.hba1cAfter}%
                    </p>
                    <p className="font-inter text-xs text-brown-400">{t.months} months</p>
                  </div>
                </div>
                <span className="badge-success text-[10px]">
                  <CheckCircle size={10} />
                  Verified Patient
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Simple, Transparent Pricing</h2>
            <p className="body-lg max-w-xl mx-auto">No hidden fees. 30-day money-back guarantee on all plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map(p => (
              <div
                key={p.id}
                className={`relative rounded-xl3 p-8 flex flex-col gap-5 transition-all duration-300 ${
                  p.popular
                    ? 'bg-brown-900 text-cream-50 shadow-modal scale-[1.02]'
                    : 'bg-white shadow-card hover:shadow-card-hover'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-brand text-[10px]">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className={`font-inter text-xs font-semibold tracking-widest uppercase mb-2 ${p.popular ? 'text-sand-400' : 'text-taupe-600'}`}>
                    {p.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`font-playfair text-4xl font-medium ${p.popular ? 'text-sand-400' : 'text-brown-900'}`}>
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-sm mb-1 ${p.popular ? 'text-cream-200' : 'text-brown-600'}`}>
                      /{p.period}
                    </span>
                  </div>
                  <p className={`font-inter text-sm mt-1 ${p.popular ? 'text-cream-200' : 'text-brown-600'}`}>
                    ₹{p.perMonth}/month
                  </p>
                  {p.savings && (
                    <p className="font-inter text-xs font-semibold text-sage-600 mt-1">{p.savings}</p>
                  )}
                </div>
                <ul className="space-y-2 flex-1">
                  {[
                    'QYOUR supplement supply',
                    'Personalised AI quiz',
                    'Diet & exercise plan',
                    'Dashboard access',
                    '30-day money-back',
                    ...(p.id !== 'monthly' ? ['Free doctor consultation'] : []),
                  ].map(feature => (
                    <li key={feature} className="flex items-center gap-2 font-inter text-sm">
                      <CheckCircle size={14} className={p.popular ? 'text-sage-600' : 'text-sage-600'} />
                      <span className={p.popular ? 'text-cream-100' : 'text-brown-800'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/cart?plan=${p.id}`}
                  className={p.popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center body-sm mt-6 text-brown-500 flex items-center justify-center gap-1.5">
            <Clock size={14} />
            Free shipping across India. Results typically visible within 90 days.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-20 px-4">
        <div className="container-content text-center space-y-6">
          <h2 className="font-playfair text-h2-sm md:text-h2 font-medium text-cream-50">
            Ready to Take the First Step?
          </h2>
          <p className="font-inter text-lg text-cream-200 max-w-lg mx-auto">
            Take our free AI assessment — or speak directly with a doctor before you decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="btn-dark border border-white/20 mx-auto sm:mx-0">
              Take Free AI Quiz
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/doctor-booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-pill border-2 border-sand-500 text-sand-400 font-inter text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-white/10 mx-auto sm:mx-0"
            >
              Book Free Consultation
            </Link>
          </div>
          <p className="font-inter text-xs text-neutral-500">
            No credit card required · AI quiz takes 3 minutes · Doctor call is 15 minutes
          </p>
        </div>
      </section>
    </>
  )
}
