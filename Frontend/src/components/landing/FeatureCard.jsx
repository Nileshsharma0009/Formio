import { motion } from "framer-motion";

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <div className="feature-icon-wrap">
        <Icon size={22} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;