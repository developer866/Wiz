import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import phones from "../data/phones";

// Extra images per phone — in real app these come from your data
const extraImages = [
  "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
  "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const phone = phones.find((p) => p.id === parseInt(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!phone) return (
    <div style={{ textAlign: "center", padding: "100px 5%" }}>
      <p style={{ fontSize: 48 }}>📱</p>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", marginTop: 16 }}>
        Phone not found
      </h2>
      <button
        onClick={() => navigate("/shop")}
        style={{
          marginTop: 24, background: "#2563EB", color: "#fff",
          padding: "12px 28px", borderRadius: 8,
          border: "none", fontWeight: 600, fontSize: 15,
          cursor: "pointer",
        }}
      >
        Back to Shop
      </button>
    </div>
  );

  const allImages = [phone.image, ...extraImages];

  const whatsappMsg = encodeURIComponent(
    `Hi Wiz! I'm interested in the ${phone.name} (${phone.storage}) for ₦${phone.price.toLocaleString()}. Is it available?`
  );

  return (
    <main style={{ padding: "60px 5%", minHeight: "80vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none", border: "none",
            color: "#2563EB", fontSize: 14, fontWeight: 600,
            cursor: "pointer", marginBottom: 32,
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          ← Back
        </button>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 60, alignItems: "start",
        }}>
          {/* Images */}
          <div>
            {/* Main image */}
            <div style={{
              background: "#F9FAFB", borderRadius: 24,
              padding: 32, display: "flex",
              justifyContent: "center", marginBottom: 16,
              border: "1px solid #E5E7EB",
            }}>
              <img
                src={allImages[activeImg]}
                alt={phone.name}
                style={{
                  width: "100%", maxWidth: 300,
                  height: 280, objectFit: "cover",
                  borderRadius: 12,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {allImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImg(index)}
                  style={{
                    width: 72, height: 72,
                    borderRadius: 10, overflow: "hidden",
                    border: activeImg === index
                      ? "2.5px solid #2563EB"
                      : "2px solid #E5E7EB",
                    cursor: "pointer",
                    transition: "border 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`view ${index + 1}`}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span style={{
              background: phone.condition === "new" ? "#DCFCE7" : "#FEF3C7",
              color: phone.condition === "new" ? "#16A34A" : "#D97706",
              padding: "4px 12px", borderRadius: 20,
              fontSize: 12, fontWeight: 700,
              textTransform: "uppercase",
            }}>
              {phone.condition === "new" ? "Brand New" : "Fairly Used"}
            </span>

            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800, color: "#111827",
              margin: "16px 0 8px",
            }}>
              {phone.name}
            </h1>

            <p style={{
              color: "#6B7280", fontSize: 15,
              lineHeight: 1.7, marginBottom: 24,
            }}>
              {phone.description}
            </p>

            {/* Specs */}
            <div style={{
              background: "#F9FAFB", borderRadius: 12,
              padding: 20, marginBottom: 28,
            }}>
              {[
                { label: "Brand", value: phone.brand },
                { label: "Storage", value: phone.storage },
                { label: "RAM", value: phone.ram },
                { label: "Color", value: phone.color },
                { label: "Condition", value: phone.condition === "new" ? "Brand New" : "Fairly Used" },
              ].map((spec) => (
                <div key={spec.label} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #E5E7EB",
                }}>
                  <span style={{ color: "#6B7280", fontSize: 14 }}>{spec.label}</span>
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 40, fontWeight: 800, color: "#2563EB",
              }}>
                ₦{phone.price.toLocaleString()}
              </span>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/2348000000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block", textAlign: "center",
                background: "#25D366", color: "#fff",
                padding: "16px", borderRadius: 12,
                fontWeight: 700, fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37,211,102,0.4)",
                marginBottom: 12,
              }}
            >
              💬 Order via WhatsApp
            </a>

            <p style={{
              textAlign: "center", fontSize: 13,
              color: "#9CA3AF",
            }}>
              Click to chat directly with us on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}