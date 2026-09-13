import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { features } from "../../data/landingData";

const Features = () => {
  return (
    <section
      id="features"
      className="features section"
    >

      <motion.div
        className="section-heading"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >

        <span className="section-label">
          POWERFUL FEATURES
        </span>

        <h2>
          Everything you need to
          <span> apply with confidence.</span>
        </h2>

      </motion.div>


      <div className="features-grid">

        {features.map((feature, index) => (

          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
          />

        ))}

      </div>

    </section>
  );
};

export default Features;