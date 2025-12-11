import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount, getCartTotal } = useCart();
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 text-white py-2.5 text-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Phone size={14} />
                <span className="text-xs md:text-sm font-medium">+91 73834 00235</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Mail size={14} />
                <span className="text-xs md:text-sm font-medium">info@sunrisesupermart.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium">
              <Link to="/about" className="hover:bg-white/20 px-3 py-1 rounded-full transition-all">About</Link>
              <Link to="/contact" className="hover:bg-white/20 px-3 py-1 rounded-full transition-all">Contact</Link>
              <Link to="/account" className="hover:bg-white/20 px-3 py-1 rounded-full transition-all hidden sm:inline">My account</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Colorful Design */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-gradient">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo with Gradient */}
            <Link to="/" className="flex items-center group">
              <div className="lg:-ms-5 font-bold text-xl md:text-2xl lg:text-3xl px-3 md:px-4 py-2 rounded-lg transition-transform group-hover:scale-105">
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                  SUNRISE
                </span>
                {' '}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                  SUPERMART
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Color Accents */}
            <nav className="hidden lg:ms-6 lg:flex items-center space-x-2">
              <Link to="/" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-2 rounded-lg">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-2 rounded-lg">
                Products
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-2 rounded-lg">
                About 
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-2 rounded-lg">
                Contact 
              </Link>
            </nav>

            {/* Search Bar with Colorful Border */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-4 lg:mx-8">
              <div className="w-full relative flex shadow-md rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all">
                <select className="px-3 lg:px-4 py-2 lg:py-3 bg-gradient-to-r from-orange-50 to-yellow-50 border-r-2 border-yellow-200 text-xs lg:text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                  <option>All Categories</option>
                  <option>Fruits & Vegetables</option>
                  <option>Dairy & Eggs</option>
                  <option>Bakery</option>
                  <option>Meat & Seafood</option>
                  <option>Beverages</option>
                  <option>Pantry</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for fresh groceries..."
                  className="flex-1 px-3 lg:px-4 py-2 lg:py-3 focus:outline-none text-sm bg-white"
                />
                <button className="px-4 lg:px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all font-semibold">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart & Menu with Gradient */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link to="/cart" className="relative group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 hover:from-green-600 hover:to-green-700 transition-all shadow-lg group-hover:shadow-xl group-hover:scale-105">
                  <ShoppingCart size={18} className="md:w-5 md:h-5" />
                  <span className="font-bold text-sm md:text-base">{cartCount}</span>
                  <span className="hidden sm:inline ml-1 text-sm md:text-base font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
              </Link>

              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : (
                  <div className="flex flex-col gap-1">
                    <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                    <span className="w-6 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500"></span>
                    <span className="w-6 h-0.5 bg-gradient-to-r from-green-500 to-green-600"></span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search with Gradient */}
          <div className="md:hidden pb-3">
            <div className="flex shadow-md rounded-lg overflow-hidden border-2 border-yellow-300">
              <select className="px-3 py-2 bg-gradient-to-r from-orange-50 to-yellow-50 border-r-2 border-yellow-200 text-xs font-medium">
                <option>All</option>
              </select>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 text-sm focus:outline-none"
              />
              <button className="px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu with Colorful Backgrounds */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t-2 border-yellow-200">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-3 rounded-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-3 rounded-lg"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all font-semibold px-4 py-3 rounded-lg"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all font-semibold px-4 py-3 rounded-lg"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;