import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP, getActiveCategoriesWithProducts, getAllActiveProducts } from '@/lib/storefront-data';

export default function HomePage() {
  const categories = getActiveCategoriesWithProducts();
  const products = getAllActiveProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_30%),linear-gradient(180deg,#1A030E_0%,#12050B_100%)] px-4 py-6 text-royal-ivory md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-full border border-royal-border/60 bg-white/5 px-5 py-4 shadow-royal backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="text-royal-goldLight">ROYALS KINGDOM</Link>
            <nav className="hidden items-center gap-8 text-sm text-royal-muted md:flex">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/login" className="rounded-full border border-royal-gold/45 bg-white/5 px-4 py-2 text-sm text-royal-ivory">Sign In</Link>
              <Link href="/cart" className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Cart</Link>
            </div>
          </div>
        </header>

        <section className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-royal-border/50 bg-white/5 p-6 shadow-royal backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-royal-gold/40 bg-royal-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-royal-goldLight">
              luxury commerce, without online payment
            </span>
            <h1 className="font-display text-5xl leading-[0.96] tracking-[-0.06em] text-royal-ivory md:text-7xl">
              Discover Royal pieces, then order directly by contact.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-royal-muted md:text-lg">
              Browse categories, view precise details, compare pricing, and when the item feels right, contact our concierge directly by phone or chatbot for confirmation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-royal-burgundy">Browse collection</Link>
              <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border border-royal-gold/45 bg-white/5 px-6 py-3 text-sm font-semibold text-royal-ivory">Chat with advisor</a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-royal-muted">
              <div>
                <span className="block font-display text-2xl text-royal-goldLight">{CONTACT_PHONE}</span>
                Direct contact line
              </div>
              <div>
                <span className="block font-display text-2xl text-royal-goldLight">{products.length}</span>
                Active products
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gold-gradient opacity-20 blur-3xl" />
            <div className="rounded-[28px] border border-royal-gold/30 bg-[linear-gradient(135deg,rgba(26,3,14,0.95),rgba(37,16,23,0.9))] p-5 shadow-royal">
              <div className="rounded-[24px] border border-royal-gold/30 bg-[radial-gradient(circle_at_20%_20%,rgba(244,232,193,0.5),transparent_24%),linear-gradient(135deg,#2a1018,#12070d)] p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-royal-muted">
                  <span>Featured piece</span>
                  <span className="rounded-full border border-royal-gold/40 px-2 py-1 text-royal-goldLight">Royal pick</span>
                </div>
                <div className="mt-6 h-72 rounded-[20px] bg-[url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Imperial Edit</p>
                    <h2 className="mt-2 font-display text-3xl text-royal-goldLight">Velvet Crown Set</h2>
                  </div>
                  <span className="text-xl font-semibold text-royal-goldLight">$1,280</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="overflow-hidden rounded-[24px] border border-royal-border/60 bg-[rgba(255,255,255,0.03)] shadow-royal transition-transform hover:-translate-y-1">
              <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url('${category.imageUrl}')` }} />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-royal-muted">Collection</p>
                <h3 className="mt-2 font-display text-2xl text-royal-goldLight">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-royal-muted">{category.description}</p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Direct ordering</p>
              <h3 className="mt-2 font-display text-3xl text-royal-goldLight">Need a purchase guide?</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${CONTACT_PHONE}`} className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-burgundy">Call now</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-royal-gold/45 bg-white/5 px-5 py-3 text-sm font-semibold text-royal-ivory">Email us</a>
            </div>
          </div>
          <p className="text-base leading-7 text-royal-muted">
            If you agree to a product, details, price and specifications, contact our team directly by phone or use the concierge chat to confirm the item before final order arrangement. No online payment is processed in this storefront.
          </p>
        </section>
      </div>
    </main>
  );
}
