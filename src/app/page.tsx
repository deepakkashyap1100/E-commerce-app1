'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { 
  ShoppingCart, 
  Star, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Truck,
  Shield,
  RefreshCw,
  CreditCard,
  Heart
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/store/features/cartSlice';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function HomePage() {
  const dispatch = useDispatch();
  const [featuredProducts] = useState(products.filter(p => p.isFeatured).slice(0, 6));
  const [newArrivals] = useState(products.filter(p => p.isNew).slice(0, 4));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
      count: products.filter(p => p.category === 'Electronics').length
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
      count: products.filter(p => p.category === 'Fashion').length
    },
    {
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
      count: products.filter(p => p.category === 'Home & Kitchen').length
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500',
      count: products.filter(p => p.category === 'Sports').length
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Free Shipping',
      description: 'On all orders over $50'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Payment',
      description: '100% secure payment'
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: 'Easy Returns',
      description: '30 days return policy'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Multiple Payment',
      description: 'All major cards accepted'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920"
            alt="Hero"
            fill
            className="object-cover opacity-50 transform scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Style with Our Latest Collection
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Shop the newest trends in fashion, electronics, and more
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg font-semibold"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-blue-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products, carefully chosen to enhance your lifestyle
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex space-x-2 p-1 bg-gray-100 rounded-full">
              {['All', 'Electronics', 'Fashion', 'Home'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === 'All'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                rating={product.rating}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <p className="mt-2 text-gray-600">Browse through our wide range of categories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="group relative h-80 rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
              <p className="mt-2 text-gray-600">Check out our latest products</p>
            </div>
            <Link
              href="/products?sort=newest"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-semibold"
            >
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 