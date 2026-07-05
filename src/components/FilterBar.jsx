export default function FilterBar({ activeFilter, setActiveFilter, activeCondition, setActiveCondition }) {
  const brands = ["All", "Apple", "Samsung", "Tecno", "Infinix", "Xiaomi"];
  const conditions = ["All", "New", "Fairly Used"];

  return (
    <div style={{ marginBottom: 40 }}>
      {/* Brand filter */}
      <div style={{ marginBottom: 16 }}>
        <p style={{
          fontSize: 13, fontWeight: 600,
          color: "#6B7280", marginBottom: 10,
          textTransform: "uppercase", letterSpacing: 0.5,
        }}>
          Brand
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveFilter(brand)}
              style={{
                padding: "8px 18px", borderRadius: 8,
                border: "1.5px solid",
                borderColor: activeFilter === brand ? "#2563EB" : "#E5E7EB",
                background: activeFilter === brand ? "#2563EB" : "#fff",
                color: activeFilter === brand ? "#fff" : "#374151",
                fontWeight: 500, fontSize: 13,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Condition filter */}
      <div>
        <p style={{
          fontSize: 13, fontWeight: 600,
          color: "#6B7280", marginBottom: 10,
          textTransform: "uppercase", letterSpacing: 0.5,
        }}>
          Condition
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {conditions.map((condition) => (
            <button
              key={condition}
              onClick={() => setActiveCondition(condition)}
              style={{
                padding: "8px 18px", borderRadius: 8,
                border: "1.5px solid",
                borderColor: activeCondition === condition ? "#2563EB" : "#E5E7EB",
                background: activeCondition === condition ? "#EFF6FF" : "#fff",
                color: activeCondition === condition ? "#2563EB" : "#374151",
                fontWeight: 500, fontSize: 13,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}