import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is requiorange';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is requiorange';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is requiorange';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is requiorange';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section - Similar to Home */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden lg:px-12">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium">Get In Touch</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We'd love to hear from you
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600">
                Have a question or feedback? Our team is here to help you with anything you need. 
                Reach out and we'll respond as soon as possible.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="tel:+91 73834 00235"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <Phone size={20} />
                  Call Us Now
                </a>
              <a
  href="https://wa.me/917383400235"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white text-orange-600 border-2 border-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-50 transition-colors"
>
  <MessageCircle className="inline" size={20} />
  Send Message
</a>
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact us"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards - Similar to Features */}
      <section className="py-12 sm:py-16 bg-white lg:px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow border border-orange-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Phone</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">+91 73834 00235</p>
              <p className="text-xs text-gray-500">Mon-Fri, 8am-8pm</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow border border-orange-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">info@sunrisesupermart.com</p>
              <p className="text-xs text-gray-500">24/7 Support</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow border border-orange-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Address</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Maruti Towers, G-25, Shivranjani Cross Rd, Satellite, Ahmedabad, Gujarat 380015</p>
              <p className="text-xs text-gray-500">San Francisco, CA</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow border border-orange-100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Store Hours</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Mon-Sat: 7am-10pm</p>
              <p className="text-xs text-gray-500">Sun: 8am-9pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Two Column Layout */}
      <section id="contact-form" className="py-12 lg:px-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <p className="text-green-800 font-semibold flex items-center gap-2">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base ${
                          errors.name ? 'border-orange-500' : 'border-gray-300'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs sm:text-sm text-orange-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base ${
                          errors.email ? 'border-orange-500' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs sm:text-sm text-orange-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base ${
                        errors.subject ? 'border-orange-500' : 'border-gray-300'
                      }`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs sm:text-sm text-orange-500">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base ${
                        errors.message ? 'border-orange-500' : 'border-gray-300'
                      }`}
                      placeholder="Your message..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs sm:text-sm text-orange-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Additional Info */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7621135/pexels-photo-7621135.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Customer support"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-xs">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Response Time</h4>
                  <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">24 Hours</p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">Average response time</p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    We typically respond within one business day
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Headphones className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">Need Immediate Help?</h3>
                    <p className="text-xs sm:text-sm text-white/90">Our team is standing by</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base mb-4 text-white/90">
                  For urgent matters, call us directly or check out our FAQ section for quick answers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors text-sm sm:text-base"
                  >
                    View FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-white lg:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Visit Our Store
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Come see us in person at our San Francisco location
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Map */}
            <div className="lg:col-span-2 relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.994855688031!2d72.531093!3d23.023961099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853d0c418c03%3A0x4fae5e2343c74475!2sSunrise%20Supermart!5e0!3m2!1sen!2sin!4v1765442501587!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Store location map"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Main Store</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Maruti Towers, G-25, Shivranjani Cross Rd, Satellite, Ahmedabad, Gujarat 380015</p>
                    {/* <p className="text-xs sm:text-sm text-gray-600">San Francisco, CA 94103</p> */}
                  </div>
                </div>
               <button 
  onClick={() => window.open('https://www.google.com/maps/dir//Maruti+Towers,+G-25,+Shivranjani+Cross+Rd,+Satellite,+Ahmedabad,+Gujarat+380015/@23.0239611,72.531093,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e853d0c418c03:0x4fae5e2343c74475!2m2!1d72.531093!2d23.0239611?entry=ttu', '_blank', 'noopener,noreferrer')}
  className="w-full bg-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
>
  <MapPin size={18} />
  Get Directions
</button>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="text-orange-600" size={20} />
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Live Chat</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  Chat with our support team in real-time
                </p>
            <button 
  onClick={() => window.open('https://wa.me/917383400235', '_blank', 'noopener,noreferrer')}
  className="w-full bg-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base"
>
  Start Chat
</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Browse our wide selection of fresh groceries and get them deliveorange to your door
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;