import Link from 'next/link';
import { getAllActiveProducts, getActiveCategoriesWithProducts } from '@/lib/storefront-data';
import { ProductCard } from '@/components/storefront/product-card';

export default function ShopPage() {
  const categories = getActiveCategoriesWithProducts();
  const products = getAllActiveProducts();

  return (
    <main className="min-h-screen px-4 py-8 text-royal-ivory md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-royal-border/60 bg-white/5 p-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-royal-muted">The empire</p>
            <h1 className="mt-2 font-display text-4xl text-royal-goldLight">Curated collection</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-full border border-royal-gold/40 bg-royal-gold/10 px-3 py-2 text-xs uppercase tracking-[0.12em] text-royal-goldLight">
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
