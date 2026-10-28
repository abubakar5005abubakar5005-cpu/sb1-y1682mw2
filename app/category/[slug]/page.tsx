import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT_PHONE, CONTACT_WHATSAPP, getCategoryBySlug, getProductsByCategory } from '@/lib/storefront-data';
import { formatCurrency } from '@/lib/utils';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[28px] border border-royal-border/60 bg-white/5 p-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Collection</p>
          <h1 className="mt-2 font-display text-4xl text-royal-goldLight">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-royal-muted">{category.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Back to all collections</Link>
            <a href={`tel:${CONTACT_PHONE}`} className="rounded-full border border-royal-gold/40 bg-white/5 px-4 py-2 text-sm text-royal-ivory">Call to order</a>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border border-royal-gold/40 bg-white/5 px-4 py-2 text-sm text-royal-ivory">WhatsApp</a>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-royal-border/60 bg-white/5 p-10 text-center text-royal-muted">
            No products are available in this category right now.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-[24px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] shadow-royal">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${product.imageUrl}')` }} />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-royal-goldLight">{product.name}</h3>
                    <span className="text-sm text-royal-muted">★ {product.rating}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-royal-muted">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="font-display text-2xl text-royal-ivory">{formatCurrency(product.price)}</div>
                      {product.compareAt && <div className="text-sm text-royal-muted line-through">{formatCurrency(product.compareAt)}</div>}
                    </div>
                    <Link href={`/product/${product.slug}`} className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Details</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
