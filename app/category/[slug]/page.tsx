import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getProductsByCategory } from '@/lib/storefront-data';
import { ProductCard } from '@/components/storefront/product-card';

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
          <div className="mt-6 flex gap-3">
            <Link href="/shop" className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">
              Back to all collections
            </Link>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-royal-border/60 bg-white/5 p-10 text-center text-royal-muted">
            No products are available in this category right now.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
