import Link from 'next/link'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-16 px-4">
      <div className="container-content max-w-3xl mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="heading-1">Refund Policy</h1>
          <p className="body-sm text-brown-500">Last updated: May 2026 · 30-Day Money-Back Guarantee</p>
        </div>
        <div className="card bg-sage-100 border-l-4 border-sage-600 space-y-2">
          <p className="font-inter font-semibold text-brown-900">Our Promise</p>
          <p className="body-base text-brown-700">
            We believe in QYOUR so strongly that we offer a full 30-day, no-questions-asked refund.
            If you're not satisfied for any reason in the first 30 days, we'll refund your entire purchase.
          </p>
        </div>
        {[
          { title: 'Eligibility', body: 'All first-time orders are eligible for a full refund within 30 days of delivery. Subsequent orders are eligible for refund within 30 days if the product is defective or significantly different from described.' },
          { title: 'How to Request a Refund', body: 'Email hello@qyour.in with your order ID and reason for return. You do not need to return the product for first-time refund requests. We will process your refund within 5-7 business days.' },
          { title: 'Refund Processing Time', body: 'Refunds are credited to your original payment method within 5-7 business days after approval. For UPI payments, refunds typically appear within 3-4 business days.' },
          { title: 'Non-Refundable Items', body: 'Doctor consultation fees (if separately charged) and express shipping charges are non-refundable. Promotional orders with greater than 50% discount may have modified refund terms disclosed at the time of purchase.' },
        ].map(section => (
          <div key={section.title} className="card space-y-3">
            <h2 className="heading-4">{section.title}</h2>
            <p className="body-base text-brown-700">{section.body}</p>
          </div>
        ))}
        <div className="text-center">
          <p className="body-base text-brown-700 mb-4">Questions about a refund?</p>
          <Link href="/contact" className="btn-primary">Contact Support</Link>
        </div>
      </div>
    </div>
  )
}
