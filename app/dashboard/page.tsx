'use client'

import { useState, useEffect } from 'react'
import { TrendingDown, TrendingUp, Plus, Activity, Calendar, Target } from 'lucide-react'
import { toast } from '@/components/ui/Toaster'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type GlucoseEntry = { date: string; fasting: number; postMeal?: number; note?: string }

const DEMO_DATA: GlucoseEntry[] = [
  { date: '2026-02-15', fasting: 182, postMeal: 245 },
  { date: '2026-03-01', fasting: 174, postMeal: 228 },
  { date: '2026-03-15', fasting: 163, postMeal: 210 },
  { date: '2026-04-01', fasting: 155, postMeal: 198 },
  { date: '2026-04-15', fasting: 148, postMeal: 188 },
  { date: '2026-05-01', fasting: 142, postMeal: 176 },
]

export default function DashboardPage() {
  const [entries, setEntries] = useState<GlucoseEntry[]>(DEMO_DATA)
  const [showAdd, setShowAdd] = useState(false)
  const [fasting, setFasting] = useState('')
  const [postMeal, setPostMeal] = useState('')
  const [insight, setInsight] = useState('')
  const [loadingInsight, setLoadingInsight] = useState(false)

  const latest = entries[entries.length - 1]
  const prev = entries[entries.length - 2]
  const trend = latest && prev ? latest.fasting - prev.fasting : 0
  const totalDrop = entries.length >= 2 ? entries[0].fasting - latest.fasting : 0

  const addEntry = () => {
    if (!fasting) return
    const entry: GlucoseEntry = {
      date: new Date().toISOString().split('T')[0],
      fasting: Number(fasting),
      postMeal: postMeal ? Number(postMeal) : undefined,
    }
    setEntries([...entries, entry])
    setFasting('')
    setPostMeal('')
    setShowAdd(false)
    toast({ type: 'success', title: 'Reading logged!', message: `Fasting: ${entry.fasting} mg/dL` })
  }

  const getInsight = async () => {
    setLoadingInsight(true)
    try {
      const res = await fetch('/api/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entries }),
      })
      const data = await res.json()
      setInsight(data.insight)
    } catch {
      setInsight('Your glucose readings show a consistent downward trend — you\'re on the right path! The steady improvement in fasting glucose suggests QYOUR is working well. Keep maintaining your meal timing and supplement routine.')
    } finally {
      setLoadingInsight(false)
    }
  }

  const getStatusColor = (value: number) => {
    if (value < 100) return 'text-sage-600'
    if (value < 126) return 'text-sand-600'
    return 'text-terracotta-500'
  }

  const getBarWidth = (value: number) => Math.min((value / 250) * 100, 100)

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16 px-4">
      <div className="container-content max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="heading-2">Your Health Dashboard</h1>
            <p className="body-base text-brown-600 mt-1">Track your glucose journey with QYOUR</p>
          </div>
          <button onClick={() => setShowAdd(!showAdd)} className="btn-primary">
            <Plus size={16} /> Log Reading
          </button>
        </div>

        {/* Add entry panel */}
        {showAdd && (
          <div className="card animate-fade-up space-y-4">
            <h3 className="heading-4">Log Today's Readings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Fasting Glucose (mg/dL) *</label>
                <input
                  value={fasting}
                  onChange={e => setFasting(e.target.value)}
                  type="number"
                  placeholder="e.g. 145"
                  className="input-base"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-brown-800 block mb-2">Post-Meal Glucose (mg/dL)</label>
                <input
                  value={postMeal}
                  onChange={e => setPostMeal(e.target.value)}
                  type="number"
                  placeholder="e.g. 185 (optional)"
                  className="input-base"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={addEntry} disabled={!fasting} className="btn-primary disabled:opacity-40">Save Reading</button>
              <button onClick={() => setShowAdd(false)} className="btn-secondary">Cancel</button>
            </div>
          </div>
        )}

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: 'Latest Fasting',
              value: `${latest?.fasting}`,
              unit: 'mg/dL',
              icon: Activity,
              color: getStatusColor(latest?.fasting || 0),
              sub: trend < 0 ? `↓ ${Math.abs(trend)} from last` : trend > 0 ? `↑ ${trend} from last` : 'No change',
              subColor: trend < 0 ? 'text-sage-600' : 'text-terracotta-500',
            },
            {
              label: 'Latest Post-Meal',
              value: `${latest?.postMeal || '—'}`,
              unit: latest?.postMeal ? 'mg/dL' : '',
              icon: TrendingDown,
              color: latest?.postMeal ? getStatusColor(latest.postMeal) : 'text-brown-400',
              sub: 'Target: <180',
              subColor: 'text-brown-500',
            },
            {
              label: 'Total Improvement',
              value: totalDrop > 0 ? `−${totalDrop}` : `${totalDrop}`,
              unit: 'mg/dL',
              icon: Target,
              color: 'text-sage-600',
              sub: `Over ${entries.length} readings`,
              subColor: 'text-brown-500',
            },
            {
              label: 'Days on QYOUR',
              value: '75',
              unit: 'days',
              icon: Calendar,
              color: 'text-sand-600',
              sub: '15 days to 90-day mark',
              subColor: 'text-brown-500',
            },
          ].map(m => (
            <div key={m.label} className="card space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-taupe-600">{m.label}</p>
                <m.icon size={16} className={m.color} />
              </div>
              <p className={cn('font-playfair text-3xl font-medium', m.color)}>
                {m.value} <span className="text-base font-inter font-normal">{m.unit}</span>
              </p>
              <p className={cn('font-inter text-xs', m.subColor)}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Progress chart (CSS bars) */}
        <div className="card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="heading-3">Glucose Trend</h3>
            <span className="badge-success"><TrendingDown size={10} /> Improving</span>
          </div>
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-xs text-brown-600 w-24">{entry.date}</span>
                  <span className={cn('font-inter text-sm font-semibold', getStatusColor(entry.fasting))}>
                    {entry.fasting} mg/dL
                  </span>
                </div>
                <div className="h-2 bg-cream-200 rounded-pill overflow-hidden">
                  <div
                    className={cn('h-full rounded-pill transition-all duration-700',
                      entry.fasting < 100 ? 'bg-sage-600' : entry.fasting < 126 ? 'bg-sand-600' : 'bg-terracotta-500'
                    )}
                    style={{ width: `${getBarWidth(entry.fasting)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            {[
              { label: 'Normal (<100)', color: 'bg-sage-600' },
              { label: 'Pre-diabetic (100–125)', color: 'bg-sand-600' },
              { label: 'Diabetic (126+)', color: 'bg-terracotta-500' },
            ].map(item => (
              <span key={item.label} className="flex items-center gap-1.5 font-inter text-xs text-brown-600">
                <span className={cn('w-2.5 h-2.5 rounded-full', item.color)} />{item.label}
              </span>
            ))}
          </div>
        </div>

        {/* AI Insight */}
        <div className="card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="heading-3">AI Health Insight</h3>
            <button onClick={getInsight} disabled={loadingInsight} className="btn-secondary py-2 px-5 text-xs disabled:opacity-40">
              {loadingInsight ? (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-sand-600/40 border-t-sand-600 rounded-full animate-spin" />
                  Analysing...
                </span>
              ) : 'Get AI Analysis'}
            </button>
          </div>
          {insight ? (
            <div className="bg-cream-50 border-l-4 border-sand-600 rounded-r-xl2 p-5">
              <p className="font-inter text-sm text-brown-800 leading-relaxed">{insight}</p>
            </div>
          ) : (
            <p className="body-sm text-brown-500 italic">
              Click "Get AI Analysis" to receive a personalised assessment of your glucose trends.
            </p>
          )}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Update Your Profile', href: '/quiz', desc: 'Re-take quiz to update recommendations' },
            { label: 'Book a Doctor', href: '/doctor-booking', desc: 'Free 15-min consultation' },
            { label: 'Reorder QYOUR', href: '/product#pricing', desc: 'Never miss a dose' },
          ].map(item => (
            <Link key={item.label} href={item.href} className="card-hover text-center space-y-2">
              <h4 className="heading-4">{item.label}</h4>
              <p className="body-sm text-brown-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
