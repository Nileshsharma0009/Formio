import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-banner-section">
      <div className="section-container">
        <motion.div
          className="cta-banner-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to submit your application with confidence?
            </h2>
            <p className="cta-desc">
              Join 10,000+ applicants who organize, resize, compress, and verify
              all documents in under 2 minutes.
            </p>
            <div className="cta-buttons">
              <motion.button
                className="cta-btn-primary"
                whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  sessionStorage.setItem("formio_demo", "true");
                  navigate("/dashboard");
                }}
              >
                <Rocket size={18} />
                <span>Get Started Free</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;