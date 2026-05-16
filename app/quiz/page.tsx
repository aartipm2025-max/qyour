'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const questions = [
  {
    id: 'age',
    question: 'What is your age?',
    type: 'single',
    options: ['Under 30', '30–40', '41–50', '51–60', 'Over 60'],
  },
  {
    id: 'hba1c',
    question: 'What is your most recent HbA1c reading?',
    type: 'single',
    options: ['5.7–6.0% (Pre-diabetic)', '6.1–6.5% (Borderline)', '6.6–7.0% (Newly diabetic)', '7.1–7.5% (Elevated)', 'Above 7.5%', "I don't know"],
  },
  {
    id: 'duration',
    question: 'How recently were you diagnosed?',
    type: 'single',
    options: ['Within the last month', '1–3 months ago', '3–6 months ago', '6–12 months ago', 'More than a year ago'],
  },
  {
    id: 'medication',
    question: 'Are you currently on any diabetes medication?',
    type: 'single',
    options: ['No medication yet', 'Metformin only', 'Multiple medications', 'Insulin', 'Other supplements only'],
  },
  {
    id: 'diet',
    question: 'How would you describe your current diet?',
    type: 'single',
    options: ['Mostly home-cooked Indian meals', 'Mix of home & restaurant food', 'Frequently eat outside/processed', 'Vegetarian', 'Vegan'],
  },
  {
    id: 'exercise',
    question: 'How active are you?',
    type: 'single',
    options: ['Sedentary (desk job, minimal movement)', 'Light (1–2 walks/week)', 'Moderate (3–4 workouts/week)', 'Active (daily exercise)', 'Very active (intense daily training)'],
  },
  {
    id: 'weight',
    question: 'How would you describe your body weight?',
    type: 'single',
    options: ['Underweight', 'Healthy weight', 'Slightly overweight', 'Overweight (BMI > 27)', 'Obese (BMI > 30)'],
  },
  {
    id: 'symptoms',
    question: 'Which symptoms have you experienced? (Select all that apply)',
    type: 'multi',
    options: ['Frequent thirst', 'Frequent urination', 'Fatigue/low energy', 'Slow healing wounds', 'Blurred vision', 'Tingling in hands/feet', 'None of these'],
  },
  {
    id: 'goal',
    question: 'What is your primary goal?',
    type: 'single',
    options: ['Avoid starting medication', 'Reduce current medication dose', 'Improve energy levels', 'Lose weight', 'Overall health improvement'],
  },
  {
    id: 'commitment',
    question: 'How committed are you to a 90-day natural management programme?',
    type: 'single',
    options: ['Very committed — I will follow it strictly', 'Committed — I will try my best', 'Somewhat — depends on results', 'Just exploring options'],
  },
]

type Answers = Record<string, string | string[]>
type Result = { dosage: string; timeline: string; dietTips: string[]; exerciseTips: string[]; message: string; urgency: string }

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  const q = questions[step]
  const progress = Math.round((step / questions.length) * 100)
  const selected = answers[q?.id]

  const select = (option: string) => {
    if (q.type === 'multi') {
      const current = (answers[q.id] as string[]) || []
      if (current.includes(option)) {
        setAnswers({ ...answers, [q.id]: current.filter(o => o !== option) })
      } else {
        setAnswers({ ...answers, [q.id]: [...current, option] })
      }
    } else {
      setAnswers({ ...answers, [q.id]: option })
    }
  }

  const isSelected = (option: string) => {
    if (q.type === 'multi') return ((answers[q.id] as string[]) || []).includes(option)
    return answers[q.id] === option
  }

  const canProgress = q.type === 'multi'
    ? ((answers[q.id] as string[]) || []).length > 0
    : !!answers[q.id]

  const next = async () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setLoading(true)
      try {
        const res = await fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers }),
        })
        const data = await res.json()
        setResult(data)
      } catch {
        setResult({
          dosage: '2 capsules twice daily with meals',
          timeline: '90 days for measurable HbA1c improvement',
          dietTips: ['Reduce refined carbohydrates', 'Include more fibre-rich vegetables', 'Choose whole grain roti over maida'],
          exerciseTips: ['30-minute brisk walk daily', 'Post-meal 10-minute walks help blood sugar significantly'],
          message: 'Based on your profile, QYOUR is well-suited for your stage of diabetes management.',
          urgency: 'medium',
        })
      } finally {
        setLoading(false)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-sand-400/40 flex items-center justify-center mx-auto">
            <Loader2 size={32} className="text-sand-600 animate-spin" />
          </div>
          <div className="space-y-2">
            {['Analysing your health profile...', 'Calculating your timeline...', 'Personalising your recommendations...'].map((msg, i) => (
              <p key={i} className="font-inter text-sm text-brown-600 animate-fade-up" style={{ animationDelay: `${i * 1.2}s` }}>
                {msg}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-hero pt-24 pb-16 px-4">
        <div className="container-content max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="badge-success"><CheckCircle size={12} /> Your personalised plan is ready</span>
            <h1 className="heading-2">Your QYOUR Health Plan</h1>
            <p className="body-lg">{result.message}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card space-y-2">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">Recommended Dosage</p>
              <p className="font-playfair text-lg font-medium text-brown-900">{result.dosage}</p>
            </div>
            <div className="card space-y-2">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">Expected Timeline</p>
              <p className="font-playfair text-lg font-medium text-brown-900">{result.timeline}</p>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="heading-4">Diet Recommendations</h3>
            <ul className="space-y-2">
              {result.dietTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 body-sm text-brown-700">
                  <CheckCircle size={14} className="text-sage-600 mt-0.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="card space-y-4">
            <h3 className="heading-4">Exercise Plan</h3>
            <ul className="space-y-2">
              {result.exerciseTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 body-sm text-brown-700">
                  <CheckCircle size={14} className="text-sage-600 mt-0.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cart?plan=quarterly" className="btn-primary flex-1 justify-center">
              Start My 90-Day Plan
              <ArrowRight size={16} />
            </Link>
            <Link href="/doctor-booking" className="btn-secondary flex-1 justify-center">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-hero pt-24 pb-16 px-4">
      <div className="container-content max-w-2xl mx-auto space-y-8">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between font-inter text-sm font-medium text-brown-600">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{progress}% Complete</span>
          </div>
          <div className="h-1.5 bg-cream-200 rounded-pill overflow-hidden">
            <div
              className="h-full bg-gradient-sand rounded-pill transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="card space-y-6">
          <h2 className="heading-3">{q.question}</h2>
          {q.type === 'multi' && (
            <p className="body-sm text-brown-500">Select all that apply</p>
          )}
          <div className="grid grid-cols-1 gap-3">
            {q.options.map(option => (
              <button
                key={option}
                onClick={() => select(option)}
                className={cn(
                  'text-left px-5 py-4 rounded-xl2 border-2 font-inter text-sm transition-all duration-200',
                  isSelected(option)
                    ? 'border-sand-600 bg-sand-400/20 text-brown-900 font-medium'
                    : 'border-cream-200 bg-cream-50 text-brown-800 hover:border-sand-500 hover:bg-cream-100',
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            onClick={next}
            disabled={!canProgress}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === questions.length - 1 ? 'Get My Plan' : 'Next'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
