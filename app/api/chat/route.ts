import { NextRequest, NextResponse } from 'next/server'

const SYSTEM = `You are QYOUR's compassionate health assistant for a premium natural diabetes supplement brand.

QYOUR helps newly diagnosed Type 2 diabetics (HbA1c 5.7–7.5%) reduce blood sugar naturally before medications become necessary. Clinical trial: 0.9% avg HbA1c reduction in 50 patients over 90 days.

Product: ₹699/month | ₹1,799/quarter | ₹6,299/annual. 100% natural, AYUSH registered, GMP certified.

Your role:
- Answer diabetes questions simply and compassionately (never fear-based)
- Explain how QYOUR works (natural ingredients, dosage, timeline: 90 days for full results)
- Give practical Indian diet tips (rotis, dal, sabzi — adapt to Indian context)
- Recommend doctor consultation for medical decisions
- Suggest booking a free 15-min consultation via /doctor-booking

Tone: Warm, reassuring, knowledgeable friend — like a trusted family doctor.
Response length: 2-4 short paragraphs or bullet points. Never overwhelming.
Language: Simple English. Avoid medical jargon unless explained.

NEVER: diagnose, prescribe, replace medical advice, make guarantees, disparage medications.`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const groqMessages = [
    { role: 'system', content: SYSTEM },
    ...messages
      .filter((m: { role: string }) => m.role !== 'system')
      .map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
  ]

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: groqMessages,
      temperature: 0.7,
      max_tokens: 512,
    }),
  })

  const data = await response.json()
  const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I could not process your request right now.'
  return NextResponse.json({ reply })
}
