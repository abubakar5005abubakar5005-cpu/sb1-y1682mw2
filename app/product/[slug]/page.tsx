import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT_PHONE, CONTACT_WHATSAPP, getProductBySlug } from '@/lib/storefront-data';
import { formatCurrency } from '@/lib/utils';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="h-[420px] rounded-[22px] border border-royal-border/60 bg-cover bg-center" style={{ backgroundImage: `url('${product.imageUrl}')` }} />
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(0, 2).map((image) => (
                <div key={image} className="h-32 rounded-[18px] border border-royal-border/60 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">Signature item</p>
            <h1 className="mt-2 font-display text-4xl text-royal-goldLight">{product.name}</h1>
            <p className="mt-4 text-base leading-7 text-royal-muted">{product.description}</p>

            <div className="mt-6 flex items-end gap-4">
              <span className="font-display text-4xl text-royal-ivory">{formatCurrency(product.price)}</span>
              {product.compareAt && <span className="text-lg text-royal-muted line-through">{formatCurrency(product.compareAt)}</span>}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${CONTACT_PHONE}`} className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-burgundy">Contact to buy</a>
              <a href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border border-royal-gold/45 bg-white/5 px-5 py-3 text-sm font-semibold text-royal-ivory">Chat on WhatsApp</a>
            </div>

            <div className="mt-8 rounded-[20px] border border-royal-border/60 bg-white/5 p-5 text-sm leading-7 text-royal-muted">
              <p className="font-medium text-royal-ivory">Product specifications</p>
              <ul className="mt-2 space-y-2">
                {product.specs.map((spec) => (
                  <li key={spec.label}><span className="text-royal-goldLight">{spec.label}:</span> {spec.value}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <Link href="/shop" className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">Continue shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
