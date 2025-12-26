import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SurahList() {
  const [surahs, setSurahs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then(res => res.json())
      .then(data => setSurahs(data.data));
  }, []);

  function openSurah(surah) {
    // save selected surah
    localStorage.setItem("selectedSurah", surah.number);

    // start reading from page 1 (or later mapping)
    router.push("/quran/page/1");
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>📖 القرآن الكريم</h1>
      <p style={styles.sub}>Surah select karein</p>

      <div style={styles.list}>
        {surahs.map(s => (
          <div
            key={s.number}
            style={styles.card}
            onClick={() => openSurah(s)}
          >
            <div style={styles.ar}>{s.name}</div>
            <div style={styles.en}>
              {s.number}. {s.englishName}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: 20,
    background: "#f3efe6",
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    fontSize: 26
  },
  sub: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555"
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))",
    gap: 12
  },
  card: {
    background: "#fff",
    padding: 12,
    borderRadius: 10,
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,.05)"
  },
  ar: {
    fontSize: 20,
    marginBottom: 6
  },
  en: {
    fontSize: 13,
    color: "#666"
  }
};
