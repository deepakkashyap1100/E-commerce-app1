'use client'

import { Product } from '@/types/product'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group h-full flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-200">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        {/* Price and Rating */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="text-sm text-gray-600">
            {product.stock > 0 ? (
              <span className="text-green-600">{product.stock} in stock</span>
            ) : (
              <span className="text-red-600">Out of stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 