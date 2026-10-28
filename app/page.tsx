import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BrandLogo } from '@/components/brand-logo';
import { Crown, Gem, ShieldCheck, Sparkles, Truck, Zap } from 'lucide-react';

const featuredCollections = [
  {
    name: 'Imperial Fashion',
    description: 'Tailored excellence for grand entrances and everyday opulence.',
    accent: 'Regal silhouettes',
  },
  {
    name: 'Heritage Jewelry',
    description: 'Gold heirlooms and statement stones for the modern monarchy.',
    accent: 'Limited editions',
  },
  {
    name: 'Royal Living',
    description: 'Luxury objects designed for refined homes and indulgent rituals.',
    accent: 'Curated essentials',
  },
];

const perks = [
  { icon: Truck, title: 'White-glove delivery', text: 'Secure worldwide shipping with discreet premium handling.' },
  { icon: ShieldCheck, title: 'Protected checkout', text: 'Encrypted transactions and trusted payment infrastructure.' },
  { icon: Sparkles, title: 'Concierge styling', text: 'Royal advisors guide gifts, wardrobe, and occasion gifting.' },
];

const categories = ['Fashion', 'Jewelry', 'Beauty', 'Home', 'Watches', 'Accessories'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_30%),linear-gradient(180deg,#1A030E_0%,#12050B_100%)] px-4 py-6 text-royal-ivory md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-full border border-royal-border/60 bg-white/5 px-5 py-4 shadow-royal backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
          </div>
        </header>

        <section className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-royal-border/50 bg-white/5 p-6 shadow-royal backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-royal-gold/40 bg-royal-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-royal-goldLight">
              Curated excellence
            </span>
            <h1 className="font-display text-5xl leading-[0.96] tracking-[-0.06em] text-royal-ivory md:text-7xl">
              Step into the kingdom of elevated living.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-royal-muted md:text-lg">
              Royals Kingdom is the premium multi-mega emporium for iconic fashion, heirloom jewelry, and breathtaking lifestyle essentials shaped for regal living.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Explore Collections</Button>
              <Button variant="secondary" size="lg">
                Concierge Help
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-royal-muted">
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
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-royal-muted">
                  <span>Featured drop</span>
                  <span className="rounded-full border border-royal-gold/40 px-2 py-1 text-royal-goldLight">New</span>
                </div>

                <div className="mt-6 rounded-[24px] border border-royal-gold/25 bg-[linear-gradient(160deg,#201018,#13070d)] p-6">
                  <div className="h-72 rounded-[20px] bg-[radial-gradient(circle_at_20%_20%,rgba(244,232,193,0.7),transparent_20%),linear-gradient(150deg,#3f1b2a_0%,#1b0d16_40%,#0a0a0a_100%)]" />
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Imperial Edit</p>
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
          {perks.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-royal-gold/40 bg-royal-gold/10 text-royal-goldLight">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Royal service</p>
              <h3 className="mt-3 font-display text-2xl text-royal-goldLight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-royal-muted">{text}</p>
            </Card>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Signature collections</p>
              <h3 className="mt-2 font-display text-3xl text-royal-goldLight">A jewel-box of curated categories</h3>
            </div>
            <Button variant="secondary">Browse all</Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredCollections.map((collection) => (
              <Card key={collection.name} className="group overflow-hidden p-0">
                <div className="h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(244,232,193,0.32),transparent_28%),linear-gradient(150deg,#2a1018,#12070d)] p-5">
                  <div className="flex h-full items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-royal-muted">Collection</p>
                      <h4 className="mt-2 font-display text-2xl text-royal-goldLight">{collection.name}</h4>
                    </div>
                    <div className="rounded-full border border-royal-gold/35 bg-royal-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-royal-goldLight">
                      {collection.accent}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-royal-muted">{collection.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-royal-goldLight">
                    Discover now <Zap className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-royal-gold/40 bg-royal-gold/10 text-royal-goldLight">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Brand story</p>
                <h3 className="font-display text-3xl text-royal-goldLight">The Royal Heritage</h3>
              </div>
            </div>

            <p className="text-base leading-7 text-royal-muted">
              Royals Kingdom was created to celebrate wearable prestige, elevated living, and memorable gifting. Every collection is designed to feel timeless, luxurious, and deeply intentional.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Luxury craftsmanship', 'Private shopping consultation', 'Curated gift curation', 'Trusted global support'].map((item) => (
                <div key={item} className="rounded-2xl border border-royal-border/50 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-royal-ivory">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-royal-border/60 bg-[linear-gradient(135deg,rgba(26,3,14,0.92),rgba(14,8,12,0.92))] p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Shop by category</p>
                <h3 className="mt-2 font-display text-3xl text-royal-goldLight">Explore the kingdom</h3>
              </div>
              <Gem className="h-7 w-7 text-royal-goldLight" />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-royal-gold/35 bg-royal-gold/10 px-3 py-2 text-xs uppercase tracking-[0.12em] text-royal-goldLight">
                  {category}
                </span>
              ))}
            </div>

            <div className="mt-7 rounded-[22px] border border-royal-border/50 bg-[rgba(255,255,255,0.03)] p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Editor’s note</p>
              <p className="mt-3 text-base leading-7 text-royal-muted">
                “Luxury is not just what you wear—but how you feel carrying it.”
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Stay connected</p>
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

        <footer className="mt-10 rounded-[28px] border border-royal-border/60 bg-[rgba(10,10,10,0.76)] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <BrandLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-royal-muted">
                Curating prestige essentials, refined gifting, and luxurious everyday rituals for those who live beautifully.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl text-royal-goldLight">Shop</h4>
              <ul className="mt-4 space-y-3 text-sm text-royal-muted">
                <li>New Arrivals</li>
                <li>Jewelry</li>
                <li>Fashion</li>
                <li>Home</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl text-royal-goldLight">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-royal-muted">
                <li>About</li>
                <li>Concierge</li>
                <li>Gift Registry</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl text-royal-goldLight">Brand Credits</h4>
              <p className="mt-4 text-sm leading-7 text-royal-muted">
                Designed and Branded by Wajji, Armi, Sarmi, and Bakr.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-royal-border/50 pt-4 text-xs uppercase tracking-[0.18em] text-royal-muted">
            © 2026 Royals Kingdom • Terms • Privacy • Refund Policy
          </div>
        </footer>
      </div>
    </main>
  );
}
