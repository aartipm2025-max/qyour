import Link from 'next/link'
import { ArrowRight, Heart, Users, Leaf, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-3xl mx-auto text-center space-y-6">
          <h1 className="heading-1">Our Story</h1>
          <p className="body-lg max-w-2xl mx-auto">
            QYOUR was born from a simple observation: millions of Indians receive a Type 2 diabetes diagnosis
            and immediately face a lifetime of medication — before natural intervention is even tried.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container-content max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-2">Why We Built QYOUR</h2>
              <p className="body-base text-brown-700">
                Our founder's father was diagnosed with Type 2 diabetes at 48. The prescription was immediate:
                Metformin, dietary restrictions, and "we'll see how it goes." No one mentioned that
                at HbA1c 6.9%, natural intervention has a genuine, clinically-proven chance of success.
              </p>
              <p className="body-base text-brown-700">
                We spent two years working with endocrinologists, Ayurvedic practitioners, and clinical
                researchers to develop QYOUR — a supplement that brings together the best of traditional
                Indian botanical medicine and modern clinical validation.
              </p>
              <p className="body-base text-brown-700">
                Our 50-patient clinical trial proved what we believed: for newly diagnosed T2DM patients,
                a targeted natural supplement can achieve 0.9% HbA1c reduction in 90 days.
                That's the difference between pre-diabetes and a normal range for many patients.
              </p>
            </div>
            <div className="bg-cream-100 rounded-xl4 p-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Heart size={32} className="text-brown-900" />
              </div>
              <h3 className="heading-3">Our Mission</h3>
              <p className="body-base text-brown-700 italic font-playfair">
                "To give every newly diagnosed diabetic the chance to manage their condition
                naturally — with clinical confidence — before medications become their only option."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cream-50">
        <div className="container-content">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Clinical Integrity', desc: 'Every claim is backed by our published clinical trial. We never exaggerate or mislead.' },
              { icon: Leaf, title: '100% Natural', desc: 'No synthetic compounds, no artificial additives, no pharmaceutical ingredients.' },
              { icon: Users, title: 'Patient-First', desc: 'Our product decisions are guided by patient outcomes, not margins.' },
              { icon: Heart, title: 'Transparent Always', desc: 'Full ingredient disclosure, honest timelines, no hidden costs.' },
            ].map(v => (
              <div key={v.title} className="card text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <v.icon size={22} className="text-brown-900" />
                </div>
                <h3 className="heading-4">{v.title}</h3>
                <p className="body-sm text-brown-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-content max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Medical Advisory Board</h2>
            <p className="body-lg max-w-xl mx-auto">
              QYOUR's formulation is reviewed and endorsed by leading Indian physicians.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Anjali Sharma', role: 'Endocrinologist', location: 'AIIMS Delhi', years: '18 years' },
              { name: 'Dr. Ravi Krishnan', role: 'Integrative Medicine', location: 'Apollo Hospitals, Chennai', years: '14 years' },
              { name: 'Dr. Sunita Patel', role: 'Clinical Nutritionist', location: 'Kokilaben Hospital, Mumbai', years: '12 years' },
            ].map(d => (
              <div key={d.name} className="card text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <Users size={32} className="text-taupe-600" />
                </div>
                <div>
                  <p className="font-playfair text-lg font-medium text-brown-900">{d.name}</p>
                  <p className="body-sm text-brown-900 font-medium">{d.role}</p>
                  <p className="body-sm text-brown-500">{d.location}</p>
                  <p className="body-sm text-brown-400">{d.years} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-2">Ready to Take Control?</h2>
          <Link href="/quiz" className="btn-primary mx-auto">
            Take Free AI Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
