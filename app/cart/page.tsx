import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
        <h1 className="font-display text-4xl text-royal-goldLight">Your cart</h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-4">
                <div>
                  <div className="font-display text-2xl text-royal-goldLight">Velvet Crown Set</div>
                  <div className="mt-1 text-sm text-royal-muted">Qty: 1 • Premium delivery</div>
                </div>
                <div className="text-xl font-semibold text-royal-ivory">$1,280</div>
              </div>
            ))}
          </div>

          <div className="rounded-[22px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] p-5">
            <h2 className="font-display text-2xl text-royal-goldLight">Summary</h2>
            <div className="mt-4 space-y-3 text-sm text-royal-muted">
              <div className="flex justify-between"><span>Subtotal</span><span>$2,560</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between"><span>Tax</span><span>$205</span></div>
              <div className="mt-3 flex justify-between border-t border-royal-border/60 pt-3 text-base text-royal-ivory"><span>Total</span><span>$2,765</span></div>
            </div>
            <Link href="/checkout" className="mt-6 block rounded-full bg-gold-gradient px-5 py-3 text-center font-semibold text-royal-burgundy">
              Secure checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
