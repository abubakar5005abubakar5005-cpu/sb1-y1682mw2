import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BrandLogo } from '@/components/brand-logo';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_30%),linear-gradient(180deg,#1A030E_0%,#12050B_100%)] px-6 py-10 text-royal-ivory md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between rounded-full border border-royal-border/60 bg-white/5 px-5 py-4 shadow-royal backdrop-blur-xl">
          <BrandLogo />
          <nav className="hidden items-center gap-8 text-sm text-royal-muted md:flex">
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>
            <a href="#">Jewelry</a>
            <a href="#">Fashion</a>
            <a href="#">Luxury Gifts</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button size="sm">Shop Now</Button>
          </div>
        </header>

        <section className="grid items-center gap-8 rounded-[32px] border border-royal-border/50 bg-white/5 p-6 shadow-royal backdrop-blur-xl md:grid-cols-2 md:p-10">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-royal-gold/40 bg-royal-gold/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-royal-goldLight">
              Curated excellence
            </span>
            <h1 className="font-display text-5xl leading-none tracking-[-0.04em] text-royal-ivory md:text-7xl">
              Royals Kingdom
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-royal-muted md:text-lg">
              Discover heirloom-worthy pieces, elevated essentials, and prestige gifting curated for those who live beautifully.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Explore Collections</Button>
              <Button variant="secondary" size="lg">
                Concierge Help
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-royal-muted">
              <div>
                <span className="block font-display text-2xl text-royal-goldLight">24/7</span>
                Concierge
              </div>
              <div>
                <span className="block font-display text-2xl text-royal-goldLight">Free</span>
                Shipping Over $250
              </div>
              <div>
                <span className="block font-display text-2xl text-royal-goldLight">4.9/5</span>
                Client Rating
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gold-gradient opacity-20 blur-3xl" />
            <Card className="overflow-hidden border border-royal-gold/30 bg-[linear-gradient(135deg,rgba(26,3,14,0.95),rgba(37,16,23,0.9))] p-0">
              <div className="bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.32),_transparent_35%)] p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-royal-muted">
                  <span>Featured drop</span>
                  <span className="rounded-full border border-royal-gold/40 px-2 py-1 text-royal-goldLight">New</span>
                </div>
                <div className="mt-6 rounded-[24px] border border-royal-gold/25 bg-[linear-gradient(160deg,#201018,#13070d)] p-6">
                  <div className="h-72 rounded-[20px] bg-[radial-gradient(circle_at_20%_20%,rgba(244,232,193,0.7),transparent_20%),linear-gradient(150deg,#3f1b2a_0%,#1b0d16_40%,#0a0a0a_100%)]" />
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-royal-muted">Imperial Edit</p>
                      <h2 className="mt-2 font-display text-3xl text-royal-goldLight">Velvet Crown</h2>
                    </div>
                    <span className="text-xl font-semibold text-royal-goldLight">$1,280</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-royal-muted">Royal Guarantee</p>
            <h3 className="mt-3 font-display text-2xl text-royal-goldLight">Authentic luxury</h3>
            <p className="mt-3 text-sm leading-6 text-royal-muted">Every piece is curated, verified, and presented with elevated service.</p>
          </Card>
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-royal-muted">Fast delivery</p>
            <h3 className="mt-3 font-display text-2xl text-royal-goldLight">Worldwide</h3>
            <p className="mt-3 text-sm leading-6 text-royal-muted">Premium logistics partners ensure secure, graceful delivery.</p>
          </Card>
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-royal-muted">Private assistance</p>
            <h3 className="mt-3 font-display text-2xl text-royal-goldLight">Concierge</h3>
            <p className="mt-3 text-sm leading-6 text-royal-muted">Expert guidance for gifting, styling, and bespoke recommendations.</p>
          </Card>
        </section>

        <section className="mt-10 rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-royal-muted">Stay connected</p>
              <h3 className="mt-2 font-display text-3xl text-royal-goldLight">The Royal Insider</h3>
            </div>
            <div className="w-full max-w-md">
              <div className="flex gap-3">
                <Input placeholder="Enter your email" aria-label="Email" />
                <Button>Join</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
