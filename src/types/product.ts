export type ProductCategory =
  | 'Electronics'
  | 'Fashion'
  | 'Books'
  | 'Home & Kitchen'
  | 'Sports'
  | 'Beauty'
  | 'Toys'
  | 'Automotive'
  | 'Health'
  | 'Garden'

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  rating: number;
  stock: number;
  brand?: string;
  features?: string[];
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
} 