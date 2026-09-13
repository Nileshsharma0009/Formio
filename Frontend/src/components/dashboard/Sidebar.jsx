import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  ClipboardList,
  Wrench,
  CheckCircle2,
  Download,
  History,
  Settings,
  Sparkles,
} from "lucide-react";
import BrandLogo from "../common/BrandLogo";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
 
  { id: "ai", label: "AI Assistant", icon: MessageSquare },
  { id: "requirements", label: "Requirements", icon: ClipboardList },
  { id: "tools", label: "Auto-Fix & Tools", icon: Wrench },
  { id: "validation", label: "Validation", icon: CheckCircle2 },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "history", label: "History", icon: History },
  { id: "settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <aside className="dashboard-sidebar">
      {/* Brand */}
      <div className="sidebar-brand-wrapper">
        <Link to="/" className="sidebar-brand-link">
          <BrandLogo size="medium" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <motion.button
              key={item.id}
              className={`sidebar-nav-btn ${isActive ? "active" : ""}`}
              onClick={() => setActiveItem(item.id)}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={18} className="sidebar-nav-icon" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Upgrade to Pro Card */}
      <div className="sidebar-upgrade-card">
        <div className="upgrade-card-header">
          <span className="upgrade-card-title">Upgrade to Pro</span>
          <Sparkles size={14} className="sparkle-icon" />
        </div>
        <p className="upgrade-card-text">
          Unlock unlimited uploads, advanced AI, bulk processing and more.
        </p>
        <motion.button
          className="upgrade-now-btn"
          whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
          whileTap={{ scale: 0.98 }}
        >
          Upgrade Now
        </motion.button>
      </div>
    </aside>
  );
};

export default Sidebar;