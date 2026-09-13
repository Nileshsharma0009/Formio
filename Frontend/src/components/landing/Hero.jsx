import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Play, Star } from "lucide-react";
import HeroPreview from "./HeroPreview";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="landing-hero-section">
      <div className="hero-container">
        {/* Left Copy */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            <span>Documents ready.</span>
            <span>Applications ready.</span>
            <span className="highlight-blue">You ready.</span>
          </h1>

          <p className="hero-description">
            Formio automatically prepares your documents exactly as per requirements.
            Upload, verify, and get application-ready in minutes.
          </p>

          <div className="hero-cta-group">
            <motion.button
              className="hero-btn-primary"
              whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                sessionStorage.setItem("formio_demo", "true");
                navigate("/dashboard");
              }}
            >
              <Rocket size={18} />
              <span>Get Started Free</span>
            </motion.button>

            <motion.button
              className="hero-btn-secondary"
              whileHover={{ y: -2, borderColor: "#94a3b8" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="play-icon-circle">
                <Play size={13} fill="#2563eb" color="#2563eb" />
              </div>
              <span>Watch Demo</span>
            </motion.button>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Student ${i + 1}`}
                  className="social-avatar"
                  loading="lazy"
                />
              ))}
            </div>

            <div className="social-rating-box">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="#f59e0b"
                    color="#f59e0b"
                  />
                ))}
              </div>
              <span className="trusted-text">
                Trusted by <strong>10,000+</strong> students
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Preview Card */}
        <div className="hero-right">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;