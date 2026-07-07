import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer style={{
      background: "#111827", color: "#fff",
      padding: "60px 5% 30px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28, fontWeight: 800, color: "#2563EB",
            }}>
              Wiz<span style={{ color: "#fff" }}>.</span>
            </span>
            <p style={{
              color: "#9CA3AF", fontSize: 14,
              lineHeight: 1.7, marginTop: 12, maxWidth: 220,
            }}>
              Your trusted destination for new and fairly used smartphones in Nigeria.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
              {[
                { icon: <IoLogoWhatsapp size={20} />, link: "https://wa.me/234913506740", color: "#25D366" },
                { icon: <IoLogoInstagram size={20} />, link: "#", color: "#E1306C" },
                { icon: <IoLogoTwitter size={20} />, link: "#", color: "#1DA1F2" },
                { icon: <IoLogoFacebook size={20} />, link: "#", color: "#1877F2" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#9CA3AF", transition: "color 0.2s",
                    display: "flex", alignItems: "center",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = social.color}
                  onMouseLeave={e => e.currentTarget.style.color = "#9CA3AF"}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, marginBottom: 16,
            }}>
              Quick Links
            </h4>
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  display: "block", color: "#9CA3AF",
                  fontSize: 14, marginBottom: 10,
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#9CA3AF"}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16, fontWeight: 700, marginBottom: 16,
            }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="https://wa.me/234913506740"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#25D366", fontSize: 14,
                  textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <IoLogoWhatsapp size={16} /> WhatsApp Us
              </a>
              <a
                href="mailto:hello@wizphones.com"
                style={{
                  color: "#9CA3AF", fontSize: 14,
                  textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <MdEmail size={16} /> hello@wizphones.com
              </a>
              <p style={{
                color: "#9CA3AF", fontSize: 14,
                display: "flex", alignItems: "center", gap: 8, margin: 0,
              }}>
                <MdLocationOn size={16} /> Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid #1F2937",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: "#6B7280", fontSize: 13 }}>
            © 2025 Wiz. All rights reserved.
          </p>
          <p style={{ color: "#6B7280", fontSize: 13 }}>
            Built with ❤️ in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}