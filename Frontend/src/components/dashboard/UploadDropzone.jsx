import { useRef } from "react";
import { CloudUpload, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const UploadDropzone = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (onUpload) {
        onUpload(Array.from(e.target.files));
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (onUpload) {
        onUpload(Array.from(e.dataTransfer.files));
      }
    }
  };

  return (
    <motion.div
      className="dashboard-upload-dropzone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      whileHover={{ borderColor: "#93c5fd" }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <div className="dropzone-left-content" onClick={handleClick}>
        <div className="dropzone-cloud-icon-circle">
          <CloudUpload size={28} className="cloud-icon" />
        </div>
        <div className="dropzone-text-details">
          <p className="dropzone-main-text">
            <strong>Drag & drop your documents here</strong>{" "}
            <span className="dropzone-browse-link">or click to browse</span>
          </p>
          <span className="dropzone-format-sub">
            Supports: PDF, JPG, PNG (Max 20 MB per file)
          </span>
        </div>
      </div>

      <motion.button
        className="dropzone-upload-btn"
        onClick={handleClick}
        whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
        whileTap={{ scale: 0.97 }}
      >
        <span>Upload Documents</span>
        <ChevronDown size={15} />
      </motion.button>
    </motion.div>
  );
};

export default UploadDropzone;
