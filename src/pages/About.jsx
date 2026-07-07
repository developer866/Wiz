import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoCheckmarkCircle } from "react-icons/io5";
import { MdVerified, MdLocalShipping } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { BsCurrencyDollar, BsLightningChargeFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #fff 60%)",
        padding: "100px 5% 80px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{
            background: "#DBEAFE", color: "#2563EB",
            padding: "6px 14px", borderRadius: 20,
            fontSize: 13, fontWeight: 600,
            display: "inline-block", marginBottom: 20,
          }}>
            Our Story
          </span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800, color: "#111827",
            marginBottom: 20, lineHeight: 1.1,
          }}>
            We are <span style={{ color: "#2563EB" }}>Wiz.</span>
          </h1>
          <p style={{
            fontSize: 18, color: "#6B7280",
            lineHeight: 1.8, maxWidth: 560, margin: "0 auto",
          }}>
            Your trusted destination for new and fairly used smartphones in Nigeria. Quality guaranteed, prices you'll love.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 60, alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: 13, color: "#2563EB", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: 1, marginBottom: 12,
            }}>
              Our Mission
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800, color: "#111827", marginBottom: 20,
            }}>
              Making quality phones accessible to everyone
            </h2>
            <p style={{
              fontSize: 16, color: "#6B7280",
              lineHeight: 1.8, marginBottom: 16,
            }}>
              Wiz was founded with one simple mission — to make quality smartphones accessible to everyone in Nigeria. Whether you're looking for the latest flagship or a reliable fairly used device, we've got you covered.
            </p>
            <p style={{
              fontSize: 16, color: "#6B7280",
              lineHeight: 1.8, marginBottom: 32,
            }}>
              We carefully source and verify every device we sell, ensuring you get exactly what you pay for. No surprises, no hidden issues — just great phones at honest prices.
            </p>
            <Link to="/shop" style={{
              background: "#2563EB", color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 8,
            }}>
              Browse Our Phones →
            </Link>
          </div>

          {/* Checklist */}
          <div style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            borderRadius: 24, padding: 40,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            {[
              { icon: <IoCheckmarkCircle size={22} color="#fff" />, text: "Every phone tested before sale" },
              { icon: <RiShieldCheckLine size={22} color="#fff" />, text: "Secure and transparent transactions" },
              { icon: <MdLocalShipping size={22} color="#fff" />, text: "Fast delivery across Nigeria" },
              { icon: <IoLogoWhatsapp size={22} color="#fff" />, text: "24/7 WhatsApp support" },
              { icon: <MdVerified size={22} color="#fff" />, text: "Warranty on all new devices" },
            ].map((item) => (
              <div key={item.text} style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "14px 20px",
              }}>
                {item.icon}
                <span style={{ color: "#fff", fontSize: 15, fontWeight: 500 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 5%", background: "#F9FAFB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}>
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "3+", label: "Years in Business" },
              { value: "100%", label: "Verified Devices" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "#fff", borderRadius: 16,
                padding: 32, textAlign: "center",
                border: "1px solid #E5E7EB",
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 40, fontWeight: 800, color: "#2563EB",
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 14, color: "#6B7280", marginTop: 6 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 800, color: "#111827",
            textAlign: "center", marginBottom: 48,
          }}>
            What We Stand For
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}>
            {[
              { icon: <FaHandshake size={32} color="#2563EB" />, title: "Trust", desc: "We build long-term relationships with every customer through transparency and honesty." },
              { icon: <MdVerified size={32} color="#2563EB" />, title: "Quality", desc: "No compromises. Every phone goes through a thorough inspection before it reaches you." },
              { icon: <BsCurrencyDollar size={32} color="#2563EB" />, title: "Value", desc: "We believe great phones shouldn't cost a fortune. Fair prices, always." },
              { icon: <BsLightningChargeFill size={32} color="#2563EB" />, title: "Speed", desc: "Quick responses, fast delivery, and efficient service — we respect your time." },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#fff", borderRadius: 16,
                padding: 28, border: "1px solid #E5E7EB",
              }}>
                <div style={{ marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18, fontWeight: 700,
                  marginBottom: 10, color: "#111827",
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
        padding: "80px 5%", textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(24px, 3vw, 40px)",
          fontWeight: 800, color: "#fff", marginBottom: 16,
        }}>
          Ready to find your perfect phone?
        </h2>
        <p style={{
          color: "#BFDBFE", fontSize: 16, marginBottom: 32,
        }}>
          Browse our collection or chat with us on WhatsApp.
        </p>
        <div style={{
          display: "flex", gap: 16,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          <Link to="/shop" style={{
            background: "#fff", color: "#2563EB",
            padding: "14px 32px", borderRadius: 10,
            fontWeight: 700, fontSize: 15,
            textDecoration: "none",
          }}>
            Shop Now
          </Link>
          <a
            href="https://wa.me/message/CXQBSBY4CHUWC1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid #fff", color: "#fff",
              padding: "14px 32px", borderRadius: 10,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            <IoLogoWhatsapp size={18} /> WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}