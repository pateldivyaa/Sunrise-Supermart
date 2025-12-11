import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <div className="font-bold text-xl md:text-2xl">
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  SUNRISE
                </span>
                {' '}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                  SUPERMART
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted online grocery store. Fresh products delivered to your doorstep with love and care.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white hover:from-orange-600 hover:to-yellow-600 transition-all hover:scale-110 shadow-lg">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white hover:from-yellow-600 hover:to-green-600 transition-all hover:scale-110 shadow-lg">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all hover:scale-110 shadow-lg">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Home
              </Link>
              <Link to="/products" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Products
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Categories
            </h3>
            <div className="flex flex-col space-y-3">
              <Link to="/products?category=Fruits & Vegetables" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
Personal care
              </Link>
              <Link to="/products?category=Dairy & Eggs" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Dairy & Eggs
              </Link>
              <Link to="/products?category=Meat & Seafood" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Meat & Seafood
              </Link>
              <Link to="/products?category=Bakery" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group">
                <span className="w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                Bakery
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Call Us</p>
                  <span className="text-sm text-gray-300">+91 73834 00235</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email Us</p>
                  <span className="text-sm text-gray-300">info@sunrisesupermart.com</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Visit Us</p>
                  <span className="text-sm text-gray-300"> Maruti Towers, G-25, Shivranjani Cross Rd, Satellite, Ahmedabad, Gujarat 380015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar with Gradient */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-white font-medium">
              &copy; {new Date().getFullYear()} Sunrise Supermart. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/90">
              <Link to="/privacy" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;