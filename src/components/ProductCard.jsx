import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {product.stock < 50 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Low Stock
          </div>
        )}
        
        <button
          onClick={(e) => { 
            e.preventDefault(); 
            setIsFavorite(!isFavorite); 
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Heart 
            size={18} 
            className={isFavorite ? 'fill-orange-500 text-orange-500' : 'text-gray-600'} 
          />
        </button>

        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
              isAdding ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ShoppingCart size={18} />
            {isAdding ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="p-5">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full mb-2">
          {product.category}
        </span>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.stock})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-orange-600">${product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`w-10 h-10 rounded-lg transition-colors flex items-center justify-center ${
              isAdding
                ? 'bg-green-600 text-white'
                : 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white'
            }`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;