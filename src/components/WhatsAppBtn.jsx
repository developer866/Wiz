import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppBtn() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/2348000000000"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed", bottom: 28, right: 28,
        background: "#25D366", color: "#fff",
        borderRadius: 50, padding: "14px 18px",
        display: "flex", alignItems: "center", gap: 10,
        textDecoration: "none", zIndex: 999,
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "all 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      <IoLogoWhatsapp size={26} />
      {hovered && (
        <span style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
          Chat with us
        </span>
      )}
    </a>
  );
}