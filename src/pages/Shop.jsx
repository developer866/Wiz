import { useState } from "react";
import PhoneCard from "../components/PhoneCard";
import FilterBar from "../components/FilterBar";
import phones from "../data/phones";

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCondition, setActiveCondition] = useState("All");

  const filtered = phones.filter((phone) => {
    const brandMatch = activeFilter === "All" || phone.brand === activeFilter;
    const conditionMatch =
      activeCondition === "All" ||
      (activeCondition === "New" && phone.condition === "new") ||
      (activeCondition === "Fairly Used" && phone.condition === "fairly-used");
    return brandMatch && conditionMatch;
  });

  return (
    <main style={{ padding: "60px 5%", minHeight: "80vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800, color: "#111827", marginBottom: 8,
          }}>
            All Phones
          </h1>
          <p style={{ color: "#6B7280", fontSize: 15 }}>
            {filtered.length} phone{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeCondition={activeCondition}
          setActiveCondition={setActiveCondition}
        />

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: 48, marginBottom: 16 }}>📱</p>
            <p style={{ fontSize: 18, color: "#6B7280" }}>
              No phones found for this filter.
            </p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}>
            {filtered.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}