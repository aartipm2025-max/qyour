'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, CheckCircle, User, Video } from 'lucide-react'
import { toast } from '@/components/ui/Toaster'

const schema = z.object({
  name:    z.string().min(2, 'Required'),
  email:   z.string().email('Invalid email'),
  phone:   z.string().regex(/^[6-9]\d{9}$/, 'Enter valid mobile number'),
  concern: z.string().min(10, 'Please describe your concern'),
  slot:    z.string().min(1, 'Please select a slot'),
  doctor:  z.string().min(1, 'Please select a doctor'),
})
type FormData = z.infer<typeof schema>

const doctors = [
  { id: 'd1', name: 'Dr. Anjali Sharma', role: 'Endocrinologist', exp: '18 years', available: 'Mon, Wed, Fri' },
  { id: 'd2', name: 'Dr. Ravi Krishnan', role: 'Integrative Medicine', exp: '14 years', available: 'Tue, Thu, Sat' },
  { id: 'd3', name: 'Dr. Sunita Patel', role: 'Clinical Nutritionist', exp: '12 years', available: 'Mon–Sat' },
]

const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function DoctorBookingPage() {
  const [booked, setBooked] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const selectedDoctor = watch('doctor')

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1500))
    const ref = `QB${Date.now().toString().slice(-6)}`
    setBookingRef(ref)
    toast({ type: 'success', title: 'Appointment booked!', message: `Ref: ${ref}` })
    setBooked(true)
  }

  if (booked) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20 px-4">
        <div className="card max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto">
            <CheckCircle size={40} className="text-sage-600" />
          </div>
          <h2 className="heading-2">Appointment Confirmed!</h2>
          <p className="body-base text-brown-700">
            Your free 15-minute consultation has been booked. You'll receive a Google Meet link via email 1 hour before your appointment.
          </p>
          <div className="bg-cream-50 rounded-xl2 p-4 space-y-2">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">Booking Reference</p>
            <p className="font-playfair text-2xl font-medium text-brown-900">{bookingRef}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <span className="badge-success"><Video size={12} /> Free 15-Minute Consultation</span>
          <h1 className="heading-1">Book a Doctor Consultation</h1>
          <p className="body-lg">
            Speak with a specialist who understands both conventional and natural diabetes management.
            Free for all QYOUR customers.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Doctors */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="heading-3">Our Doctors</h3>
            {doctors.map(doc => (
              <div key={doc.id} className="card space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center shrink-0">
                    <User size={22} className="text-taupe-600" />
                  </div>
                  <div>
                    <p className="font-playfair text-base font-medium text-brown-900">{doc.name}</p>
                    <p className="body-sm text-sand-700 font-medium">{doc.role}</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="badge-brand">{doc.exp}</span>
                </div>
                <p className="font-inter text-xs text-brown-500">Available: {doc.available}</p>
              </div>
            ))}

            <div className="card bg-cream-50 space-y-3">
              <h4 className="heading-4">What to expect</h4>
              {['15-minute video call via Google Meet', 'Review your quiz results & HbA1c history', 'Personalised supplement protocol', 'Diet & lifestyle recommendations', 'Follow-up email summary'].map(item => (
                <p key={item} className="flex items-center gap-2 body-sm text-brown-700">
                  <CheckCircle size={12} className="text-sage-600 shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-5">
              <h3 className="heading-3">Book Your Slot</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Full Name</label>
                  <input {...register('name')} placeholder="Rajesh Mehta" className="input-base" />
                  {errors.name && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Email</label>
                  <input {...register('email')} type="email" placeholder="rajesh@email.com" className="input-base" />
                  {errors.email && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Mobile Number</label>
                <input {...register('phone')} placeholder="9876543210" className="input-base" />
                {errors.phone && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Select Doctor</label>
                <select {...register('doctor')} className="input-base">
                  <option value="">Choose a doctor...</option>
                  {doctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name} — {d.role}</option>
                  ))}
                </select>
                {errors.doctor && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.doctor.message}</p>}
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">
                  <Calendar size={14} className="inline mr-1" />
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {slots.map(slot => (
                    <label key={slot} className="cursor-pointer">
                      <input type="radio" value={slot} {...register('slot')} className="sr-only" />
                      <span className={`block text-center px-3 py-2 rounded-xl border-2 font-inter text-xs font-medium transition-all duration-200 cursor-pointer
                        ${watch('slot') === slot
                          ? 'border-sand-600 bg-sand-400/20 text-brown-900'
                          : 'border-cream-200 bg-cream-50 text-brown-700 hover:border-sand-400'}`}>
                        <Clock size={10} className="inline mr-1" />{slot}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.slot && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.slot.message}</p>}
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Your Primary Concern</label>
                <textarea {...register('concern')} rows={3} placeholder="e.g. My HbA1c is 7.1%, just diagnosed, want to avoid medication if possible..." className="input-base resize-none" />
                {errors.concern && <p className="font-inter text-xs text-coral-600 mt-1.5">{errors.concern.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Booking...
                  </span>
                ) : (
                  <>Book Free Consultation</>
                )}
              </button>
              <p className="font-inter text-xs text-center text-brown-500">
                Free for all plans · Video call via Google Meet · No commitment
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
