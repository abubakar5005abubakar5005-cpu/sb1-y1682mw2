import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from '@/lib/storefront-data';

export default function AdminPage() {
  const adminAccess = process.env.ADMIN_ACCESS_TOKEN;
  if (!adminAccess) {
    redirect('/');
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-royal-ivory">
      <div className="rounded-[28px] border border-royal-border/60 bg-white/5 p-8 shadow-royal">
        <h1 className="font-display text-4xl text-royal-goldLight">Royal Admin Console</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-royal-muted">Active catalog</p>
            <p className="mt-3 font-display text-4xl text-royal-ivory">7</p>
          </div>
          <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-royal-muted">Pending inquiries</p>
            <p className="mt-3 font-display text-4xl text-royal-ivory">12</p>
          </div>
          <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Contact line</p>
            <p className="mt-3 font-display text-2xl text-royal-ivory">{CONTACT_PHONE}</p>
          </div>
        </div>

        <div className="mt-8 rounded-[22px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] p-6">
          <h2 className="font-display text-3xl text-royal-goldLight">Sales support</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`tel:${CONTACT_PHONE}`} className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Call sales</a>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">WhatsApp</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Email inquiry</a>
          </div>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <Link href="/shop" className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-5 py-3 text-sm font-semibold text-royal-goldLight">View storefront</Link>
          <Link href="/" className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-burgundy">Back home</Link>
        </div>
      </div>
    </main>
  );
}
