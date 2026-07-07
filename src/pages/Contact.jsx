import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all required fields");
      return;
    }
    const msg = encodeURIComponent(
      `Hello Wiz! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject || "General Enquiry"}\n\nMessage:\n${form.message}`
    );
   window.open(`https://wa.me/2349033383479?text=${msg}`, "_blank")
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    borderRadius: 10, border: "1.5px solid #E5E7EB",
    fontSize: 15, fontFamily: "'Inter', sans-serif",
    color: "#111827", background: "#fff",
    outline: "none", boxSizing: "border-box",
    transition: "border 0.2s",
  };

  const contactItems = [
    {
      icon: <IoLogoWhatsapp size={24} color="#25D366" />,
      title: "WhatsApp",
      value: "+234 913 506 740",
      link: "https://wa.me/message/CXQBSBY4CHUWC1",
      color: "#25D366",
    },
    {
      icon: <MdEmail size={24} color="#2563EB" />,
      title: "Email",
      value: "hello@wizphones.com",
      link: "mailto:hello@wizphones.com",
      color: "#2563EB",
    },
    {
      icon: <MdLocationOn size={24} color="#EF4444" />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
      color: "#EF4444",
    },
    {
      icon: <MdAccessTime size={24} color="#F59E0B" />,
      title: "Hours",
      value: "Mon - Sat: 8am - 8pm",
      link: null,
      color: "#F59E0B",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #fff 60%)",
        padding: "80px 5% 60px", textAlign: "center",
      }}>
        <span style={{
          background: "#DBEAFE", color: "#2563EB",
          padding: "6px 14px", borderRadius: 20,
          fontSize: 13, fontWeight: 600,
          display: "inline-block", marginBottom: 16,
        }}>
          Get in Touch
        </span>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800, color: "#111827", marginBottom: 16,
        }}>
          We'd love to hear from you
        </h1>
        <p style={{
          fontSize: 16, color: "#6B7280",
          maxWidth: 500, margin: "0 auto", lineHeight: 1.7,
        }}>
          Have questions? Fill the form below and we'll reply instantly on WhatsApp.
        </p>
      </section>

      {/* Main content */}
      <section style={{ padding: "60px 5%" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 60, alignItems: "start",
        }}>

          {/* Contact info */}
          <div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24, fontWeight: 800,
              color: "#111827", marginBottom: 28,
            }}>
              Contact Information
            </h2>

            {contactItems.map((item) => (
              <div key={item.title} style={{
                display: "flex", gap: 16,
                marginBottom: 24, alignItems: "flex-start",
              }}>
                <div style={{
                  background: "#EFF6FF", borderRadius: 12,
                  width: 48, height: 48,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{
                    fontSize: 13, color: "#9CA3AF",
                    fontWeight: 600, marginBottom: 4, margin: 0,
                  }}>
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: item.color, fontSize: 15,
                        fontWeight: 600, textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{
                      color: "#374151", fontSize: 15,
                      fontWeight: 600, margin: 0,
                    }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/message/CXQBSBY4CHUWC1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                background: "#25D366", color: "#fff",
                padding: "14px", borderRadius: 12,
                fontWeight: 700, fontSize: 15,
                textDecoration: "none", marginTop: 12,
                boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
              }}
            >
              <IoLogoWhatsapp size={20} />
              Chat Directly on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div style={{
            background: "#fff", borderRadius: 20,
            padding: 36, border: "1px solid #E5E7EB",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 22, fontWeight: 800,
              color: "#111827", marginBottom: 24,
            }}>
              Send us a message
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#374151", display: "block", marginBottom: 6,
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#2563EB"}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#374151", display: "block", marginBottom: 6,
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#2563EB"}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#374151", display: "block", marginBottom: 6,
                }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    color: form.subject ? "#111827" : "#9CA3AF",
                  }}
                  onFocus={e => e.target.style.borderColor = "#2563EB"}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                >
                  <option value="">Select a subject</option>
                  <option value="Phone Enquiry">Phone Enquiry</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Price Negotiation">Price Negotiation</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#374151", display: "block", marginBottom: 6,
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  rows={5}
                  style={{
                    ...inputStyle, resize: "vertical", lineHeight: 1.6,
                  }}
                  onFocus={e => e.target.style.borderColor = "#2563EB"}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%", background: "#25D366",
                  color: "#fff", padding: "16px",
                  borderRadius: 12, border: "none",
                  fontWeight: 700, fontSize: 16,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.4)",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 10,
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <IoLogoWhatsapp size={20} />
                Send via WhatsApp
              </button>

              <p style={{
                textAlign: "center", fontSize: 12,
                color: "#9CA3AF", marginTop: 12,
              }}>
                This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}