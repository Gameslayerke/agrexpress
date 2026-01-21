import React, { useState } from 'react';
import { 
  Menu, X, Phone, MessageCircle, MapPin, 
  Clock, Package, Shield, Users, Truck,
  ChevronRight, Star, CheckCircle, Navigation,
  Home, Briefcase, DollarSign, Map
} from 'lucide-react';
import '../Styles/HomePage.css';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber) {
      alert(`Tracking parcel: ${trackingNumber}`);
      // In real app: router.push(`/track/${trackingNumber}`)
    }
  };

  const handleBook = () => {
    // In real app: router.push('/book')
    alert('Redirecting to booking page...');
  };

  const services = [
    { icon: <Clock className="service-icon" />, title: 'Same-Day Delivery', desc: 'Within your city in hours' },
    { icon: <Package className="service-icon" />, title: 'Next-Day Delivery', desc: 'Nationwide next day service' },
    { icon: <Briefcase className="service-icon" />, title: 'Document Delivery', desc: 'Secure document handling' },
    { icon: <Truck className="service-icon" />, title: 'Business Delivery', desc: 'E-commerce & bulk solutions' },
  ];

  const howItWorks = [
    { step: '1', title: 'Book Online', desc: 'Book via app, website or call' },
    { step: '2', title: 'We Pick Up', desc: 'Rider collects from your location' },
    { step: '3', title: 'Track Live', desc: 'Monitor delivery in real-time' },
    { step: '4', title: 'Safe Delivery', desc: 'Secure handover to recipient' },
  ];

  const whyChooseUs = [
    { icon: <Clock className="feature-icon" />, text: 'Fast & On-Time Deliveries' },
    { icon: <DollarSign className="feature-icon" />, text: 'Affordable Pricing' },
    { icon: <Navigation className="feature-icon" />, text: 'Real-Time Tracking' },
    { icon: <Users className="feature-icon" />, text: 'Professional Riders' },
    { icon: <Shield className="feature-icon" />, text: 'Secure Handling' },
    { icon: <Phone className="feature-icon" />, text: '24/7 Support' },
  ];

  const coverage = ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Nakuru', 'Thika'];

  const testimonials = [
    { name: 'Sarah K.', role: 'Small Business Owner', text: 'Their same-day delivery saved my business multiple times!', rating: 5 },
    { name: 'John M.', role: 'E-commerce Seller', text: 'Reliable and affordable. My go-to delivery partner.', rating: 5 },
    { name: 'Lisa W.', role: 'Student', text: 'Perfect for sending documents home. Always on time!', rating: 4 },
  ];

  return (
    <div className="homepage">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="logo-container">
              <div className="logo-icon">
                <Truck size={20} color="white" />
              </div>
              <span className="logo-text">SwiftDeliver</span>
            </div>

            <div className="contact-icons">
              <a href="tel:+254700123456" className="contact-link phone-link">
                <Phone size={20} />
              </a>
              <a 
                href="https://wa.me/254700123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link whatsapp-link"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="menu-content">
              <a href="#" className="menu-item" onClick={() => setIsMenuOpen(false)}>
                <Home className="menu-icon" />
                Home
              </a>
              
              <div className="menu-item">
                <button 
                  onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                  className="menu-toggle"
                >
                  <div className="flex items-center">
                    <Package className="menu-icon" />
                    Services
                  </div>
                  <ChevronRight className={`chevron-icon ${servicesMenuOpen ? 'chevron-rotated' : ''}`} />
                </button>
                
                {servicesMenuOpen && (
                  <div className="submenu">
                    <a href="#" className="submenu-item" onClick={() => setIsMenuOpen(false)}>Same-Day Delivery</a>
                    <a href="#" className="submenu-item" onClick={() => setIsMenuOpen(false)}>Next-Day Delivery</a>
                    <a href="#" className="submenu-item" onClick={() => setIsMenuOpen(false)}>Business Delivery</a>
                    <a href="#" className="submenu-item" onClick={() => setIsMenuOpen(false)}>Nationwide Delivery</a>
                  </div>
                )}
              </div>
              
              <a href="#" className="menu-item" onClick={() => setIsMenuOpen(false)}>
                <Navigation className="menu-icon" />
                Track Parcel
              </a>
              
              <a href="#" className="menu-item" onClick={() => setIsMenuOpen(false)}>
                <DollarSign className="menu-icon" />
                Pricing
              </a>
              
              <a href="#" className="menu-item" onClick={() => setIsMenuOpen(false)}>
                <Map className="menu-icon" />
                Coverage Areas
              </a>
              
              <a href="#" className="menu-item" onClick={() => setIsMenuOpen(false)}>
                <Users className="menu-icon" />
                About Us
              </a>
              
              <div className="mt-4 px-6">
                <button className="become-rider-btn">
                  Become a Rider
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Action Bar - Mobile Only */}
      <div className="bottom-action-bar">
        <div className="bottom-bar-content">
          <div className="track-form">
            <form onSubmit={handleTrack} className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking ID"
                className="track-input"
              />
              <button type="submit" className="track-submit">
                <Navigation size={20} color="#9ca3af" />
              </button>
            </form>
          </div>
          
          <button 
            onClick={handleBook}
            className="book-now-btn"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Fast, Reliable Courier & Delivery Services
            </h1>
            <p className="hero-subtitle">
              Same-day delivery • Nationwide coverage • Affordable rates
            </p>
            
            {/* Desktop Tracking Input */}
            <div className="desktop-tracking">
              <form onSubmit={handleTrack} className="desktop-tracking-form">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number here"
                  className="desktop-track-input"
                />
                <button 
                  type="submit"
                  className="desktop-track-btn"
                >
                  Track Parcel
                </button>
              </form>
            </div>

            <div className="hero-buttons">
              <button 
                onClick={handleBook}
                className="book-delivery-btn"
              >
                Book a Delivery
              </button>
              <button className="get-quote-btn">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="view-all-btn">
              View All Services <ChevronRight className="inline" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">
                  {step.step}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Why Choose SwiftDeliver</h2>
          <div className="features-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{item.icon}</div>
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="section coverage">
        <div className="container">
          <h2 className="section-title">Coverage Areas</h2>
          <div className="text-center mb-6">
            <p className="coverage-title">We deliver across all major towns in Kenya</p>
            <div className="coverage-cities">
              {coverage.map((city, index) => (
                <span 
                  key={index} 
                  className="city-tag"
                >
                  <MapPin className="city-icon" size={16} />
                  {city}
                </span>
              ))}
            </div>
          </div>
          <p className="coverage-subtext">+20 more towns and growing!</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`star-icon ${i < testimonial.rating ? 'star-filled' : 'star-empty'}`}
                      size={20}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="text-center">
            <h2 className="cta-title">Ready to Send Your Package?</h2>
            <p className="cta-subtitle">Book now and enjoy fast, secure delivery across Kenya</p>
            <div className="cta-buttons">
              <button 
                onClick={handleBook}
                className="cta-primary"
              >
                Book Delivery Now
              </button>
              <a 
                href="https://wa.me/254700123456"
                className="whatsapp-cta"
              >
                <MessageCircle className="whatsapp-icon" size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-grid">
              <div>
                <div className="footer-logo">
                  <Truck className="footer-logo-icon" size={32} />
                  <span className="footer-logo-text">SwiftDeliver</span>
                </div>
                <p className="footer-description">Fast, reliable courier services across Kenya.</p>
              </div>
              
              <div>
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Track Parcel</a></li>
                  <li><a href="#" className="footer-link">Book Delivery</a></li>
                  <li><a href="#" className="footer-link">Get Quote</a></li>
                  <li><a href="#" className="footer-link">Become a Rider</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="footer-heading">Contact</h3>
                <ul className="footer-links">
                  <li className="contact-item">
                    <Phone className="contact-icon" size={16} />
                    <a href="tel:+254700123456" className="footer-link">+254 700 123 456</a>
                  </li>
                  <li className="contact-item">
                    <MessageCircle className="contact-icon" size={16} />
                    <a href="https://wa.me/254700123456" className="footer-link">WhatsApp</a>
                  </li>
                  <li className="contact-item">
                    <MapPin className="contact-icon" size={16} />
                    <span>Nairobi, Kenya</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="footer-heading">Business Hours</h3>
                <ul className="footer-links">
                  <li className="business-hours">Mon-Fri: 6:00 AM - 10:00 PM</li>
                  <li className="business-hours">Sat-Sun: 7:00 AM - 9:00 PM</li>
                  <li className="business-hours">24/7 Support Available</li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} SwiftDeliver. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Mobile Only */}
      <div className="floating-whatsapp">
        <a 
          href="https://wa.me/254700123456"
          className="whatsapp-button"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;