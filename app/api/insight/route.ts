import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { entries } = await req.json()

  const userPrompt = `Analyse this patient's glucose readings and provide a warm, encouraging health insight.

Glucose readings (fasting mg/dL):
${entries.map((e: { date: string; fasting: number; postMeal?: number }) =>
  `${e.date}: Fasting ${e.fasting}${e.postMeal ? `, Post-meal ${e.postMeal}` : ''}`
).join('\n')}

Write 2-3 sentences that:
1. Acknowledge the specific trend (improving/stable/needs attention)
2. Explain what the numbers mean clinically in simple terms
3. Give one specific actionable recommendation

Tone: Warm, encouraging, like a supportive doctor friend. Never alarming. Always hopeful.
Length: 2-3 sentences maximum. Plain text only, no markdown.`

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: 'You are a compassionate clinical health AI specialising in diabetes management for Indian patients. Keep responses brief, warm, and actionable.' },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.6,
      max_tokens: 256,
    }),
  })

  const data = await response.json()
  const insight = data.choices?.[0]?.message?.content ?? "Your readings show steady progress — keep up the consistent routine with QYOUR and your dietary adjustments."
  return NextResponse.json({ insight })
}
