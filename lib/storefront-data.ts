export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+971 50 000 0000';
export const CONTACT_WHATSAPP = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, '')}`;
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@royalskingdom.com';

export type ProductSpec = {
  label: string;
  value: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  accent: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAt?: number;
  categorySlug: string;
  imageUrl: string;
  images: string[];
  status: 'ACTIVE' | 'ARCHIVED' | 'DRAFT';
  featured: boolean;
  rating: number;
  reviewCount: number;
  specs: ProductSpec[];
};

const categories: Category[] = [
  {
    id: 'cat-fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Luxury tailoring and grand looks for every occasion.',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    accent: 'Regal silhouettes',
  },
  {
    id: 'cat-jewelry',
    name: 'Jewelry',
    slug: 'jewelry',
    description: 'Heirloom pieces and statement gold for your royal wardrobe.',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    accent: 'Limited editions',
  },
  {
    id: 'cat-home',
    name: 'Home',
    slug: 'home',
    description: 'Elevated pieces for refined interiors and daily rituals.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    accent: 'Curated essentials',
  },
  {
    id: 'cat-accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Final touches that sharpen every luxurious presence.',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    accent: 'Statement finishing',
  },
  {
    id: 'cat-archive',
    name: 'Archive',
    slug: 'archive',
    description: 'Former collection currently not available for purchase.',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
    accent: 'Private access',
  },
];

const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Velvet Crown Set',
    slug: 'velvet-crown-set',
    description: 'A dramatic statement set designed for signature evenings and royal events.',
    price: 1280,
    compareAt: 1499,
    categorySlug: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: true,
    rating: 4.9,
    reviewCount: 318,
    specs: [
      { label: 'Material', value: 'Silk blend with velvet trim' },
      { label: 'Fit', value: 'Tailored luxury fit' },
      { label: 'Origin', value: 'Made in limited artisan batch' },
    ],
  },
  {
    id: 'prod-2',
    name: 'Majestic Gold Signet',
    slug: 'majestic-gold-signet',
    description: 'Champagne gold crafted for enduring presence and distinguished gifting.',
    price: 860,
    compareAt: 990,
    categorySlug: 'jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: true,
    rating: 5,
    reviewCount: 244,
    specs: [
      { label: 'Material', value: '18k gold plated finish' },
      { label: 'Weight', value: '120g' },
      { label: 'Packaging', value: 'Luxury gift box included' },
    ],
  },
  {
    id: 'prod-3',
    name: 'Royal Silk Residence Lamp',
    slug: 'royal-silk-residence-lamp',
    description: 'Ambient elegance inspired by palace living and modern comfort.',
    price: 640,
    compareAt: 760,
    categorySlug: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: false,
    rating: 4.8,
    reviewCount: 162,
    specs: [
      { label: 'Material', value: 'Brushed metal and silk shade' },
      { label: 'Finish', value: 'Champagne gold' },
      { label: 'Power', value: 'Warm ambient LED lighting' },
    ],
  },
  {
    id: 'prod-4',
    name: 'Imperial Leather Trunk',
    slug: 'imperial-leather-trunk',
    description: 'A luxurious statement piece designed for timeless travel and storage.',
    price: 1180,
    compareAt: 1380,
    categorySlug: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: true,
    rating: 4.9,
    reviewCount: 201,
    specs: [
      { label: 'Material', value: 'Italian leather' },
      { label: 'Storage', value: 'Dual-compartment interior' },
      { label: 'Style', value: 'Made for heritage travel' },
    ],
  },
  {
    id: 'prod-5',
    name: 'Crown Nocturne Watch',
    slug: 'crown-nocturne-watch',
    description: 'A refined timepiece with deep metallic detailing and confident evening presence.',
    price: 1790,
    compareAt: 1990,
    categorySlug: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: false,
    rating: 4.7,
    reviewCount: 97,
    specs: [
      { label: 'Movement', value: 'Swiss quartz precision' },
      { label: 'Case', value: 'Polished gold tone case' },
      { label: 'Water resistance', value: '5 ATM' },
    ],
  },
  {
    id: 'prod-6',
    name: 'Cinder Rose Scent',
    slug: 'cinder-rose-scent',
    description: 'A regal fragrance experience with soft florals and warm signature wood notes.',
    price: 340,
    compareAt: 420,
    categorySlug: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: false,
    rating: 4.8,
    reviewCount: 110,
    specs: [
      { label: 'Fragrance family', value: 'Floral woody amber' },
      { label: 'Volume', value: '100ml' },
      { label: 'Mood', value: 'Warm and ceremonial' },
    ],
  },
  {
    id: 'prod-7',
    name: 'Legacy Silk Scarf',
    slug: 'legacy-silk-scarf',
    description: 'An heirloom-inspired layer that elevates formality with a whisper of color.',
    price: 250,
    compareAt: 320,
    categorySlug: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ACTIVE',
    featured: false,
    rating: 4.6,
    reviewCount: 74,
    specs: [
      { label: 'Material', value: 'Premium silk blend' },
      { label: 'Finish', value: 'Hand-rolled edges' },
      { label: 'Care', value: 'Dry clean recommended' },
    ],
  },
  {
    id: 'prod-8',
    name: 'Imperial Baguette Kit',
    slug: 'imperial-baguette-kit',
    description: 'Limited collector set designed for a luxe and unforgettable gifting moment.',
    price: 560,
    compareAt: 680,
    categorySlug: 'archive',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'ARCHIVED',
    featured: false,
    rating: 4.4,
    reviewCount: 32,
    specs: [
      { label: 'Status', value: 'Private archive release' },
      { label: 'Availability', value: 'Not currently for sale' },
    ],
  },
];

export function getAllCategories() {
  return categories.filter((category) => category.isActive);
}

export function getActiveCategoriesWithProducts() {
  return categories.filter((category) => category.isActive && category.slug !== 'archive');
}

export function getFeaturedProducts() {
  return products.filter((product) => product.status === 'ACTIVE' && product.featured);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.status === 'ACTIVE' && product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.status === 'ACTIVE');
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug && category.isActive);
}

export function getAllActiveProducts() {
  return products.filter((product) => product.status === 'ACTIVE');
}
