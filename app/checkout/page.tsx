'use client';

import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from '@/lib/storefront-data';
import { useCart } from '@/components/storefront/cart-provider';
import { formatCurrency } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
        <h1 className="font-display text-4xl text-royal-goldLight">Order confirmation</h1>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
              <h2 className="font-display text-2xl text-royal-goldLight">Contact our concierge</h2>
              <p className="mt-3 text-base leading-7 text-royal-muted">
                No online payment is accepted in this storefront. Please review your selected items, then contact the Royals Kingdom team directly to confirm your order, delivery preference, and final arrangement.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${CONTACT_PHONE}`} className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-burgundy">Call: {CONTACT_PHONE}</a>
                <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border border-royal-gold/45 bg-white/5 px-5 py-3 text-sm font-semibold text-royal-ivory">WhatsApp</a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-royal-gold/45 bg-white/5 px-5 py-3 text-sm font-semibold text-royal-ivory">Email</a>
              </div>
            </div>

            <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
              <h2 className="font-display text-2xl text-royal-goldLight">Selected items</h2>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between gap-3 border-b border-royal-border/60 pb-3 text-sm text-royal-muted">
                    <span>{item.product.name} x {item.quantity}</span>
                    <span>{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] p-5">
            <h2 className="font-display text-2xl text-royal-goldLight">Order summary</h2>
            <div className="mt-4 space-y-3 text-sm text-royal-muted">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>To be confirmed</span></div>
              <div className="mt-3 flex justify-between border-t border-royal-border/60 pt-3 text-base text-royal-ivory"><span>Total</span><span>{formatCurrency(subtotal)}</span></div>
            </div>
            <Link href="/shop" className="mt-6 block rounded-full border border-royal-gold/40 bg-royal-gold/10 px-5 py-3 text-center text-sm font-semibold text-royal-goldLight">Back to shop</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
