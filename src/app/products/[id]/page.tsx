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
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  brand: string;
  features?: string[];
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: PageProps) {
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(params.id));
  const productImages =
    product && Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : product && product.image
        ? [product.image]
        : [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to products
          </Link>
        </div>
      </div>
    );
  }

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
    toast.success('Added to cart!');
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden ${
                        currentImageIndex === index ? 'ring-2 ring-blue-600' : ''
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
                  <span className="text-gray-600">({product.rating} rating)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-gray-600">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1 text-gray-600 hover:text-blue-600"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-x py-1"
                  />
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-1 text-gray-600 hover:text-blue-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Features */}
              {product.features && (
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="h-5 w-5" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <RefreshCw className="h-5 w-5" />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="h-5 w-5" />
                  <span>2-year warranty</span>
                </div>
              </div>
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