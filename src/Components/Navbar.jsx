import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MessageCircle, Truck, Home,
  Package, Navigation, DollarSign, Map, Users,
  ChevronRight, Plus, Search, Clock, Shield
} from 'lucide-react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber) {
      // In real app: router.push(`/track/${trackingNumber}`)
      alert(`Tracking parcel: ${trackingNumber}`);
    }
  };

  const handleBook = () => {
    // In real app: router.push('/book')
    alert('Redirecting to booking page...');
  };

  const handleGetQuote = () => {
    // In real app: router.push('/quote')
    alert('Redirecting to quote page...');
  };

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const menuItems = [
    { id: 'home', icon: <Home className="menu-icon" />, label: 'Home', href: '#' },
    { 
      id: 'services', 
      icon: <Package className="menu-icon" />, 
      label: 'Services',
      submenu: [
        { label: 'Same-Day Delivery', href: '#' },
        { label: 'Next-Day Delivery', href: '#' },
        { label: 'Express Delivery', href: '#' },
        { label: 'Business Solutions', href: '#' },
        { label: 'International Shipping', href: '#' }
      ]
    },
    { id: 'track', icon: <Navigation className="menu-icon" />, label: 'Track Parcel', href: '#' },
    { id: 'pricing', icon: <DollarSign className="menu-icon" />, label: 'Pricing', href: '#' },
    { id: 'coverage', icon: <Map className="menu-icon" />, label: 'Coverage Areas', href: '#' },
    { id: 'about', icon: <Users className="menu-icon" />, label: 'About Us', href: '#' },
  ];

  return (
    <div className="navbar-system">
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="top-navbar-content">
          <div className="top-navbar-left">
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <a href="#" className="logo-container">
              <div className="logo-icon">
                <Truck size={20} color="white" />
              </div>
              <span className="logo-text">SwiftDeliver</span>
            </a>
          </div>
          
          <div className="top-navbar-right">
            <a 
              href="tel:+254700123456" 
              className="contact-icon phone"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            
            <a 
              href="https://wa.me/254700123456" 
              className="contact-icon whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            
            <button 
              className="book-button"
              onClick={handleBook}
            >
              <Plus size={18} />
              <span className="book-button-text">Book Delivery</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-header">
            <div className="menu-title">Main Menu</div>
          </div>
          
          <div className="menu-items">
            {menuItems.map((item) => (
              <div key={item.id}>
                <a 
                  href={item.href}
                  className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                      toggleSubmenu(item.id);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="menu-text">{item.label}</span>
                  {item.submenu && (
                    <ChevronRight 
                      className={`menu-chevron ${activeMenu === item.id ? 'rotated' : ''}`}
                      size={16}
                    />
                  )}
                </a>
                
                {item.submenu && activeMenu === item.id && (
                  <div className="submenu">
                    {item.submenu.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.href}
                        className="submenu-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="menu-footer">
            <button 
              className="menu-action-button"
              onClick={() => {
                setIsMenuOpen(false);
                // In real app: router.push('/become-rider')
                alert('Redirecting to rider application...');
              }}
            >
              <Users size={18} />
              Become a Rider
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navbar (Mobile Only) */}
      {isMobile && (
        <nav className="bottom-navbar">
          <div className="bottom-navbar-content">
            <div className="tracking-container">
              <form onSubmit={handleTrack} className="tracking-form">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Track your parcel..."
                  className="tracking-input"
                  aria-label="Tracking number"
                />
                <button 
                  type="submit" 
                  className="track-button"
                  aria-label="Track"
                >
                  <Search className="track-icon" size={18} />
                </button>
              </form>
            </div>
            
            <div className="bottom-action-buttons">
              <button 
                className="bottom-action-button primary"
                onClick={handleBook}
              >
                <Plus size={18} />
                <span className="button-text">Book</span>
              </button>
              
              <button 
                className="bottom-action-button secondary"
                onClick={handleGetQuote}
              >
                <DollarSign size={18} />
                <span className="button-text">Quote</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Floating WhatsApp Button (Mobile Only) */}
      {isMobile && (
        <div className="floating-whatsapp">
          <a 
            href="https://wa.me/254700123456"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} color="white" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;