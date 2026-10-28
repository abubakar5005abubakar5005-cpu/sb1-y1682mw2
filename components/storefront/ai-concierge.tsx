'use client';

import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  id: number;
  role: 'assistant' | 'user';
  content: string;
};

export function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'Good evening, Your Highness. I can help you find the perfect royal gift, essential, or statement piece.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', content: input } as const;
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const payload = await response.json();
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: 'assistant', content: payload.reply || 'I can help you find a masterpiece worthy of your collection.' },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { id: Date.now() + 2, role: 'assistant', content: 'My royal advisor is currently unavailable. Please try again in a moment.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[360px] overflow-hidden rounded-[26px] border border-royal-gold/35 bg-[rgba(26,3,14,0.95)] shadow-royal backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-royal-border/60 bg-[rgba(255,255,255,0.03)] px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-royal-muted">Royal advisor</p>
              <h4 className="font-display text-lg text-royal-goldLight">Concierge</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full border border-royal-gold/40 p-2 text-royal-goldLight">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[340px] space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'user' ? 'ml-auto max-w-[80%] rounded-2xl bg-royal-gold/15 p-3 text-sm text-royal-ivory' : 'max-w-[80%] rounded-2xl border border-royal-border/60 bg-white/5 p-3 text-sm text-royal-muted'}
              >
                {message.content}
              </div>
            ))}
            {isLoading && <div className="max-w-[80%] rounded-2xl border border-royal-border/60 bg-white/5 p-3 text-sm text-royal-muted">Thinking...</div>}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask for a gift recommendation..."
              className="h-11 flex-1 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory outline-none placeholder:text-royal-muted"
            />
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-royal-burgundy" type="submit">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-royal-burgundy shadow-royal transition-transform hover:scale-105"
          aria-label="Open royal concierge"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}
    </div>
  );
}
