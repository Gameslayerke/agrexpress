import React, { useState } from "react";
import "../Styles/HomePage.css";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // TODO: Replace with actual API call to save subscriber email
    console.log("User subscribed:", email);
    setSubmitted(true);
    setEmail("");
    setLoading(false);
  };

  return (
    <div className="homepage-wrapper">
      {/* Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Floating Delivery Icons */}
      <div className="floating-delivery-icons">
        <div className="delivery-icon">🚚</div>
        <div className="delivery-icon">📦</div>
        <div className="delivery-icon">🛵</div>
        <div className="delivery-icon">🏍️</div>
        <div className="delivery-icon">🚲</div>
      </div>

      <main className="homepage-container">
        {/* Header with Navigation */}
        <header className="brand-header">
          <div className="brand-logo">
            <span className="logo-icon">⚡</span>
            <h1 className="logo-text">Zigo</h1>
          </div>
          <p className="brand-tagline">Everything Delivered. Anywhere. Anytime.</p>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">LAUNCHING SOON</span>
              <div className="badge-pulse"></div>
            </div>
            
            <h1 className="hero-title">
              One Platform,
              <span className="highlight"> All Deliveries</span>
            </h1>
            
            <p className="hero-description">
              Food, groceries, packages, documents, medicine, and more. Zigo connects you 
              with the fastest delivery network in your city. Everything delivered in minutes.
            </p>

            {/* Delivery Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Delivery Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15min</span>
                <span className="stat-label">Average Delivery</span>
              </div>
              {/* <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cities Launching</span>
              </div> */}
            </div>
          </div>
        </section>

        {/* Delivery Types Preview */}
        <section className="delivery-types-section">
          <h2 className="section-title">Everything You Need, Delivered</h2>
          <p className="section-subtitle">From a single coffee to a full grocery order</p>
          
          <div className="delivery-types-grid">
            <div className="delivery-type-card">
              <div className="type-icon">🍔</div>
              <h3 className="type-title">Food & Restaurants</h3>
              <p className="type-description">Hot meals from your favorite restaurants</p>
            </div>
            
            <div className="delivery-type-card">
              <div className="type-icon">🛒</div>
              <h3 className="type-title">Groceries</h3>
              <p className="type-description">Fresh produce, pantry items & more</p>
            </div>
            
            <div className="delivery-type-card">
              <div className="type-icon">📦</div>
              <h3 className="type-title">Packages</h3>
              <p className="type-description">Same-day package delivery</p>
            </div>
            
            <div className="delivery-type-card">
              <div className="type-icon">💊</div>
              <h3 className="type-title">Pharmacy</h3>
              <p className="type-description">Medicines & health products</p>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="subscription-section">
          <div className="subscription-card">
            <div className="card-header">
              <h2 className="card-title">Get Early Access & Exclusive Benefits</h2>
              <p className="card-subtitle">
                Be among the first to experience Zigo's revolutionary delivery platform
              </p>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free delivery for first month</span>
              </div>
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority customer support</span>
              </div>
              <div className="benefit-item">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive launch discounts</span>
              </div>
            </div>

            {!submitted ? (
              <form className="subscription-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="email-input"
                      disabled={loading}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`submit-button ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="button-loader"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="privacy-note">
                  <svg className="lock-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Your email is safe with us. No spam, unsubscribe anytime.</span>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="success-title">You're on the List! 🎉</h3>
                <p className="success-text">
                  Welcome to Zigo's early access program! You'll be the first to know when 
                  we launch in your city and receive exclusive early user benefits.
                </p>
                <div className="success-actions">
                  <button 
                    className="share-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Invite Friends
                  </button>
                  <button 
                    className="secondary-button"
                    onClick={() => window.open('https://twitter.com/zigodelivery', '_blank')}
                  >
                    Follow Updates
                  </button>
                </div>
              </div>
            )}

            {/* City Launch Progress */}
            <div className="city-launch-section">
              <h3 className="city-launch-title">Launching in Major Cities</h3>
              <div className="city-tags">
                <span className="city-tag">New York</span>
                <span className="city-tag">Los Angeles</span>
                <span className="city-tag">Chicago</span>
                <span className="city-tag">Miami</span>
                <span className="city-tag">+46 more</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon-large">⚡</div>
            <h3 className="feature-title-large">Super Fast Delivery</h3>
            <p className="feature-description-large">Average delivery in 15-30 minutes</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-large">🎯</div>
            <h3 className="feature-title-large">Real-time Tracking</h3>
            <p className="feature-description-large">Live tracking from pickup to delivery</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-large">🛡️</div>
            <h3 className="feature-title-large">Safe & Secure</h3>
            <p className="feature-description-large">Contactless delivery & secure payments</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon-small">⚡</span>
              <span className="logo-text-small">Zigo</span>
            </div>
            
            <p className="footer-tagline">
              Delivering happiness to your doorstep
            </p>
            
            <div className="footer-links">
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Partners</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            
            <p className="footer-copyright">
              © {new Date().getFullYear()} Zigo Deliveries. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;