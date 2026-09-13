// import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardGreeting from "./DashboardGreeting";
import UploadDropzone from "./UploadDropzone";
import DocumentsPanel from "./DocumentsPanel";
import AIAssistant from "./AIAssistant";
import "../../styles/dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-app-root">
      {/* Left Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="dashboard-main-area">
        <Topbar />

        <div className="dashboard-scrollable-body">
          {/* Greeting & 4 Metric Cards */}
          <DashboardGreeting />

          {/* Two-Column Working Area */}
          <div className="dashboard-workspace-grid">
            {/* Left Column: Dropzone & Documents Table */}
            <div className="workspace-left-col">
              <UploadDropzone />
              <DocumentsPanel />
            </div>

            {/* Right Column: AI Assistant Chat */}
            <div className="workspace-right-col">
              <AIAssistant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;