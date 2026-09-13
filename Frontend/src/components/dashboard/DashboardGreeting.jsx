import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { useAuth } from "../../Hooks/useAuth";

const DashboardGreeting = () => {
  const { user } = useAuth();
  const firstName = user?.displayName
    ? user.displayName.split(" ")[0]
    : "Nilesh";

  return (
    <section className="dashboard-greeting-section">
      {/* Left Greeting */}
      <div className="greeting-text-block">
        <h1 className="greeting-heading">Good morning, {firstName}! 👋</h1>
        <p className="greeting-sub">
          Upload your documents and let AI handle the rest.
        </p>
      </div>

      {/* Right 4 Metric Cards */}
      <div className="metrics-cards-row">
        {/* Metric 1: Total Documents */}
        <motion.div
          className="metric-card"
          whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(15, 23, 42, 0.05)" }}
        >
          <div className="metric-icon-box blue">
            <FileText size={18} />
          </div>
          <div className="metric-text-box">
            <span className="metric-number">12</span>
            <span className="metric-title">Total Documents</span>
          </div>
        </motion.div>

        {/* Metric 2: Valid Documents */}
        <motion.div
          className="metric-card"
          whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(15, 23, 42, 0.05)" }}
        >
          <div className="metric-icon-box green">
            <CheckCircle2 size={18} />
          </div>
          <div className="metric-text-box">
            <span className="metric-number">10</span>
            <span className="metric-title">Valid Documents</span>
          </div>
        </motion.div>

        {/* Metric 3: Needs Attention */}
        <motion.div
          className="metric-card"
          whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(15, 23, 42, 0.05)" }}
        >
          <div className="metric-icon-box orange">
            <AlertTriangle size={18} />
          </div>
          <div className="metric-text-box">
            <span className="metric-number">1</span>
            <span className="metric-title">Needs Attention</span>
          </div>
        </motion.div>

        {/* Metric 4: Completion Ring (92%) */}
        <motion.div
          className="metric-card"
          whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(15, 23, 42, 0.05)" }}
        >
          <div className="metric-completion-ring-box">
            <svg width="46" height="46" viewBox="0 0 46 46">
              <circle
                cx="23"
                cy="23"
                r="18"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
              />
              <motion.circle
                cx="23"
                cy="23"
                r="18"
                fill="none"
                stroke="#0284c7"
                strokeWidth="4"
                strokeDasharray="113.1"
                strokeDashoffset="9" // ~92% (113.1 * 0.08)
                strokeLinecap="round"
                transform="rotate(-90 23 23)"
                initial={{ strokeDashoffset: 113.1 }}
                animate={{ strokeDashoffset: 9 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
          </div>
          <div className="metric-text-box">
            <span className="metric-number">92%</span>
            <span className="metric-title">Completion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardGreeting;
