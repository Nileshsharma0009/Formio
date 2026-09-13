import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, HelpCircle, Bell, LogOut, User as UserIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../Hooks/useAuth";
import { logoutUser } from "../../services/authService";

const Topbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem("formio_demo");
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      sessionStorage.removeItem("formio_demo");
      navigate("/login");
    }
  };

  const displayName = user?.displayName || "Nilesh Patil";
  const displayEmail = user?.email || "nilesh@example.com";
  const userPhoto =
    user?.photoURL ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80";

  return (
    <header className="dashboard-topbar">
      {/* Global Search Bar */}
      <div className="topbar-search-wrap">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          className="topbar-search-input"
          placeholder="Search documents, ask AI, or find anything..."
        />
        <span className="search-shortcut-badge">⌘ K</span>
      </div>

      {/* Right Controls */}
      <div className="topbar-right-controls">
        {/* Help button */}
        <button className="topbar-help-btn" title="Help & Docs">
          <HelpCircle size={17} />
          <span>Help</span>
        </button>

        {/* Notifications with red 1 badge */}
        <button className="topbar-notification-btn" title="1 new notification">
          <Bell size={18} />
          <span className="notification-badge-red">1</span>
        </button>

        {/* User Profile */}
        <div className="user-profile-menu-container" ref={dropdownRef}>
          <button
            className="user-profile-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={userPhoto}
              alt={displayName}
              className="user-avatar-img"
            />
            <div className="user-text-details">
              <span className="user-full-name">{displayName}</span>
              <span className="user-email-address">{displayEmail}</span>
            </div>
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="user-dropdown-menu"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <div className="dropdown-header">
                  <strong>{displayName}</strong>
                  <p>{displayEmail}</p>
                </div>
                <div className="dropdown-divider" />
                <button
                  className="dropdown-item"
                  onClick={() => navigate("/")}
                >
                  <UserIcon size={15} />
                  <span>Landing Page</span>
                </button>
                <button
                  className="dropdown-item logout"
                  onClick={handleLogout}
                >
                  <LogOut size={15} />
                  <span>Log out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Topbar;