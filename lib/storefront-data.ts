import { PrismaClient } from '@prisma/client';

const categories = [
  {
    id: 'cat-fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Luxury tailoring and grand looks for every occasion.',
    imageUrl: '/images/fashion.jpg',
    isActive: true,
  },
  {
    id: 'cat-jewelry',
    name: 'Jewelry',
    slug: 'jewelry',
    description: 'Heirloom pieces and statement gold for your royal wardrobe.',
    imageUrl: '/images/jewelry.jpg',
    isActive: true,
  },
  {
    id: 'cat-home',
    name: 'Home',
    slug: 'home',
    description: 'Elevated pieces for refined interiors and daily rituals.',
    imageUrl: '/images/home.jpg',
    isActive: true,
  },
  {
    id: 'cat-accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Final touches that sharpen every luxurious presence.',
    imageUrl: '/images/accessories.jpg',
    isActive: true,
  },
  {
    id: 'cat-empty',
    name: 'Archive',
    slug: 'archive',
    description: 'Former collection currently not available for purchase.',
    imageUrl: '/images/archive.jpg',
    isActive: true,
  },
];

const products = [
  {
    id: 'prod-1',
    name: 'Velvet Crown Set',
    slug: 'velvet-crown-set',
    description: 'A dramatic statement set designed for signature evenings and royal events.',
    price: 1280,
    compareAt: 1499,
    categorySlug: 'fashion',
    imageUrl: '/images/velvet-crown.jpg',
    images: ['/images/velvet-crown.jpg', '/images/velvet-crown-alt.jpg'],
    status: 'ACTIVE',
    featured: true,
    rating: 4.9,
    reviewCount: 318,
  },
  {
    id: 'prod-2',
    name: 'Majestic Gold Signet',
    slug: 'majestic-gold-signet',
    description: 'Champagne gold crafted for enduring presence and distinguished gifting.',
    price: 860,
    compareAt: 990,
    categorySlug: 'jewelry',
    imageUrl: '/images/gold-signet.jpg',
    images: ['/images/gold-signet.jpg'],
    status: 'ACTIVE',
    featured: true,
    rating: 5,
    reviewCount: 244,
  },
  {
    id: 'prod-3',
    name: 'Royal Silk Residence Lamp',
    slug: 'royal-silk-residence-lamp',
    description: 'Ambient elegance inspired by palace living and modern comfort.',
    price: 640,
    compareAt: 760,
    categorySlug: 'home',
    imageUrl: '/images/residence-lamp.jpg',
    images: ['/images/residence-lamp.jpg'],
    status: 'ACTIVE',
    featured: false,
    rating: 4.8,
    reviewCount: 162,
  },
  {
    id: 'prod-4',
    name: 'Imperial Leather Trunk',
    slug: 'imperial-leather-trunk',
    description: 'A luxurious statement piece designed for timeless travel and storage.',
    price: 1180,
    compareAt: 1380,
    categorySlug: 'accessories',
    imageUrl: '/images/leather-trunk.jpg',
    images: ['/images/leather-trunk.jpg'],
    status: 'ACTIVE',
    featured: true,
    rating: 4.9,
    reviewCount: 201,
  },
  {
    id: 'prod-5',
    name: 'Crown Nocturne Watch',
    slug: 'crown-nocturne-watch',
    description: 'A refined timepiece with deep metallic detailing and confident evening presence.',
    price: 1790,
    compareAt: 1990,
    categorySlug: 'fashion',
    imageUrl: '/images/nocturne-watch.jpg',
    images: ['/images/nocturne-watch.jpg'],
    status: 'ACTIVE',
    featured: false,
    rating: 4.7,
    reviewCount: 97,
  },
  {
    id: 'prod-6',
    name: 'Cinder Rose Scent',
    slug: 'cinder-rose-scent',
    description: 'A regal fragrance experience with soft florals and warm signature wood notes.',
    price: 340,
    compareAt: 420,
    categorySlug: 'home',
    imageUrl: '/images/cinder-rose.jpg',
    images: ['/images/cinder-rose.jpg'],
    status: 'ACTIVE',
    featured: false,
    rating: 4.8,
    reviewCount: 110,
  },
  {
    id: 'prod-7',
    name: 'Legacy Silk Scarf',
    slug: 'legacy-silk-scarf',
    description: 'An heirloom-inspired layer that elevates formality with a whisper of color.',
    price: 250,
    compareAt: 320,
    categorySlug: 'accessories',
    imageUrl: '/images/silk-scarf.jpg',
    images: ['/images/silk-scarf.jpg'],
    status: 'ACTIVE',
    featured: false,
    rating: 4.6,
    reviewCount: 74,
  },
  {
    id: 'prod-8',
    name: 'Imperial Baguette Kit',
    slug: 'imperial-baguette-kit',
    description: 'Limited collector set designed for a luxe and unforgettable gifting moment.',
    price: 560,
    compareAt: 680,
    categorySlug: 'archive',
    imageUrl: '/images/baguette-kit.jpg',
    images: ['/images/baguette-kit.jpg'],
    status: 'ARCHIVED',
    featured: false,
    rating: 4.4,
    reviewCount: 32,
  },
];

export type Product = (typeof products)[number];
export type Category = (typeof categories)[number];

export function getAllCategories() {
  return categories;
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
