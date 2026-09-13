import { motion } from "framer-motion";

const BrandLogo = ({ size = "medium", light = false }) => {
  const isSmall = size === "small";
  const isLarge = size === "large";

  const markSize = isSmall ? 28 : isLarge ? 38 : 32;
  const fontSize = isSmall ? 18 : isLarge ? 24 : 20;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        style={{
          width: markSize,
          height: markSize,
          borderRadius: Math.round(markSize * 0.28),
          background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
          flexShrink: 0,
        }}
      >
        <svg
          width={Math.round(markSize * 0.65)}
          height={Math.round(markSize * 0.65)}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Folded Doc / F geometric silhouette */}
          <path
            d="M5 4C5 2.89543 5.89543 2 7 2H14L19 7V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M14 2V7H19L14 2Z"
            fill="#93c5fd"
          />
          <path
            d="M8 12H16M8 16H13"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <span
        style={{
          fontSize,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: light ? "#ffffff" : "#0f172a",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          userSelect: "none",
        }}
      >
        Formio
      </span>
    </div>
  );
};

export default BrandLogo;
