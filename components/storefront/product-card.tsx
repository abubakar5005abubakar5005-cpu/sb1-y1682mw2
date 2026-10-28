import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import type { Product } from '@/lib/storefront-data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-royal-border/60 bg-[rgba(255,255,255,0.02)] shadow-royal transition-transform hover:-translate-y-1">
      <div className="h-64 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.28),_transparent_28%),linear-gradient(135deg,#2a1018,#13070d)] p-4">
        <div className="flex h-full items-end justify-between rounded-[18px] border border-royal-gold/30 bg-[rgba(0,0,0,0.16)] p-4">
          <span className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-royal-goldLight">
            {product.categorySlug}
          </span>
          <span className="text-sm text-royal-goldLight">★ {product.rating}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl text-royal-goldLight">{product.name}</h3>
          <span className="text-sm text-royal-muted">{product.reviewCount} reviews</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-royal-muted">{product.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="font-display text-2xl text-royal-ivory">{formatCurrency(product.price)}</div>
            {product.compareAt && (
              <div className="text-sm text-royal-muted line-through">{formatCurrency(product.compareAt)}</div>
            )}
          </div>
          <Link href={`/product/${product.slug}`} className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm font-medium text-royal-goldLight">
            View item
          </Link>
        </div>
      </div>
    </article>
  );
}
