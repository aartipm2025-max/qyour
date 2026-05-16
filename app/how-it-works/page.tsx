import Link from 'next/link'
import { ArrowRight, Leaf, Brain, Activity, CheckCircle, Clock } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-3xl mx-auto text-center space-y-6">
          <h1 className="heading-1">How QYOUR Works</h1>
          <p className="body-lg max-w-2xl mx-auto">
            A science-backed, three-pronged approach to naturally lowering blood sugar —
            targeting the root cause of Type 2 diabetes, not just the symptoms.
          </p>
        </div>
      </section>

      {/* Three mechanisms */}
      <section className="section bg-white">
        <div className="container-content max-w-4xl mx-auto space-y-20">
          {[
            {
              num: '01',
              icon: Leaf,
              title: 'Improve Insulin Sensitivity',
              subtitle: 'The core problem in Type 2 diabetes',
              body: `In Type 2 diabetes, your cells become resistant to insulin — the hormone that helps glucose enter cells. QYOUR's Berberine activates AMPK, the enzyme responsible for glucose uptake, directly addressing insulin resistance at the cellular level.

Gymnema Sylvestre supports this by regenerating pancreatic beta cells — the cells that produce insulin — improving your body's natural insulin production over time.`,
              outcome: 'Expected by: Week 4–6',
              metric: '↑ Insulin sensitivity',
            },
            {
              num: '02',
              icon: Activity,
              title: 'Slow Glucose Absorption',
              subtitle: 'Reduce post-meal blood sugar spikes',
              body: `The rapid rise in blood sugar after meals is a major contributor to HbA1c elevation. Fenugreek's soluble fibre and Bitter Melon's polypeptide-p work together to slow glucose absorption in the intestines.

This means your blood sugar rises more gradually after meals — reducing the glycaemic burden on your pancreas and reducing the storage of excess glucose as fat.`,
              outcome: 'Expected by: Week 2–3',
              metric: '↓ Post-meal spikes',
            },
            {
              num: '03',
              icon: Brain,
              title: 'Support Long-Term Metabolic Health',
              subtitle: 'Systemic improvements beyond blood sugar',
              body: `Chromium Picolinate enhances insulin's signalling efficiency, while Cinnamon Extract reduces systemic inflammation — a key driver of metabolic dysfunction. Together, they support liver health, lipid profiles, and cardiovascular risk reduction.

Over 90 days, these systemic benefits compound, leading to measurable HbA1c reduction and improved overall metabolic health markers.`,
              outcome: 'Expected by: Month 3',
              metric: '↓ HbA1c 0.8–1.2%',
            },
          ].map((item, i) => (
            <div key={item.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`space-y-5 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="font-playfair text-5xl font-medium text-sand-400">{item.num}</span>
                  <div className="w-10 h-10 rounded-xl bg-sand-400/30 flex items-center justify-center">
                    <item.icon size={20} className="text-sand-700" />
                  </div>
                </div>
                <div>
                  <h2 className="heading-2">{item.title}</h2>
                  <p className="body-sm text-taupe-600 mt-1 uppercase tracking-widest font-semibold">{item.subtitle}</p>
                </div>
                <p className="body-base text-brown-700 whitespace-pre-line leading-relaxed">{item.body}</p>
                <div className="flex gap-4 flex-wrap">
                  <span className="badge-success"><Clock size={10} /> {item.outcome}</span>
                  <span className="badge-brand">{item.metric}</span>
                </div>
              </div>
              <div className={`bg-cream-100 rounded-xl4 aspect-square flex items-center justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="text-center space-y-3 p-8">
                  <item.icon size={64} className="text-sand-500 mx-auto" />
                  <p className="font-playfair text-xl font-medium text-brown-800">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream-100">
        <div className="container-content max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">What to Expect</h2>
            <p className="body-lg max-w-xl mx-auto">Most patients begin noticing changes within 2–3 weeks.</p>
          </div>
          <div className="space-y-4">
            {[
              { period: 'Week 1–2', title: 'Foundation', events: ['Reduced post-meal blood sugar spikes', 'Slight improvement in energy levels', 'Some patients notice reduced sugar cravings'] },
              { period: 'Week 3–6', title: 'Early Progress', events: ['Fasting glucose begins to drop', 'Insulin sensitivity improving', 'Sleep quality often improves'] },
              { period: 'Month 2', title: 'Clear Improvement', events: ['Measurable fasting glucose improvement', 'Energy levels significantly better', 'Doctor likely to notice at next checkup'] },
              { period: 'Month 3', title: 'HbA1c Improvement', events: ['0.5–1.2% HbA1c reduction in most patients', 'Sustainable metabolic improvement', 'Foundation for long-term diabetes management'] },
            ].map(row => (
              <div key={row.period} className="card flex gap-6 items-start">
                <div className="w-28 shrink-0 text-center">
                  <p className="font-inter text-xs font-semibold tracking-widest uppercase text-sand-600">{row.period}</p>
                  <p className="font-playfair text-sm font-medium text-brown-800 mt-1">{row.title}</p>
                </div>
                <ul className="flex-1 space-y-1.5">
                  {row.events.map(e => (
                    <li key={e} className="flex items-center gap-2 body-sm text-brown-700">
                      <CheckCircle size={12} className="text-sage-600 shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-2">Start Your Journey Today</h2>
          <p className="body-lg">Take the free AI assessment and get a personalised plan in 3 minutes.</p>
          <Link href="/quiz" className="btn-primary mx-auto">
            Take Free AI Quiz <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
