import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message || 'Help me choose a gift';

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      reply: 'Your royal advisor is ready. Based on your request, I recommend exploring our Heritage Jewelry and Luxury Gifts collections for elegant, gift-worthy options.',
    });
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are the Royal Advisor for Royals Kingdom. Help users find premium products, gifts, and fashion recommendations with elegant, polished, luxury-brand language.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'I can help you with a curated recommendation.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('OpenAI chatbot error:', error);
    return NextResponse.json({
      reply: 'I am ready to help. Consider our Imperial Fashion, Heritage Jewelry, or Royal Living collections for a gift that feels truly ceremonial.',
    });
  }
}
