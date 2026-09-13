import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useAuth } from "../../Hooks/useAuth";
import { getDocuments } from "../../services/documentService";

const DashboardGreeting = () => {
  const { user } = useAuth();

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const firstName = useMemo(() => {
    return (
      user?.displayName?.trim()?.split(/\s+/)[0] ||
      "there"
    );
  }, [user]);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await getDocuments();
        setDocuments(response?.data || []);
      } catch (error) {
        console.error("Failed to load dashboard metrics:", error);
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  const metrics = useMemo(() => {
    const total = documents.length;

    const valid = documents.filter(
      (doc) => doc.status === "Valid"
    ).length;

    const needsAttention = documents.filter(
      (doc) => doc.status === "Needs Attention"
    ).length;

    const processing = documents.filter(
      (doc) => doc.status === "Processing"
    ).length;

    /*
      Completion logic can later be replaced by a backend
      completionPercentage field.

      For now:
      completed = valid documents
      completion = valid / total
    */
    const completion =
      total > 0 ? Math.round((valid / total) * 100) : 0;

    return {
      total,
      valid,
      needsAttention,
      processing,
      completion,
    };
  }, [documents]);

  const metricCards = [
    {
      label: "Total Documents",
      value: metrics.total,
      icon: FileText,
      iconClass: "blue",
    },
    {
      label: "Valid Documents",
      value: metrics.valid,
      icon: CheckCircle2,
      iconClass: "green",
    },
    {
      label: "Needs Attention",
      value: metrics.needsAttention,
      icon: AlertTriangle,
      iconClass: "orange",
    },
  ];

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  const completionOffset =
    circumference -
    (circumference * metrics.completion) / 100;

  return (
    <section className="dashboard-greeting-section">
      {/* Greeting */}
      <div className="greeting-text-block">
        <h1 className="greeting-heading">
          Good morning, {firstName}! 👋
        </h1>

        <p className="greeting-sub">
          Upload your documents and let AI handle the rest.
        </p>
      </div>

      {/* Metrics */}
      <div className="metrics-cards-row">
        {metricCards.map((metric) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.label}
              className="metric-card"
              whileHover={{
                y: -2,
                boxShadow:
                  "0 8px 16px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div
                className={`metric-icon-box ${metric.iconClass}`}
              >
                <Icon size={18} />
              </div>

              <div className="metric-text-box">
                <span className="metric-number">
                  {loading ? "—" : metric.value}
                </span>

                <span className="metric-title">
                  {metric.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Completion */}
        <motion.div
          className="metric-card"
          whileHover={{
            y: -2,
            boxShadow:
              "0 8px 16px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div className="metric-completion-ring-box">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
            >
              <circle
                cx="23"
                cy="23"
                r={radius}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
              />

              <motion.circle
                cx="23"
                cy="23"
                r={radius}
                fill="none"
                stroke="#0284c7"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={
                  loading
                    ? circumference
                    : completionOffset
                }
                strokeLinecap="round"
                transform="rotate(-90 23 23)"
                initial={{
                  strokeDashoffset: circumference,
                }}
                animate={{
                  strokeDashoffset: loading
                    ? circumference
                    : completionOffset,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              />
            </svg>
          </div>

          <div className="metric-text-box">
            <span className="metric-number">
              {loading
                ? "—"
                : `${metrics.completion}%`}
            </span>

            <span className="metric-title">
              Completion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardGreeting;