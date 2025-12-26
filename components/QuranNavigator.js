import React from "react";

export default function QuranNavigator({ surahs, selectedSurah, onSelect }) {
  return (
    <div style={styles.container}>
      <select
        style={styles.select}
        value={selectedSurah}
        onChange={(e) => onSelect(e.target.value)}
      >
        {surahs.map((surah) => (
          <option key={surah.number} value={surah.number}>
            {surah.number}. {surah.name}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: "16px"
  },

  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  }
};// Surah navigation
