import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { answers } = await req.json()

  const userPrompt = `You are QYOUR's clinical AI. Based on this patient's quiz answers, generate a personalised diabetes management plan.

Patient answers:
${JSON.stringify(answers, null, 2)}

Respond with valid JSON only (no markdown, no explanation outside JSON):
{
  "dosage": "specific dosage instruction for QYOUR supplement",
  "timeline": "realistic timeline for HbA1c improvement based on their profile",
  "dietTips": ["4-5 specific Indian diet recommendations"],
  "exerciseTips": ["3-4 specific exercise recommendations appropriate to their activity level"],
  "message": "2-3 sentence personalised message addressing their specific situation warmly",
  "urgency": "low|medium|high"
}

Be specific, realistic, warm, and India-appropriate. Reference their specific answers.`

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: 'You are a clinical health AI specialising in diabetes management. Always respond with valid JSON only.' },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.5,
      max_tokens: 1024,
    }),
  })

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content ?? '{}'

  try {
    const cleaned = text.replace(/```json\n?|\n?```/g, '').trim()
    return NextResponse.json(JSON.parse(cleaned))
  } catch {
    return NextResponse.json({
      dosage: '2 capsules twice daily with meals',
      timeline: '90 days for measurable HbA1c improvement',
      dietTips: [
        'Reduce refined carbohydrates — swap white rice for brown rice or millets',
        'Include more fibre-rich vegetables like bitter gourd, fenugreek, and leafy greens',
        'Choose whole grain roti over maida-based breads',
        'Limit sugary beverages — opt for chaas or plain water',
      ],
      exerciseTips: [
        '30-minute brisk walk daily — morning is ideal for blood sugar regulation',
        'Post-meal 10-minute walks significantly reduce glucose spikes',
        'Yoga or light stretching 3× per week helps reduce cortisol and improve insulin sensitivity',
      ],
      message: 'Based on your profile, QYOUR is well-suited for your current stage of diabetes management. With consistent use and the lifestyle adjustments outlined below, you can expect meaningful improvement in your HbA1c within 90 days.',
      urgency: 'medium',
    })
  }
}
