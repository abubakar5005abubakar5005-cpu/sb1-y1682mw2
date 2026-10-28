import { BrandLogo } from '@/components/brand-logo';

export default function BrandCreditsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-royal-ivory">
      <article className="rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
        <BrandLogo />
        <h1 className="mt-6 font-display text-4xl text-royal-goldLight">Brand Credits</h1>
        <p className="mt-5 text-base leading-7 text-royal-muted">
          Designed and Branded by Wajji, Armi, Sarmi, and Bakr.
        </p>
        <p className="mt-4 text-base leading-7 text-royal-muted">
          The Royals Kingdom identity reflects a premium visual language built around heritage, trust, refined luxury, and modern e-commerce excellence.
        </p>
      </article>
    </main>
  );
}
