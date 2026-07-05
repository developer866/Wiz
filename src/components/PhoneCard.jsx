import { Link } from "react-router-dom";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";

export default function PhoneCard({ phone }) {
  const [hovered, setHovered] = useState(false);

  const formatPrice = (price) => `₦${price.toLocaleString()}`;

  return (
    <Link
      to={`/shop/${phone.id}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: "#fff", borderRadius: 16,
        border: "1px solid #E5E7EB", overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
      }}>
        <div style={{
          background: "#F9FAFB", padding: 24,
          display: "flex", justifyContent: "center",
          position: "relative",
        }}>
          <img
            src={phone.image}
            alt={phone.name}
            style={{
              height: 180, width: "100%",
              objectFit: "cover", borderRadius: 8,
            }}
          />
          <span style={{
            position: "absolute", top: 12, left: 12,
            background: phone.condition === "new" ? "#DCFCE7" : "#FEF3C7",
            color: phone.condition === "new" ? "#16A34A" : "#D97706",
            padding: "4px 10px", borderRadius: 20,
            fontSize: 11, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 0.5,
            display: "flex", alignItems: "center", gap: 4,
          }}>
            {phone.condition === "new"
              ? <><MdVerified size={12} /> New</>
              : <><RiShieldCheckLine size={12} /> Fairly Used</>
            }
          </span>
        </div>

        <div style={{ padding: "16px 20px 20px" }}>
          <p style={{
            fontSize: 12, color: "#6B7280", fontWeight: 500,
            marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5,
          }}>
            {phone.brand}
          </p>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16, fontWeight: 700,
            color: "#111827", marginBottom: 8,
          }}>
            {phone.name}
          </h3>
          <p style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 12 }}>
            {phone.storage} · {phone.ram} RAM
          </p>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 20, fontWeight: 800, color: "#2563EB",
            }}>
              {formatPrice(phone.price)}
            </span>
            <span style={{
              background: hovered ? "#2563EB" : "#EFF6FF",
              color: hovered ? "#fff" : "#2563EB",
              padding: "6px 12px", borderRadius: 8,
              fontSize: 12, fontWeight: 600,
              transition: "all 0.3s",
              display: "flex", alignItems: "center", gap: 4,
            }}>
              View <HiArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}