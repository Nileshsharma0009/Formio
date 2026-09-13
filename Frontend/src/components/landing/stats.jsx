import { motion } from "framer-motion";
import { stats } from "../../data/landingData";

const Stats = () => {
  return (
    <section className="stats-bar-section">
      <div className="section-container">
        <motion.div
          className="stats-bar-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                className="stat-metric-block"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
              >
                <div
                  className="stat-metric-icon"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <div className="stat-metric-text">
                  <span className="stat-metric-value">{item.value}</span>
                  <h4 className="stat-metric-label">{item.label}</h4>
                  <p className="stat-metric-sub">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;