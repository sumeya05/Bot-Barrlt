// src/components/WelcomeMessage.jsx
import React from "react";

function WelcomeMessage() {
  return (
    <header style={headerStyle}>
      <h1>🤖 Welcome to the Bot Army Manager</h1>
      <p>Click bots to add/remove them from your army.</p>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#222",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  borderRadius: "8px",
  marginBottom: "1rem",
};

export default WelcomeMessage;
