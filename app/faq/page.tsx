import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Who is QYOUR designed for?',
    a: 'QYOUR is specifically designed for adults newly diagnosed with Type 2 diabetes (HbA1c 5.7–7.5%) who want to try a natural approach before starting medication. It works best in the early stages of T2DM when the pancreas still has good function.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most patients notice reduced post-meal blood sugar spikes within 2–3 weeks. Measurable HbA1c improvement typically appears at the 3-month mark, which is consistent with our clinical trial results showing 0.9% average reduction in 90 days.',
  },
  {
    q: 'Can I take QYOUR with my diabetes medication?',
    a: 'Please consult your doctor before combining QYOUR with any diabetes medication, especially Metformin or insulin. QYOUR can enhance the effects of glucose-lowering medications, which may require dosage adjustments. We recommend booking a free consultation with our doctor.',
  },
  {
    q: 'Are there any side effects?',
    a: 'Our 50-patient clinical trial reported zero adverse events. All ingredients are GRAS (Generally Recognised As Safe). Some patients report mild digestive changes in the first week as the body adjusts — these typically resolve within a few days.',
  },
  {
    q: 'What is in QYOUR?',
    a: 'QYOUR contains 6 clinically-studied ingredients: Berberine HCl (500mg), Bitter Melon Extract (200mg), Gymnema Sylvestre (400mg), Fenugreek Seed (500mg), Cinnamon Extract (250mg), and Chromium Picolinate (200mcg). No fillers, no artificial additives.',
  },
  {
    q: 'How do I take QYOUR?',
    a: '2 capsules twice daily with meals — morning and evening. Taking with food improves absorption and reduces the chance of any digestive discomfort. Consistency is key: results improve with daily use over at least 90 days.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'We offer a full 30-day money-back guarantee. If you\'re not satisfied within the first month, contact us for a complete refund — no questions asked. We\'re confident in our product and want you to feel safe trying it.',
  },
  {
    q: 'Is QYOUR approved by Indian regulatory bodies?',
    a: 'Yes. QYOUR is registered with AYUSH, holds FSSAI licensing, and is manufactured in a WHO-GMP certified facility in India. All ingredients comply with Indian regulatory standards for dietary supplements.',
  },
  {
    q: 'Will I still need to see my doctor?',
    a: 'Absolutely yes. QYOUR is a supplement, not a replacement for medical care. We strongly encourage regular check-ups with your doctor. We also offer free 15-minute consultations with our network doctors to help you integrate QYOUR into your overall diabetes management.',
  },
  {
    q: 'How is QYOUR different from other diabetes supplements?',
    a: 'QYOUR is one of the few diabetes supplements in India backed by a published clinical trial specifically in newly diagnosed T2DM patients. We provide full ingredient transparency, precise clinical dosages (not proprietary blends), and AI personalisation for your specific profile.',
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h1 className="heading-1">Frequently Asked Questions</h1>
          <p className="body-lg">Everything you need to know about QYOUR and natural diabetes management.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="flex items-center justify-between gap-4 list-none cursor-pointer">
                <h3 className="font-playfair text-lg font-medium text-brown-900">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className="text-sand-600 shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="body-base text-brown-700 mt-4 pt-4 border-t border-cream-200">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-2">Still Have Questions?</h2>
          <p className="body-lg">Talk to our team or book a free consultation with a doctor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/doctor-booking" className="btn-secondary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
