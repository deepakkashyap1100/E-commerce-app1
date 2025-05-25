'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ShoppingCart, Star, Heart, Share2, ChevronLeft, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { addToCart } from '@/store/features/cartSlice';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  stock: number;
  brand: string;
  features?: string[];
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id.toString() === id) as Product;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Use product.images if available, otherwise use an array with just the main image
  const productImages = product.images || [product.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    }));
    toast.success('Added to cart');
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-blue-600">
                Home
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <a href="/products" className="text-gray-500 hover:text-blue-600">
                Products
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden ${
                        currentImageIndex === index
                          ? 'ring-2 ring-blue-600'
                          : 'hover:opacity-75'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  20% OFF
                </span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.stock} items available
                  </span>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button className="p-3 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="p-3 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Free Shipping</h3>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Easy Returns</h3>
                    <p className="text-sm text-gray-500">30 days return policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Secure Payment</h3>
                    <p className="text-sm text-gray-500">100% secure payment</p>
                  </div>
                </div>
              </div>

              {product.features && (
                <div className="border-t pt-6">
                  <h3 className="font-medium text-gray-900 mb-4">Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
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
        )}
      </div>
    </div>
  );
} 