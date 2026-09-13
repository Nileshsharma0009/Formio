import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StepCard = ({ step, index, isLast }) => {
  const IconComponent = step.icon;

  return (
    <div className="step-card-wrapper">
      <motion.div
        className="step-card-box"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -6,
          boxShadow: "0 16px 32px rgba(15, 23, 42, 0.08)",
          borderColor: "#cbd5e1",
        }}
      >
        <div className="step-card-top">
          <div
            className="step-card-icon-circle"
            style={{ backgroundColor: step.bgColor, color: step.color }}
          >
            <IconComponent size={22} strokeWidth={2.2} />
          </div>
          <span className="step-number-label">{step.number}</span>
        </div>

        <h3 className="step-card-heading">{step.title}</h3>
        <p className="step-card-desc">{step.description}</p>
      </motion.div>

      {!isLast && (
        <div className="step-connecting-arrow">
          <ArrowRight size={18} />
        </div>
      )}
    </div>
  );
};

export default StepCard;