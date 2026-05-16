'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, AlertCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Toast = {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  message?: string
}

let toastListeners: ((toast: Toast) => void)[] = []

export function toast(t: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).slice(2)
  toastListeners.forEach(fn => fn({ ...t, id }))
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handler = (t: Toast) => {
      setToasts(prev => [...prev, t])
      setTimeout(() => setToasts(prev => prev.filter(x => x.id !== t.id)), 4000)
    }
    toastListeners.push(handler)
    return () => { toastListeners = toastListeners.filter(fn => fn !== handler) }
  }, [])

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className={cn(
            'pointer-events-auto flex items-start gap-3 px-5 py-4 rounded-xl3 shadow-modal max-w-sm animate-fade-up',
            t.type === 'success' && 'bg-white border-l-4 border-sage-600',
            t.type === 'error'   && 'bg-white border-l-4 border-coral-600',
            t.type === 'info'    && 'bg-white border-l-4 border-sand-600',
          )}
        >
          {t.type === 'success' && <CheckCircle size={20} className="text-sage-600 mt-0.5 shrink-0" />}
          {t.type === 'error'   && <AlertCircle size={20} className="text-coral-600 mt-0.5 shrink-0" />}
          {t.type === 'info'    && <AlertCircle size={20} className="text-sand-600 mt-0.5 shrink-0" />}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-sm font-semibold text-brown-900">{t.title}</p>
            {t.message && <p className="font-inter text-sm text-brown-600 mt-0.5">{t.message}</p>}
          </div>
          <button
            onClick={() => setToasts(prev => prev.filter(x => x.id !== t.id))}
            className="text-taupe-600 hover:text-brown-900 transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
