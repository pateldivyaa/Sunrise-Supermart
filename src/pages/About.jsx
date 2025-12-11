import { Users, Heart, Award, Leaf, ShoppingBag, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Similar to Home */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden lg:px-12">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium">Our Story</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We're passionate about fresh groceries
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600">
                Your trusted partner for healthy living. We bring farm-fresh quality and organic products straight to your doorstep with care and commitment.
              </p>
              
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh groceries"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Similar to Home */}
      <section className="py-12 sm:py-16 bg-white lg:px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Truck className="text-orange-600" size={24} />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Free Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-600">On orders over $50</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="text-orange-600" size={24} />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">100% Fresh</h3>
              <p className="text-xs sm:text-sm text-gray-600">Quality guaranteed</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="text-orange-600" size={24} />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Same Day Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-600">Order before 2pm</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <ShoppingBag className="text-orange-600" size={24} />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Organic Products</h3>
              <p className="text-xs sm:text-sm text-gray-600">Farm fresh quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Two Column Layout */}
      <section className="py-12 sm:py-16 bg-gray-50 lg:px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Founded in 2020, GroceryMart started with a simple mission: to make fresh,
                quality groceries accessible to everyone. We believe that healthy eating
                should be convenient and affordable.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Today, we partner with local farms and trusted suppliers to bring you the
                freshest produce, dairy, meat, and pantry staples. Every product is carefully
                selected to meet our high standards of quality and freshness.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Our team works tirelessly to ensure your shopping experience is seamless,
                from browsing our selection to delivery at your door. We're not just a
                grocery store – we're your partner in healthy living.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our story"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section - Similar Layout */}
      <section className="py-12 sm:py-16 bg-white lg:px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh produce"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-xs">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Quality</h4>
                <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">100%</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">Guaranteed Fresh</p>
                <p className="text-xs sm:text-sm text-gray-700">
                  Every product meets our high standards
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Promise to You
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">100% Fresh Products</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Quality guaranteed with every order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Same-Day Delivery</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Fast and reliable service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Local Farmers Support</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Supporting our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Eco-Friendly Packaging</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Sustainable and responsible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Card Style */}
      <section className="py-12 sm:py-16 bg-gray-50 lg:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full mb-3 sm:mb-4">
                <Users className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">50K+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Happy Customers</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full mb-3 sm:mb-4">
                <Award className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">500+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Premium Products</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full mb-3 sm:mb-4">
                <Heart className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100%</h3>
              <p className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full mb-3 sm:mb-4">
                <Leaf className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Eco</h3>
              <p className="text-xs sm:text-sm text-gray-600">Friendly Practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-12 sm:py-16 bg-white lg:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Offer
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Explore our wide range of fresh and organic products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-64 sm:h-80">
              <img
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh Produce"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-80">Farm Fresh</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400">Produce</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-64 sm:h-80">
              <img
                src="https://images.pexels.com/photos/1564890/pexels-photo-1564890.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dairy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-80">Fresh</p>
                <h3 className="text-2xl sm:text-3xl font-bold">Dairy</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-64 sm:h-80">
              <img
                src="https://images.pexels.com/photos/2267266/pexels-photo-2267266.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Meat"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-80">Premium</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-400">Meat</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Similar to Home */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-600 to-orange-700 lg:px-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Join Our Community
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Be part of a growing family that values quality, freshness, and sustainability.
            Start shopping with us today!
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;