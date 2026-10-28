'use client';

import Link from 'next/link';
import { useCart } from '@/components/storefront/cart-provider';
import { formatCurrency } from '@/lib/utils';
import type { Product } from '@/lib/storefront-data';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-royal-ivory">
        <div className="rounded-[28px] border border-royal-border/60 bg-white/5 p-8 text-center">
          <h1 className="font-display text-4xl text-royal-goldLight">Your cart is empty</h1>
          <p className="mt-4 text-base leading-7 text-royal-muted">Browse the collection and save items you want to order by direct contact.</p>
          <Link href="/shop" className="mt-6 inline-block rounded-full bg-gold-gradient px-5 py-3 font-semibold text-royal-burgundy">Browse collection</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
        <h1 className="font-display text-4xl text-royal-goldLight">Your cart</h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.productId} className="flex flex-col gap-4 rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-display text-2xl text-royal-goldLight">{item.product.name}</div>
                  <div className="mt-1 text-sm text-royal-muted">{item.product.specs[0]?.value || 'Royal limited edition'}</div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.productId, Number(event.target.value))}
                    className="h-10 w-16 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-3 text-center text-sm text-royal-ivory"
                  />
                  <div className="text-xl font-semibold text-royal-ivory">{formatCurrency(item.product.price * item.quantity)}</div>
                  <button onClick={() => removeFromCart(item.productId)} className="rounded-full border border-royal-gold/40 px-3 py-2 text-xs text-royal-goldLight">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[22px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] p-5">
            <h2 className="font-display text-2xl text-royal-goldLight">Summary</h2>
            <div className="mt-4 space-y-3 text-sm text-royal-muted">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Quoted after contact</span></div>
              <div className="mt-3 flex justify-between border-t border-royal-border/60 pt-3 text-base text-royal-ivory"><span>Total</span><span>{formatCurrency(subtotal)}</span></div>
            </div>
            <Link href="/checkout" className="mt-6 block rounded-full bg-gold-gradient px-5 py-3 text-center font-semibold text-royal-burgundy">
              Confirm via contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
