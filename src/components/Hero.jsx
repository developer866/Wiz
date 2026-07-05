import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import { MdVerified, MdSupportAgent } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section style={{
      background: "linear-gradient(135deg, #EFF6FF 0%, #fff 60%)",
      padding: "80px 5% 100px",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 40,
        flexWrap: "wrap",
      }}>
        <div style={{
          flex: 1, minWidth: 300,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <span style={{
            background: "#DBEAFE", color: "#2563EB",
            padding: "6px 14px", borderRadius: 20,
            fontSize: 13, fontWeight: 600,
            display: "inline-flex", alignItems: "center",
            gap: 6, marginBottom: 20,
          }}>
            <BsPhone size={13} /> New & Fairly Used Phones
          </span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#111827",
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Your Next Phone<br />
            <span style={{ color: "#2563EB" }}>Starts Here.</span>
          </h1>
          <p style={{
            fontSize: 17, color: "#6B7280",
            lineHeight: 1.7, marginBottom: 36, maxWidth: 480,
          }}>
            Discover the latest smartphones and premium fairly used devices at the best prices. Quality guaranteed, delivered to your doorstep.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/shop" style={{
              background: "#2563EB", color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
              display: "inline-flex", alignItems: "center", gap: 8,
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Shop Now <HiArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "2px solid #2563EB", color: "#2563EB",
                padding: "14px 32px", borderRadius: 10,
                fontWeight: 700, fontSize: 15,
                textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#EFF6FF"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <IoLogoWhatsapp size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap",
          }}>
            {[
              { value: "500+", label: "Phones Sold", icon: <BsPhone size={18} /> },
              { value: "100%", label: "Verified Quality", icon: <MdVerified size={18} /> },
              { value: "24/7", label: "Customer Support", icon: <MdSupportAgent size={18} /> },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 28, fontWeight: 800, color: "#2563EB",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 13, color: "#6B7280", marginTop: 2,
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  {stat.icon} {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{
          flex: 1, minWidth: 280,
          display: "flex", justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease 0.2s",
        }}>
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            borderRadius: 32, padding: 32,
            boxShadow: "0 24px 64px rgba(37,99,235,0.3)",
          }}>
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300"
              alt="Latest iPhone"
              style={{ width: 220, borderRadius: 16, display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}