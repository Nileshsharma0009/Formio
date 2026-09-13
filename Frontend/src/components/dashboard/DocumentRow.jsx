import { motion } from "framer-motion";
import {
  Check,
  AlertTriangle,
  Loader2,
  MoreHorizontal,
  FileText,
} from "lucide-react";

const DocumentRow = ({ doc, isSelected, onToggleSelect }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Valid":
        return (
          <span className="doc-status-pill status-valid">
            <Check size={12} strokeWidth={2.5} />
            Valid
          </span>
        );
      case "Needs Attention":
        return (
          <span className="doc-status-pill status-warning">
            <AlertTriangle size={12} strokeWidth={2.5} />
            Needs Attention
          </span>
        );
      case "Processing":
        return (
          <span className="doc-status-pill status-processing">
            <Loader2 size={12} className="spin" strokeWidth={2.5} />
            Processing
          </span>
        );
      default:
        return <span className="doc-status-pill">{status}</span>;
    }
  };

  const renderThumbnail = () => {
    if (doc.thumbnailType === "image" && doc.thumbnailUrl) {
      return (
        <img
          src={doc.thumbnailUrl}
          alt={doc.title}
          className="doc-thumbnail-img"
        />
      );
    }

    if (doc.thumbnailType === "pdf") {
      return (
        <div className="doc-thumbnail-pdf">
          <FileText size={16} />
          <span className="pdf-label">PDF</span>
        </div>
      );
    }

    if (doc.thumbnailType === "signature") {
      return (
        <div className="doc-thumbnail-signature">
          <svg viewBox="0 0 60 28" width="34" height="18" fill="none">
            <path
              d="M4 22 C 10 6, 18 26, 26 12 C 32 4, 38 24, 46 16 C 50 12, 54 20, 58 14"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    if (doc.thumbnailType === "thumb") {
      return (
        <div className="doc-thumbnail-thumb">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path
              d="M12 2a8 8 0 0 0-8 8v1a4 4 0 0 0 8 0V8a4 4 0 0 1 8 0v3a8 8 0 0 1-8 8"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    if (doc.thumbnailType === "idcard") {
      return (
        <div className="doc-thumbnail-idcard">
          <svg viewBox="0 0 32 20" width="26" height="16" fill="none">
            <rect
              x="1"
              y="1"
              width="30"
              height="18"
              rx="3"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="6"
              x2="14"
              y2="6"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="10"
              x2="22"
              y2="10"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="14"
              x2="18"
              y2="14"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      );
    }

    if (doc.thumbnailType === "declaration") {
      return (
        <div className="doc-thumbnail-decl">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <rect
              x="3"
              y="2"
              width="18"
              height="20"
              rx="2"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <line x1="6" y1="7" x2="18" y2="7" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="6" y1="11" x2="18" y2="11" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="6" y1="15" x2="14" y2="15" stroke="#94a3b8" strokeWidth="1.2" />
          </svg>
        </div>
      );
    }

    return (
      <div className="doc-thumbnail-default">
        <FileText size={16} />
      </div>
    );
  };

  return (
    <motion.tr
      className={`dashboard-doc-table-row ${isSelected ? "row-selected" : ""}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ backgroundColor: "#f8fafc" }}
      transition={{ duration: 0.2 }}
    >
      {/* Checkbox column */}
      <td className="td-checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(doc.id)}
          className="row-checkbox-input"
        />
      </td>

      {/* Document thumbnail and title */}
      <td className="td-document">
        <div className="document-cell-flex">
          <div className="doc-thumbnail-container">{renderThumbnail()}</div>
          <div className="doc-title-meta-wrap">
            <span className="doc-item-title">{doc.title}</span>
            <span className="doc-item-filename">{doc.fileName}</span>
          </div>
        </div>
      </td>

      {/* Requirement description */}
      <td className="td-requirement">
        <span className="doc-requirement-text">{doc.requirement}</span>
      </td>

      {/* Status Pill */}
      <td className="td-status">{getStatusBadge(doc.status)}</td>

      {/* Actions */}
      <td className="td-actions">
        <button className="row-action-menu-btn" title="More options">
          <MoreHorizontal size={17} />
        </button>
      </td>
    </motion.tr>
  );
};

export default DocumentRow;