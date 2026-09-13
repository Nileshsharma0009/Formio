import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const ApplicationHeader = () => {
  return (
    <motion.section
      className="application-header"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >

      <div>

        <div className="application-title-row">

          <h2>
            SSC CGL 2026 Application
          </h2>

          <span className="status-badge">
            Active
          </span>

        </div>

        <p>
          Last updated: Today, 10:42 AM
        </p>

      </div>


      <div className="application-actions">

        <button className="secondary-button">
          <Eye size={16} />
          View Requirements
        </button>

        <button className="primary-button">
          <Download size={16} />
          Download All (ZIP)
        </button>

      </div>

    </motion.section>
  );
};

export default ApplicationHeader;