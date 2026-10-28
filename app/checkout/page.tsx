import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
        <h1 className="font-display text-4xl text-royal-goldLight">Checkout</h1>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
              <h2 className="font-display text-2xl text-royal-goldLight">Shipping information</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="h-12 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory" placeholder="First name" />
                <input className="h-12 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory" placeholder="Last name" />
                <input className="h-12 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory md:col-span-2" placeholder="Address" />
                <input className="h-12 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory" placeholder="City" />
                <input className="h-12 rounded-full border border-royal-border/60 bg-[rgba(255,255,255,0.02)] px-4 text-sm text-royal-ivory" placeholder="Country" />
              </div>
            </div>

            <div className="rounded-[20px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-5">
              <h2 className="font-display text-2xl text-royal-goldLight">Payment</h2>
              <div className="mt-4 rounded-[16px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] p-4 text-sm text-royal-muted">
                Stripe integration ready for secure checkout flow.
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] p-5">
            <h2 className="font-display text-2xl text-royal-goldLight">Order summary</h2>
            <div className="mt-4 space-y-3 text-sm text-royal-muted">
              <div className="flex justify-between"><span>Velvet Crown Set</span><span>$1,280</span></div>
              <div className="flex justify-between"><span>Majestic Gold Signet</span><span>$860</span></div>
              <div className="mt-3 flex justify-between border-t border-royal-border/60 pt-3 text-base text-royal-ivory"><span>Total</span><span>$2,140</span></div>
            </div>
            <button className="mt-6 w-full rounded-full bg-gold-gradient px-5 py-3 font-semibold text-royal-burgundy">
              Pay now
            </button>
            <Link href="/shop" className="mt-4 block text-center text-sm text-royal-goldLight">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
