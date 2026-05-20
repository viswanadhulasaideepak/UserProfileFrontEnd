import React from "react";

export default function SearchBar({ setSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input type="text" placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid gray"
        }} />
    </div>
  );
}
