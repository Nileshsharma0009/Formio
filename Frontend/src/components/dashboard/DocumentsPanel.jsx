import { useState } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import DocumentRow from "./DocumentRow";

const initialDocuments = [
  {
    id: "1",
    title: "Passport Size Photo",
    fileName: "photo.jpg",
    requirement: "Passport size photo with clear face",
    status: "Valid",
    thumbnailType: "image",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Signature",
    fileName: "signature.jpg",
    requirement: "Clear signature on white background",
    status: "Valid",
    thumbnailType: "signature",
  },
  {
    id: "3",
    title: "Left Thumb Impression",
    fileName: "thumb.jpg",
    requirement: "Clear left thumb impression",
    status: "Valid",
    thumbnailType: "thumb",
  },
  {
    id: "4",
    title: "Handwritten Declaration",
    fileName: "declaration.jpg",
    requirement: "Handwritten text as per format",
    status: "Needs Attention",
    thumbnailType: "declaration",
  },
  {
    id: "5",
    title: "Matriculation Certificate",
    fileName: "marksheet_10th.pdf",
    requirement: "10th marksheet / certificate",
    status: "Valid",
    thumbnailType: "pdf",
  },
  {
    id: "6",
    title: "12th Marksheet",
    fileName: "marksheet_12th.pdf",
    requirement: "12th marksheet / certificate",
    status: "Valid",
    thumbnailType: "pdf",
  },
  {
    id: "7",
    title: "Aadhaar Card",
    fileName: "aadhaar.jpg",
    requirement: "Aadhaar Card (Front side)",
    status: "Processing",
    thumbnailType: "idcard",
  },
  {
    id: "8",
    title: "Caste Certificate",
    fileName: "caste.pdf",
    requirement: "Caste certificate (if applicable)",
    status: "Valid",
    thumbnailType: "pdf",
  },
];

const DocumentsPanel = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState([]);
  const [documents] = useState(initialDocuments);

  // Filter items based on active tab
  const filteredDocs = documents.filter((doc) => {
    if (activeTab === "all") return true;
    if (activeTab === "valid") return doc.status === "Valid";
    if (activeTab === "attention") return doc.status === "Needs Attention";
    if (activeTab === "processing") return doc.status === "Processing";
    return true;
  });

  const allSelected =
    filteredDocs.length > 0 &&
    filteredDocs.every((doc) => selectedIds.includes(doc.id));

  const handleToggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredDocs.map((doc) => doc.id));
    }
  };

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="dashboard-documents-card">
      {/* Top Filter & Action Bar */}
      <div className="doc-table-topbar">
        {/* Filter Tabs */}
        <div className="doc-filter-tabs">
          <button
            className={`filter-tab-pill ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All (12)
          </button>
          <button
            className={`filter-tab-pill ${activeTab === "valid" ? "active" : ""}`}
            onClick={() => setActiveTab("valid")}
          >
            Valid (10)
          </button>
          <button
            className={`filter-tab-pill ${
              activeTab === "attention" ? "active" : ""
            }`}
            onClick={() => setActiveTab("attention")}
          >
            Needs Attention (1)
          </button>
          <button
            className={`filter-tab-pill ${
              activeTab === "processing" ? "active" : ""
            }`}
            onClick={() => setActiveTab("processing")}
          >
            Processing (1)
          </button>
        </div>

        {/* Right Sort & Filter Buttons */}
        <div className="doc-table-actions-right">
          <button className="table-filter-btn">
            <Filter size={14} />
            <span>Filter</span>
            <span className="chevron-small">▾</span>
          </button>

          <button className="table-filter-btn">
            <ArrowUpDown size={14} />
            <span>Sort by</span>
            <span className="chevron-small">▾</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="doc-table-container">
        <table className="doc-table">
          <thead>
            <tr>
              <th className="th-checkbox">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleToggleSelectAll}
                  className="row-checkbox-input"
                />
              </th>
              <th className="th-document">Document</th>
              <th className="th-requirement">Requirement</th>
              <th className="th-status">Status</th>
              <th className="th-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc) => (
              <DocumentRow
                key={doc.id}
                doc={doc}
                isSelected={selectedIds.includes(doc.id)}
                onToggleSelect={handleToggleSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsPanel;