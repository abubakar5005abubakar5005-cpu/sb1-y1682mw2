import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { getActiveCategoriesWithProducts } from '@/lib/storefront-data';

export default async function Navigation() {
  const categories = getActiveCategoriesWithProducts();

  return (
    <header className="mb-8 rounded-full border border-royal-border/60 bg-white/5 px-5 py-4 shadow-royal backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-royal-muted md:flex">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/checkout" className="rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
