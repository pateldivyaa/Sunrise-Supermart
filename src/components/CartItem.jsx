import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-4 p-5">
        {/* Product Image */}
        <div className="relative">
          <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="absolute -top-2 -left-2 w-8 h-8 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
            {item.quantity}
          </span>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                {item.name}
              </h3>
              <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 flex items-center justify-center group/btn"
              title="Remove item"
            >
              <Trash2 size={16} className="group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4">
            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">Quantity:</span>
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-red-600 hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm border border-gray-200 hover:border-red-600"
                >
                  <Minus size={14} />
                </button>
                <span className="font-bold text-gray-900 w-10 text-center text-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-red-600 hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm border border-gray-200 hover:border-red-600"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-gray-500">
                ${item.price.toFixed(2)} / {item.unit}
              </span>
              <span className="text-2xl font-bold text-red-600">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;