import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "../common/BrandLogo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.header
      className="landing-navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Brand */}
        <Link to="/" className="brand-link">
          <BrandLogo size="medium" />
        </Link>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#how-it-works" className="nav-link">
            How it Works
          </a>
          <div className="nav-dropdown-trigger">
            <span className="nav-link">
              Use Cases <ChevronDown size={14} className="chevron" />
            </span>
          </div>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>

        {/* Auth / Action Buttons */}
        <div className="nav-actions">
          <button
            className="btn-login"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <motion.button
            className="btn-get-started"
            whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.28)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              sessionStorage.setItem("formio_demo", "true");
              navigate("/dashboard");
            }}
          >
            Get Started Free
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)}>How it Works</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#blog" onClick={() => setMobileOpen(false)}>Blog</a>
            <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
            <div className="mobile-actions">
              <button className="btn-login" onClick={() => navigate("/login")}>
                Log in
              </button>
              <button className="btn-get-started" onClick={() => navigate("/dashboard")}>
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;