export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-16 px-4">
      <div className="container-content max-w-3xl mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="heading-1">Terms of Use</h1>
          <p className="body-sm text-brown-500">Last updated: May 2026</p>
        </div>
        {[
          { title: '1. Acceptance', body: 'By using QYOUR\'s website and purchasing our products, you agree to these terms. If you do not agree, please do not use our services.' },
          { title: '2. Product Use', body: 'QYOUR is a dietary supplement intended for adults with Type 2 diabetes or pre-diabetes. It is not a medicine and does not replace medical treatment. Always consult your physician before starting any supplement.' },
          { title: '3. Medical Disclaimer', body: 'The information on this website is for educational purposes only. QYOUR is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.' },
          { title: '4. Orders & Payment', body: 'All prices are in Indian Rupees (INR). Payments are processed securely via Razorpay. QYOUR reserves the right to cancel orders in cases of suspected fraud or stock unavailability.' },
          { title: '5. Shipping', body: 'We ship across India. Delivery typically takes 3–5 business days. QYOUR is not responsible for delays caused by courier partners or circumstances beyond our control.' },
          { title: '6. Intellectual Property', body: 'All content on this website — including text, images, clinical data, and design — is the intellectual property of QYOUR and may not be reproduced without written permission.' },
          { title: '7. Governing Law', body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.' },
        ].map(section => (
          <div key={section.title} className="card space-y-3">
            <h2 className="heading-4">{section.title}</h2>
            <p className="body-base text-brown-700">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
