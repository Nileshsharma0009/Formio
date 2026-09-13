import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth.js";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const isDemo =
    typeof window !== "undefined" &&
    sessionStorage.getItem("formio_demo") === "true";

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#2563eb",
          fontWeight: 600,
        }}
      >
        Loading Formio...
      </div>
    );
  }

  if (!user && !isDemo) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;