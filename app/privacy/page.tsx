export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-16 px-4">
      <div className="container-content max-w-3xl mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="heading-1">Privacy Policy</h1>
          <p className="body-sm text-brown-500">Last updated: May 2026</p>
        </div>
        {[
          {
            title: '1. Information We Collect',
            body: 'We collect information you provide directly — name, email, phone, shipping address, health quiz answers, and glucose readings you voluntarily log. We also collect standard website analytics (page views, device type) via privacy-friendly tools.',
          },
          {
            title: '2. How We Use Your Information',
            body: 'Your information is used to process orders, personalise your AI health recommendations, provide customer support, and send order updates. We never sell your personal data to third parties.',
          },
          {
            title: '3. Health Data',
            body: 'Any health information you share (HbA1c, glucose readings, quiz answers) is used solely to provide you with personalised recommendations. This data is stored securely and is never shared with advertisers or data brokers.',
          },
          {
            title: '4. Data Storage & Security',
            body: 'Your data is stored on secure servers with 256-bit SSL encryption. We use industry-standard security practices. Health quiz results and dashboard data are stored in browser localStorage and optionally on our servers if you create an account.',
          },
          {
            title: '5. Your Rights',
            body: 'You have the right to access, correct, or delete your personal data. Contact us at hello@qyour.in to exercise these rights. We will respond within 30 days.',
          },
          {
            title: '6. Cookies',
            body: 'We use minimal cookies — only what is necessary for the website to function (cart state, session). We do not use advertising or tracking cookies.',
          },
          {
            title: '7. Contact',
            body: 'For privacy concerns, contact our Data Officer at privacy@qyour.in or write to QYOUR, Mumbai, Maharashtra, India.',
          },
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
