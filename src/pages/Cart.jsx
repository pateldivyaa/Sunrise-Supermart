import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  const shipping = total > 50 ? 0 : 4.99;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 bg-gradient-to-br from-red-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShoppingBag size={64} className="text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Discover our fresh products and fill your cart with quality groceries!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start Shopping
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-3xl lg:p-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              Shopping Cart
            </h1>
            <p className="text-red-50 text-lg">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Items</h2>
              <button
                onClick={clearCart}
                className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline transition-all"
              >
                Clear All
              </button>
            </div>

            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* Continue Shopping Link */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mt-6 group"
            >
              <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              {/* Header */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 border-b border-red-100">
                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
              </div>

              <div className="p-6">
                {/* Price Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-red-600">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {total < 50 && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck size={16} className="text-blue-600" />
                      <p className="text-sm font-semibold text-blue-900">
                        Almost there!
                      </p>
                    </div>
                    <p className="text-sm text-blue-800 mb-3">
                      Add <span className="font-bold">${(50 - total).toFixed(2)}</span> more for FREE shipping
                    </p>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
                        style={{ width: `${(total / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {total >= 50 && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2">
                      <Truck size={16} className="text-green-600" />
                      <p className="text-sm font-semibold text-green-900">
                        You've qualified for FREE shipping! 🎉
                      </p>
                    </div>
                  </div>
                )}

                {/* Checkout Button */}
                <Link
                  to="/checkout"
                  className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4"
                >
                  Proceed to Checkout
                </Link>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Shield size={20} className="text-green-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-600">Secure</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Truck size={20} className="text-blue-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-600">Fast Ship</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Clock size={20} className="text-purple-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-600">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;