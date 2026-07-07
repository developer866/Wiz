import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid #E5E7EB",
      padding: "0 5%",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 70,
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28, fontWeight: 800,
            color: "#2563EB", letterSpacing: -1,
          }}>
            Wiz<span style={{ color: "#111827" }}>.</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {links.map((link) => (
            <Link key={link.name} to={link.path} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, fontWeight: 500,
              color: location.pathname === link.path ? "#2563EB" : "#374151",
              textDecoration: "none", transition: "color 0.2s",
            }}>
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/message/CXQBSBY4CHUWC1"
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-nav"
          style={{
            background: "#2563EB", color: "#fff",
            padding: "10px 22px", borderRadius: 8,
            fontWeight: 600, fontSize: 14,
            textDecoration: "none",
          }}
        >
          Buy Now
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          style={{
            background: "none", border: "none",
            cursor: "pointer", color: "#111827",
            display: "flex", alignItems: "center",
          }}
        >
          {menuOpen
            ? <HiX size={28} />
            : <HiMenu size={28} />
          }
        </button>
      </div>

      {menuOpen && (
        <div style={{
          padding: "20px 5% 24px",
          borderTop: "1px solid #E5E7EB",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16, fontWeight: 500,
                padding:6,
                color: location.pathname === link.path ? "#2563EB" : "#374151",
                textDecoration: "none",
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
           href="https://wa.me/message/CXQBSBY4CHUWC1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2563EB", color: "#fff",
              padding: "12px 22px", borderRadius: 8,
              fontWeight: 600, fontSize: 14,
              textDecoration: "none", textAlign: "center",
            }}
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
}