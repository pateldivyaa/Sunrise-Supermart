import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Clock, Play, ChevronRight, ChevronLeft, MapPin, Phone, Mail } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { useState } from 'react';
import HeroSlider from '../components/Hero';

const Home = () => {
  const featuorangeProducts = productsData.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Aleks Lukas",
      role: "Courier",
      image: "https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&cs=tinysrgb&w=800",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Stacy Doust",
      role: "HR Generalist",
      image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=800",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Mark Hanold",
      role: "Manager",
      image: "https://images.pexels.com/photos/5025516/pexels-photo-5025516.jpeg?auto=compress&cs=tinysrgb&w=800",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    }
  ];

  const locations = [
    {
      id: 1,
      name: "Sunrise Supermart",
      address: "Maruti Towers, G-25, Shivranjani Cross Rd, Satellite, Ahmedabad, Gujarat 380015",
      phone: "+91 7383400235",
      hours: "Mon-Sat: 8AM-10PM, Sun: 9AM-8PM"
    }
  ];

  const slides = [
    {
      title: "The perfect choice for online shopping",
      subtitle: "Fresh Groceries Deliveorange to Your Door",
      description: "Shop from our wide selection of fresh produce, dairy, meat, and more. Quality guaranteed with every order.",
      buttonText: "Shop now",
      buttonLink: "/products"
    }
  ];

  return (
   <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-24 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
           
            <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium">New Arrival</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                The perfect choice for online shopping
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Shop now
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shopping"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

      
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-600"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></button>
        </div>
      </section> */}
      <HeroSlider></HeroSlider>

      {/* Newsletter Section */}
      <section className="bg-white py-8 sm:py-12 border-b">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-50 to-white rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Discounts a click away!
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="flex-1 px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-600 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your email*"
                  className="flex-1 px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-600 text-sm sm:text-base"
                />
                <button className="bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Truck className="text-orange-600 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Free Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-600">On orders over $50</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="text-orange-600 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">100% Secure</h3>
              <p className="text-xs sm:text-sm text-gray-600">Safe payment methods</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="text-orange-600 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Same Day Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-600">Order before 2pm</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <ShoppingBag className="text-orange-600 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Fresh Products</h3>
              <p className="text-xs sm:text-sm text-gray-600">Quality guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delivery"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[200px] sm:max-w-xs">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Delivery</h4>
                <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">3 - 5 days</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">Free of charge*</p>
                <p className="text-xs sm:text-sm text-gray-700">
                  Lorem ipsum culpa dolor turpis amet, consecte sit.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Eat clean and green. Try our organic groceries.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat venenatis. Cras venenatis ac.
              </p>
              <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base">
                Shop now
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Bakery", subtitle: "Fresh", img: "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800", color: "white" },
              { title: "Wines", subtitle: "Natural", img: "https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?auto=compress&cs=tinysrgb&w=800", color: "orange-400" },
              { title: "Cooking", subtitle: "Family", img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800", color: "white" },
              { title: "Natural", subtitle: "100%", img: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=800", color: "white" },
              { title: "Delivery", subtitle: "Fast", img: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800", color: "white" },
              { title: "Exotic", subtitle: "Fresh", img: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800", color: "green-400" }
            ].map((cat, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-64 sm:h-80">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-80">{cat.subtitle}</p>
                  <h3 className={`text-2xl sm:text-3xl font-bold text-${cat.color}`}>{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Video thumbnail"
              className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors hover:scale-110 transform">
                <Play size={28} className="text-white ml-1" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Ordering Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://media.istockphoto.com/id/672973502/photo/checkout-server-serving-young-woman-customer-ordering-at-fast-food-restaurant.jpg?s=612x612&w=0&k=20&c=Q561DBqOiJ6_25bzxg5MabPV1URiV1bui78OSpacdV8="
                alt="Food ordering"
                className="rounded-2xl  w-[600px] h-[400px]"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Order fresh food now
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis augue sit amet magna placerat ad porta nec sit amet. Proin pharetra erat, dictum consequat dolor.
              </p>
              <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base">
                Shop now
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      {/* <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "📋", title: "Monthly orders", subtitle: "Lorem ipsum" },
              { icon: "🛒", title: "Home delivery", subtitle: "Lorem ipsum" },
              { icon: "💳", title: "Online discounts", subtitle: "Lorem ipsum" },
              { icon: "📄", title: "Easy pay", subtitle: "Lorem ipsum" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{item.subtitle}</p>
                <h3 className="text-sm sm:text-base lg:text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Discount Products Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Amazing discounts on all your orders.
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Ipsum dolor sit amet, consectetur adipiscing elit consequat dictum augue sit venenatis cras lorem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 text-sm sm:text-base">
              Check out the full discount list here
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Map & Locations Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Express Food Delivery - Find Our Stores
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations across New York
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Map */}
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.994855688031!2d72.531093!3d23.023961099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853d0c418c03%3A0x4fae5e2343c74475!2sSunrise%20Supermart!5e0!3m2!1sen!2sin!4v1765442501587!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Store locations map"
              ></iframe>
            </div>

            {/* Store Locations */}
            <div className="space-y-4 sm:space-y-6">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-orange-600 flex-shrink-0 mt-1 w-5 h-5" />
                      <p className="text-sm sm:text-base text-gray-700">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="text-orange-600 flex-shrink-0 w-5 h-5" />
                      <a href={`tel:${location.phone}`} className="text-sm sm:text-base text-gray-700 hover:text-orange-600">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-orange-600 flex-shrink-0 mt-1 w-5 h-5" />
                      <p className="text-sm sm:text-base text-gray-700">{location.hours}</p>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full sm:w-auto bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base">
                    Get Directions
                  </button>
                </div>
              ))}
              {/* Contact Info */}
              <div className="bg-orange-50 rounded-xl p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Customer Service</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="text-orange-600 flex-shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">+91 7383400235</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange-600 flex-shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">info@sunrisesupermart.com
</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base">
                  Delivery Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;