import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  User,
  PenTool,
  CreditCard,
  Download,
  LayoutDashboard,
  FolderClosed,
  ClipboardList,
  CheckCircle,
  Clock,
} from "lucide-react";
import BrandLogo from "../common/BrandLogo";

const previewDocuments = [
  {
    name: "Passport Size Photo",
    meta: "JPG • 200x230 px • 25 KB",
    icon: User,
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
  },
  {
    name: "Signature",
    meta: "JPG • 200x50 px • 18 KB",
    icon: PenTool,
    iconColor: "#0f172a",
    iconBg: "#f1f5f9",
  },
  {
    name: "10th Marksheet",
    meta: "PDF • 300 DPI • 120 KB",
    icon: FileText,
    iconColor: "#ef4444",
    iconBg: "#fef2f2",
  },
  {
    name: "12th Marksheet",
    meta: "PDF • 300 DPI • 145 KB",
    icon: FileText,
    iconColor: "#ef4444",
    iconBg: "#fef2f2",
  },
  {
    name: "Aadhaar Card",
    meta: "PDF • 300 DPI • 180 KB",
    icon: CreditCard,
    iconColor: "#0284c7",
    iconBg: "#f0f9ff",
  },
];

const checklistItems = [
  "File Size",
  "Dimensions",
  "Format",
  "DPI",
  "File Name",
];

const HeroPreview = () => {
  return (
    <motion.div
      className="hero-preview-container"
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative background glow & dots */}
      <div className="preview-glow" />
      <div className="preview-dots-pattern" />

      {/* Floating Mockup Card */}
      <motion.div
        className="preview-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top Header inside mockup */}
        <div className="preview-header-bar">
          <BrandLogo size="small" />
        </div>

        {/* Mockup Layout */}
        <div className="preview-layout">
          {/* Mini Sidebar */}
          <div className="preview-mini-sidebar">
            <div className="sidebar-pill active">
              <span className="plus-sign">+</span>
              <LayoutDashboard size={13} />
              <span>Dashboard</span>
            </div>
            <div className="sidebar-pill">
              <FolderClosed size={13} />
              <span>My Documents</span>
            </div>
            <div className="sidebar-pill">
              <ClipboardList size={13} />
              <span>Requirements</span>
            </div>
            <div className="sidebar-pill">
              <CheckCircle size={13} />
              <span>Verification</span>
            </div>
            <div className="sidebar-pill">
              <Download size={13} />
              <span>Download</span>
            </div>
            <div className="sidebar-pill">
              <Clock size={13} />
              <span>History</span>
            </div>
          </div>

          {/* Center Document Verification Section */}
          <div className="preview-center-panel">
            <div className="preview-panel-header">
              <div>
                <h4 className="preview-panel-title">Document Verification</h4>
                <p className="preview-panel-subtitle">
                  All documents are verified and ready to submit
                </p>
              </div>
              <span className="all-good-badge">
                <CheckCircle2 size={13} />
                All Good
              </span>
            </div>

            <div className="preview-doc-list">
              {previewDocuments.map((doc, idx) => {
                const IconComponent = doc.icon;
                return (
                  <motion.div
                    key={doc.name}
                    className="preview-doc-row"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }}
                  >
                    <div
                      className="preview-doc-icon-wrap"
                      style={{ background: doc.iconBg, color: doc.iconColor }}
                    >
                      <IconComponent size={15} />
                    </div>
                    <div className="preview-doc-details">
                      <span className="preview-doc-name">{doc.name}</span>
                      <span className="preview-doc-meta">{doc.meta}</span>
                    </div>
                    <span className="preview-verified-badge">
                      <CheckCircle2 size={13} />
                      Verified
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Requirements Matched Panel */}
          <div className="preview-right-card">
            <h5 className="requirements-title">Requirements Matched</h5>

            {/* Circular progress gauge */}
            <div className="progress-ring-box">
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle
                  cx="42"
                  cy="42"
                  r="34"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="42"
                  cy="42"
                  r="34"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="6"
                  strokeDasharray="213.6"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  transform="rotate(-90 42 42)"
                  initial={{ strokeDashoffset: 213.6 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                />
              </svg>
              <div className="progress-value-text">
                <span className="number">100%</span>
              </div>
            </div>

            <p className="requirements-matched-label">All requirements matched</p>

            <ul className="requirements-checklist">
              {checklistItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={13} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              className="preview-download-all-btn"
              whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} />
              Download All
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroPreview;