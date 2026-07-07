import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import PhoneCard from "../components/PhoneCard";
import phones from "../data/phones";
import { MdVerified, MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  const featured = phones.filter((p) => p.featured);
  const brands = ["Apple", "Samsung", "Tecno", "Infinix", "Xiaomi"];

  return (
    <main>
      <Hero />

      {/* Brands */}
      <section style={{
        padding: "48px 5%",
        borderBottom: "1px solid #F3F4F6",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{
            textAlign: "center", fontSize: 13,
            color: "#9CA3AF", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: 1,
            marginBottom: 24,
          }}>
            Brands we carry
          </p>
          <div style={{
            display: "flex", justifyContent: "center",
            gap: 40, flexWrap: "wrap",
          }}>
            {brands.map((brand) => (
              <span key={brand} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18, fontWeight: 700,
                color: "#D1D5DB",
              }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured phones */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", marginBottom: 40,
            flexWrap: "wrap", gap: 16,
          }}>
            <div>
              <p style={{
                fontSize: 13, color: "#2563EB",
                fontWeight: 600, textTransform: "uppercase",
                letterSpacing: 1, marginBottom: 8,
              }}>
                Hand picked
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800, color: "#111827",
              }}>
                Featured Phones
              </h2>
            </div>
            <Link to="/shop" style={{
              border: "2px solid #2563EB", color: "#2563EB",
              padding: "10px 24px", borderRadius: 8,
              fontWeight: 600, fontSize: 14,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}>
              View All <HiArrowRight size={15} />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}>
            {featured.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Wiz */}
      <section style={{ padding: "80px 5%", background: "#F9FAFB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 800, color: "#111827",
            textAlign: "center", marginBottom: 48,
          }}>
            Why Choose Wiz?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
          }}>
            {[
              { icon: <MdVerified size={36} color="#2563EB" />, title: "Verified Quality", desc: "Every phone is tested and verified before sale." },
              { icon: <RiShieldCheckLine size={36} color="#2563EB" />, title: "Best Prices", desc: "Competitive prices on all new and fairly used devices." },
              { icon: <MdLocalShipping size={36} color="#2563EB" />, title: "Fast Delivery", desc: "Quick delivery across Lagos and nationwide." },
              { icon: <MdSupportAgent size={36} color="#2563EB" />, title: "24/7 Support", desc: "We're always available on WhatsApp to help you." },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#fff", borderRadius: 16,
                padding: 28, textAlign: "center",
                border: "1px solid #E5E7EB",
              }}>
                <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18, fontWeight: 700,
                  marginBottom: 8, color: "#111827",
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
        padding: "80px 5%", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>
            Ready to get your next phone?
          </h2>
          <p style={{
            color: "#BFDBFE", fontSize: 16,
            marginBottom: 32, lineHeight: 1.6,
          }}>
            Chat with us on WhatsApp and we'll help you find the perfect device.
          </p>
          <a
            href="https://wa.me/message/CXQBSBY4CHUWC1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#fff", color: "#2563EB",
              padding: "16px 36px", borderRadius: 10,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 10,
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            <IoLogoWhatsapp size={20} color="#25D366" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}