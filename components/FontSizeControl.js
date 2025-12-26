import React from "react";

export default function FontSizeControl({ fontSize, setFontSize }) {
  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => setFontSize(fontSize - 2)}
        disabled={fontSize <= 18}
      >
        −
      </button>

      <span style={styles.text}>
        {fontSize}px
      </span>

      <button
        style={styles.button}
        onClick={() => setFontSize(fontSize + 2)}
        disabled={fontSize >= 40}
      >
        +
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px"
  },

  button: {
    padding: "6px 12px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "1px solid #0a3d2f",
    backgroundColor: "#0a3d2f",
    color: "#fff",
    cursor: "pointer"
  },

  text: {
    fontSize: "14px",
    color: "#333"
  }
};// Font size slider
