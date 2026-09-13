import { useEffect, useState } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import DocumentRow from "./DocumentRow";
import { getDocuments } from "../../services/documentService";

const DocumentsPanel = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState([]);

  // Backend data
  const [documents, setDocuments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
   * Load documents belonging to the
   * currently authenticated user.
   */
  useEffect(() => {
    const loadDocuments = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getDocuments();

        setDocuments(response.data || []);
      } catch (error) {
        console.error("Failed to load documents:", error);

        setError(
          error.message || "Failed to load documents"
        );
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  /*
   * Filter documents based on active tab
   */
  const filteredDocs = documents.filter((doc) => {
    if (activeTab === "all") {
      return true;
    }

    if (activeTab === "valid") {
      return doc.status === "Valid";
    }

    if (activeTab === "attention") {
      return doc.status === "Needs Attention";
    }

    if (activeTab === "processing") {
      return doc.status === "Processing";
    }

    return true;
  });

  /*
   * Dynamic counts
   */
  const allCount = documents.length;

  const validCount = documents.filter(
    (doc) => doc.status === "Valid"
  ).length;

  const attentionCount = documents.filter(
    (doc) => doc.status === "Needs Attention"
  ).length;

  const processingCount = documents.filter(
    (doc) => doc.status === "Processing"
  ).length;

  /*
   * Check whether every visible document
   * is selected.
   */
  const allSelected =
    filteredDocs.length > 0 &&
    filteredDocs.every((doc) =>
      selectedIds.includes(doc.id)
    );

  /*
   * Select / deselect all visible documents
   */
  const handleToggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds((prev) =>
        prev.filter(
          (id) =>
            !filteredDocs.some(
              (doc) => doc.id === id
            )
        )
      );

      return;
    }

    setSelectedIds((prev) => [
      ...new Set([
        ...prev,
        ...filteredDocs.map((doc) => doc.id),
      ]),
    ]);
  };

  /*
   * Select / deselect one document
   */
  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="dashboard-documents-card">

      {/* Top Filter & Action Bar */}
      <div className="doc-table-topbar">

        {/* Filter Tabs */}
        <div className="doc-filter-tabs">

          <button
            className={`filter-tab-pill ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All ({allCount})
          </button>

          <button
            className={`filter-tab-pill ${
              activeTab === "valid" ? "active" : ""
            }`}
            onClick={() => setActiveTab("valid")}
          >
            Valid ({validCount})
          </button>

          <button
            className={`filter-tab-pill ${
              activeTab === "attention"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveTab("attention")
            }
          >
            Needs Attention ({attentionCount})
          </button>

          <button
            className={`filter-tab-pill ${
              activeTab === "processing"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveTab("processing")
            }
          >
            Processing ({processingCount})
          </button>

        </div>

        {/* Right Actions */}
        <div className="doc-table-actions-right">

          <button className="table-filter-btn">
            <Filter size={14} />
            <span>Filter</span>
            <span className="chevron-small">
              ▾
            </span>
          </button>

          <button className="table-filter-btn">
            <ArrowUpDown size={14} />
            <span>Sort by</span>
            <span className="chevron-small">
              ▾
            </span>
          </button>

        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="documents-loading">
          Loading documents...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="documents-error">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading &&
        !error &&
        documents.length === 0 && (
          <div className="documents-empty-state">
            <h3>No documents yet</h3>

            <p>
              Upload your documents to get started.
            </p>
          </div>
        )}

      {/* Table */}
      {!loading &&
        !error &&
        documents.length > 0 && (

          <div className="doc-table-container">

            <table className="doc-table">

              <thead>
                <tr>

                  <th className="th-checkbox">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={
                        handleToggleSelectAll
                      }
                      className="row-checkbox-input"
                    />
                  </th>

                  <th className="th-document">
                    Document
                  </th>

                  <th className="th-requirement">
                    Requirement
                  </th>

                  <th className="th-status">
                    Status
                  </th>

                  <th className="th-actions">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredDocs.map((doc) => (

                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    isSelected={selectedIds.includes(
                      doc.id
                    )}
                    onToggleSelect={
                      handleToggleSelect
                    }
                  />

                ))}

              </tbody>

            </table>

          </div>
        )}

      {/* No documents for selected filter */}
      {!loading &&
        !error &&
        documents.length > 0 &&
        filteredDocs.length === 0 && (

          <div className="documents-empty-state">
            <h3>No documents found</h3>

            <p>
              There are no documents matching this
              status.
            </p>
          </div>
        )}

    </div>
  );
};

export default DocumentsPanel;