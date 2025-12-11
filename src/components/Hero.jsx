import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "New Arrival",
      title: "The perfect choice for online shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonText: "Shop now"
    },
    {
      badge: "Best Deals",
      title: "Discover amazing products at great prices",
      description: "Explore our curated collection of premium items designed to elevate your lifestyle and bring joy to your everyday.",
      image: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonText: "Browse Collection"
    },
    {
      badge: "Limited Offer",
      title: "Exclusive deals just for you",
      description: "Don't miss out on our special offers and seasonal promotions. Quality products at unbeatable prices for a limited time.",
      image: "https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonText: "Get Offer"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto  sm:py-12  ">
        <div className="relative">
          {/* Slides */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 lg:space-y-8 lg:p-8 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="font-medium">{slide.badge}</span>
                      </div>
                      
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                      
                      <div className="flex justify-center lg:justify-start">
                        <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
                          {slide.buttonText}
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-6 lg:mt-0">
                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button> */}
          
          {/* <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button> */}
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 lg:mt-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3  rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-orange-600 w-6 sm:w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;