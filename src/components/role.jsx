import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Role() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "48px",
          fontWeight: "700",
          letterSpacing: "2px",
          marginBottom: "48px",
          textShadow: "2px 2px 12px rgba(0,0,0,0.25)",
        }}
      >
        Select Your Role
      </motion.h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 32px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/admin")}
          style={{
            background: "linear-gradient(45deg, #ff6a00, #ee0979)",
            border: "none",
            color: "white",
            padding: "18px 54px",
            fontSize: "22px",
            borderRadius: "40px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            transition: "0.3s ease",
          }}
        >
          Administrator
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 32px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/home")}
          style={{
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
            border: "none",
            color: "white",
            padding: "18px 54px",
            fontSize: "22px",
            borderRadius: "40px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            transition: "0.3s ease",
          }}
        >
          User
        </motion.button>
      </div>
    </div>
  );
}