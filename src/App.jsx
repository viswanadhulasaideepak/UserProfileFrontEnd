import React, { useState } from "react";
import UserProfileAPI from "./assets/Components/UserProfile/UserProfileAPI";


export default function App() {
  const [userId, setUserId] = useState(1);

  const pageStyle = {
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial"
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px"
  };

  const buttonContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px"
  };

  return (
    <div style={pageStyle}>

      <h1 style={headingStyle}>
        User Profile Dashboard
      </h1>

      <div style={buttonContainer}>

        <button style={buttonStyle} onClick={() => setUserId(1)}>
          User 1
        </button>

        <button style={buttonStyle} onClick={() => setUserId(2)}>
          User 2
        </button>

        <button style={buttonStyle} onClick={() => setUserId(3)}>
          User 3
        </button>

        <button style={buttonStyle} onClick={() => setUserId(4)}>
          User 4
        </button>

        <button style={buttonStyle} onClick={() => setUserId(5)}>
          User 5
        </button>

        <button style={buttonStyle} onClick={() => setUserId(6)}>
          User 6
        </button>

        <button style={buttonStyle} onClick={() => setUserId(7)}>
          User 7
        </button>

        <button style={buttonStyle} onClick={() => setUserId(8)}>
          User 8
        </button>

        <button style={buttonStyle} onClick={() => setUserId(9)}>
          User 9
        </button>

        <button style={buttonStyle} onClick={() => setUserId(10)}>
          User 10
        </button>

      </div>

      <UserProfileAPI userId={userId} />

    </div>
  );
}