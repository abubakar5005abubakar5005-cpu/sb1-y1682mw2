import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/storefront-data';
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
          <div className="rounded-[24px] border border-royal-border/60 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_26%),linear-gradient(135deg,#2a1018,#13070d)] p-6">
            <div className="flex h-[420px] items-end justify-between rounded-[18px] border border-royal-gold/35 bg-[rgba(0,0,0,0.16)] p-6">
              <span className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-royal-goldLight">
                {product.categorySlug}
              </span>
              <span className="text-sm text-royal-goldLight">★ {product.rating}</span>
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
              <Link href="/checkout" className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-burgundy">
                Add to cart
              </Link>
              <Link href="/shop" className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-5 py-3 text-sm font-semibold text-royal-goldLight">
                Continue shopping
              </Link>
            </div>

            <div className="mt-8 rounded-[20px] border border-royal-border/60 bg-white/5 p-5 text-sm leading-7 text-royal-muted">
              <p className="font-medium text-royal-ivory">Included:</p>
              <ul className="mt-2 space-y-2">
                <li>• Premium gift-ready presentation</li>
                <li>• Royal concierge assistance</li>
                <li>• Secure checkout and insured delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
