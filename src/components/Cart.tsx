import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { removeFromCart, updateQuantity, clearCart } from '@/store/features/cartSlice';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function Cart() {
  const dispatch = useAppDispatch();
  const { items, totalQuantity, totalAmount } = useAppSelector((state) => state.cart);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Shopping Cart ({totalQuantity} items)</h2>
        <button
          onClick={handleClearCart}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 border-b pb-4">
            <div className="relative w-24 h-24">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-1 hover:bg-gray-100 rounded ml-2 text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">
          Total: ${totalAmount.toFixed(2)}
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
} 