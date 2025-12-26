// Ayah card with tafseer, shaan-e-nuzool, notes
import React, { useState } from "react";

export default function AyahCard({
  ayahNumber,
  arabicText,
  translationUrdu,
  tafseerUrdu,
  shaanENuzool
}) {
  const [showTafseer, setShowTafseer] = useState(false);
  const [showShaan, setShowShaan] = useState(false);

  return (
    <div style={styles.card}>
      
      {/* Ayah Number */}
      <div style={styles.ayahNumber}>
        آیت {ayahNumber}
      </div>

      {/* Arabic Text */}
      <div style={styles.arabic}>
        {arabicText}
      </div>

      {/* Urdu Translation */}
      <div style={styles.translation}>
        {translationUrdu}
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button
          style={styles.btn}
          onClick={() => setShowTafseer(!showTafseer)}
        >
          {showTafseer ? "تفسیر چھپائیں" : "تفسیر دکھائیں"}
        </button>

        {shaanENuzool && (
          <button
            style={styles.btn}
            onClick={() => setShowShaan(!showShaan)}
          >
            {showShaan ? "شانِ نزول چھپائیں" : "شانِ نزول"}
          </button>
        )}
      </div>

      {/* Tafseer */}
      {showTafseer && (
        <div style={styles.tafseer}>
          <strong>تفسیر (ابوالاعلیٰ مودودی):</strong>
          <p>{tafseerUrdu}</p>
        </div>
      )}

      {/* Shaan-e-Nuzool */}
      {showShaan && (
        <div style={styles.shaan}>
          <strong>شانِ نزول:</strong>
          <p>{shaanENuzool}</p>
        </div>
      )}
    </div>
  );
}

/* ================== STYLES ================== */

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#ffffff"
  },

  ayahNumber: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px"
  },

  arabic: {
    fontSize: "26px",
    lineHeight: "2.2",
    textAlign: "right",
    fontFamily: "serif",
    marginBottom: "12px",
    color: "#0a3d2f" // tajweed-ready base color
  },

  translation: {
    fontSize: "16px",
    color: "#222",
    marginBottom: "12px",
    lineHeight: "1.8"
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
    flexWrap: "wrap"
  },

  btn: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #0a3d2f",
    background: "#0a3d2f",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px"
  },

  tafseer: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#f5f7f6",
    borderRadius: "8px",
    fontSize: "15px",
    lineHeight: "1.8"
  },

  shaan: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#fff4e5",
    borderRadius: "8px",
    fontSize: "15px",
    lineHeight: "1.8"
  }
};
