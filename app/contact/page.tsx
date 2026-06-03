'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react'
import { toast } from '@/components/ui/Toaster'

const schema = z.object({
  name:    z.string().min(2, 'Required'),
  email:   z.string().email('Invalid email'),
  subject: z.string().min(3, 'Required'),
  message: z.string().min(20, 'Please write at least 20 characters'),
})
type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Contact form:', data)
    toast({ type: 'success', title: 'Message sent!', message: "We'll reply within 24 hours." })
    setSent(true)
  }

  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h1 className="heading-1">Get in Touch</h1>
          <p className="body-lg">We're here to help. Expect a reply within 24 hours on business days.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="heading-3 mb-6">Contact Details</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@qyour.in', href: 'mailto:hello@qyour.in' },
                  { icon: Phone, label: 'Phone', value: '+91 80000 00000', href: 'tel:+918000000000' },
                  { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={18} className="text-brown-900" />
                    </div>
                    <div>
                      <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="body-base text-brown-900 hover:text-sand-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="body-base text-brown-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-cream-50 space-y-3">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">Support Hours</p>
              <div className="space-y-1">
                <p className="body-sm text-brown-700">Mon–Fri: 9:00 AM – 6:00 PM IST</p>
                <p className="body-sm text-brown-700">Sat: 10:00 AM – 2:00 PM IST</p>
                <p className="body-sm text-brown-500">Typically reply within 4 hours</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="card text-center space-y-5 py-16">
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-sage-600" />
                </div>
                <h3 className="heading-3">Message Sent!</h3>
                <p className="body-base text-brown-700">
                  Thank you for reaching out. We'll reply to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card space-y-5">
                <h3 className="heading-3">Send a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Name</label>
                    <input {...register('name')} placeholder="Your name" className="input-base" />
                    {errors.name && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Email</label>
                    <input {...register('email')} placeholder="your@email.com" className="input-base" />
                    {errors.email && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Subject</label>
                  <input {...register('subject')} placeholder="How can we help?" className="input-base" />
                  {errors.subject && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Message</label>
                  <textarea {...register('message')} rows={5} placeholder="Tell us more..." className="input-base resize-none" />
                  {errors.message && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
