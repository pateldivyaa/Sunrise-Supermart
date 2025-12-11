import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft, Shield, Truck, Clock, Minus, Plus, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-red-600 hover:text-red-700 font-semibold">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 1000);
  };

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Create multiple images for gallery (if only one image, just show that one)
  const images = product.images.length > 1 ? product.images : [product.images[0]];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 sm:h-[500px] object-cover"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart size={24} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} />
              </button>
              <button className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Thumbnail Gallery - Only show if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 rounded-2xl overflow-hidden transition-all ${
                      selectedImage === index 
                        ? 'ring-4 ring-red-600 scale-105' 
                        : 'ring-2 ring-gray-200 hover:ring-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <span className="inline-block text-sm font-bold text-red-600 bg-red-50 px-4 py-2 rounded-full mb-4">
                {product.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-green-600 font-semibold">{product.stock} in stock</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border-2 border-red-100">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-5xl font-bold text-red-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-600 ml-2">/ {product.unit}</span>
                  </div>
                  {product.stock < 50 && (
                    <div className="text-right">
                      <div className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        Low Stock!
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-14 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Minus size={20} className="text-gray-700" />
                  </button>
                  <span className="w-20 text-center text-xl font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-14 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Plus size={20} className="text-gray-700" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-lg ${
                    isAdding
                      ? 'bg-green-500 text-white scale-95'
                      : 'bg-red-600 hover:bg-red-700 text-white hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <ShoppingCart size={24} />
                  {isAdding ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <Truck className="text-red-600" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Free Delivery</span>
                  <span className="text-xs text-gray-600">Orders over $50</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Same Day</span>
                  <span className="text-xs text-gray-600">Before 2pm</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">100% Fresh</span>
                  <span className="text-xs text-gray-600">Quality guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                You might also like
              </h2>
              <p className="text-gray-600 text-lg">
                Customers who bought this also purchased
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart size={18} />
                        Quick Add
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full mb-2">
                      {relatedProduct.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-red-600">
                          ${relatedProduct.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">/ {relatedProduct.unit}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;