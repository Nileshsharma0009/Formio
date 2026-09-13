import BrandLogo from "../common/BrandLogo";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <BrandLogo size="medium" />
            <p className="footer-tagline">
              AI-powered document preparation for exam notifications, college
              admissions, and job applications.
            </p>
          </div>

          <div className="footer-links-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-links-col">
            <h5>Company</h5>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Support</a>
          </div>

          <div className="footer-links-col">
            <h5>Legal</h5>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Data Security</a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Formio Technologies Inc. All rights reserved.</p>
          <div className="footer-badges">
            <span className="security-tag">256-bit SSL Encrypted</span>
            <span className="security-tag">✓ 100% Data Confidentiality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;