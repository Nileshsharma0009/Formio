import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { workflowSteps } from "../../data/landingData";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="section-container">
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            How <span>Formio</span> Works
          </h2>
          <p className="section-subtitle">
            Simple steps to get your documents ready
          </p>
        </motion.div>

        <div className="workflow-steps-track">
          {workflowSteps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isLast={index === workflowSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;