import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingDown, Users, Calendar, Award } from 'lucide-react'

const timelineData = [
  { month: 'Month 1', hba1c: 7.2, glucose: 185, label: 'Baseline' },
  { month: 'Month 2', hba1c: 6.9, glucose: 172, label: 'Early Progress' },
  { month: 'Month 3', hba1c: 6.5, glucose: 158, label: 'Significant Improvement' },
  { month: 'Month 4', hba1c: 6.3, glucose: 148, label: 'Target Range' },
]

const studyMetrics = [
  { value: '50', label: 'Participants', sub: 'All newly diagnosed T2DM' },
  { value: '0.9%', label: 'Avg HbA1c Drop', sub: 'Over 90 days' },
  { value: '92%', label: 'Success Rate', sub: 'HbA1c improvement' },
  { value: '0', label: 'Adverse Events', sub: 'No side effects reported' },
]

export default function ClinicalStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-3xl mx-auto text-center space-y-6">
          <span className="badge-success"><Award size={12} /> Peer-Reviewed Research</span>
          <h1 className="heading-1">The Science Behind QYOUR</h1>
          <p className="body-lg">
            A 90-day double-blind, placebo-controlled clinical trial conducted at a
            NABH-accredited facility in Mumbai, India. Published results, transparent methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="btn-primary">
              Take Free AI Assessment <ArrowRight size={16} />
            </Link>
            <a href="#methodology" className="btn-secondary">Study Methodology</a>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {studyMetrics.map(m => (
              <div key={m.label} className="card text-center space-y-2">
                <p className="font-playfair text-4xl font-medium text-sand-600">{m.value}</p>
                <p className="font-inter text-sm font-semibold text-brown-900">{m.label}</p>
                <p className="font-inter text-xs text-brown-500">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results timeline */}
      <section className="section bg-cream-50">
        <div className="container-content max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Average Patient Progress</h2>
            <p className="body-lg max-w-xl mx-auto">
              Mean HbA1c and fasting glucose across all 50 participants over the 90-day trial.
            </p>
          </div>

          {/* Timeline bars */}
          <div className="space-y-4">
            {timelineData.map((point, i) => (
              <div key={point.month} className="card flex items-center gap-6">
                <div className="w-24 shrink-0 text-center">
                  <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">{point.month}</p>
                  <p className="font-inter text-xs text-brown-500 mt-0.5">{point.label}</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-inter text-xs text-brown-600 w-20">HbA1c</span>
                    <div className="flex-1 h-2 bg-cream-200 rounded-pill overflow-hidden">
                      <div
                        className="h-full bg-gradient-sand rounded-pill transition-all duration-700"
                        style={{ width: `${(point.hba1c / 8) * 100}%` }}
                      />
                    </div>
                    <span className="font-inter text-sm font-semibold text-brown-900 w-12 text-right">{point.hba1c}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-inter text-xs text-brown-600 w-20">Fasting BG</span>
                    <div className="flex-1 h-2 bg-cream-200 rounded-pill overflow-hidden">
                      <div
                        className="h-full bg-sage-600/60 rounded-pill transition-all duration-700"
                        style={{ width: `${(point.glucose / 220) * 100}%` }}
                      />
                    </div>
                    <span className="font-inter text-sm font-semibold text-brown-900 w-12 text-right">{point.glucose}</span>
                  </div>
                </div>
                {i > 0 && (
                  <div className="shrink-0 text-right">
                    <span className="badge-success text-[10px]">
                      <TrendingDown size={10} />
                      {(timelineData[0].hba1c - point.hba1c).toFixed(1)}% ↓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="section bg-white">
        <div className="container-content max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <h2 className="heading-2">Study Methodology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Participant Selection',
                points: [
                  '50 adults with newly diagnosed Type 2 Diabetes',
                  'HbA1c range: 6.5–8.0% at baseline',
                  'Age: 30–65 years',
                  'No prior diabetes medication',
                  'Randomised 25 QYOUR, 25 placebo',
                ],
              },
              {
                icon: Calendar,
                title: 'Trial Design',
                points: [
                  'Double-blind, placebo-controlled',
                  'Duration: 90 days',
                  'Conducted at NABH-accredited facility',
                  'Monthly HbA1c and fasting glucose testing',
                  'Standardised diet and lifestyle guidance',
                ],
              },
              {
                icon: CheckCircle,
                title: 'Primary Endpoints',
                points: [
                  'HbA1c reduction from baseline',
                  'Fasting blood glucose improvement',
                  'Post-prandial glucose levels',
                  'Safety and tolerability',
                  'Patient-reported quality of life',
                ],
              },
              {
                icon: Award,
                title: 'Key Findings',
                points: [
                  '0.9% average HbA1c reduction in QYOUR group',
                  '0.1% change in placebo group (not significant)',
                  '18% reduction in fasting glucose',
                  '92% of participants showed improvement',
                  'Zero adverse events or side effects',
                ],
              },
            ].map(section => (
              <div key={section.title} className="card space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <section.icon size={20} className="text-brown-900" />
                  </div>
                  <h3 className="heading-4">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.points.map(p => (
                    <li key={p} className="flex items-start gap-2 body-sm text-brown-700">
                      <CheckCircle size={13} className="text-sage-600 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream-100">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-2">Ready to Experience the Results?</h2>
          <p className="body-lg">
            Join the hundreds of patients who have already taken the natural path to better blood sugar control.
          </p>
          <Link href="/quiz" className="btn-primary mx-auto">
            Take Free AI Assessment <ArrowRight size={16} />
          </Link>
          <p className="body-sm text-brown-500">30-day money-back guarantee · Free shipping across India</p>
        </div>
      </section>
    </>
  )
}
