import Link from 'next/link';
import { useCart } from '@/components/storefront/cart-provider';
import { formatCurrency } from '@/lib/utils';

export function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" className="relative rounded-full border border-royal-gold/45 bg-royal-gold/10 px-4 py-2 text-sm text-royal-goldLight">
      Cart
      {itemCount > 0 && (
        <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-royal-gold text-[10px] font-bold text-royal-burgundy">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
