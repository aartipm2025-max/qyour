'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const GREETING = `Hi! I'm QYOUR's AI health assistant. I can help you with:
• Understanding your diabetes better
• How QYOUR supplement works
• Diet and lifestyle tips
• Booking a doctor consultation

What would you like to know?`

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: GREETING },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    const updated = [...messages, { role: 'user' as const, content: text }]
    setMessages(updated)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I had trouble connecting. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button — "Ask me anything" */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'bg-black text-white shadow-modal',
          'flex items-center gap-2',
          'px-5 py-3 rounded-pill',
          'font-inter text-sm font-medium tracking-wide',
          'transition-all duration-300 hover:bg-neutral-800 hover:scale-105',
        )}
      >
        {open ? (
          <>
            <X size={16} />
            <span>Close</span>
          </>
        ) : (
          <span>Ask me anything</span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-xl3 shadow-modal flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-black px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="font-inter text-xs font-bold text-white">Q</span>
            </div>
            <div>
              <p className="font-inter text-sm font-semibold text-white">QYOUR Health Assistant</p>
              <p className="font-inter text-xs text-white/70">AI-powered • Always available</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80">
            {messages.map((msg, i) => (
              <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div
                  className={cn(
                    'max-w-[80%] px-4 py-2.5 rounded-xl2 text-sm font-inter leading-relaxed whitespace-pre-line',
                    msg.role === 'user'
                      ? 'bg-black text-white rounded-br-sm'
                      : 'bg-cream-100 text-black rounded-bl-sm',
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-cream-100 px-4 py-2.5 rounded-xl2 rounded-bl-sm">
                  <Loader2 size={16} className="text-black animate-spin" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-cream-200 px-4 py-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about diabetes or QYOUR..."
              className="flex-1 bg-cream-50 border border-cream-200 rounded-pill px-4 py-2 text-sm font-inter text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-neutral-800 disabled:opacity-40 transition-colors shrink-0"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
