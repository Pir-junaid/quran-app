import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuranSurahList() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={styles.loading}>
        <p>Loading Surahs...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Al-Quran</h1>
      <p style={styles.subtitle}>Select a Surah to read</p>

      <div style={styles.list}>
        {surahs.map((surah) => (
          <Link
            key={surah.number}
            href={`/quran/surah/${surah.number}`}
            style={styles.card}
          >
            <div>
              <h3 style={styles.surahName}>
                {surah.number}. {surah.englishName}
              </h3>
              <p style={styles.arabic}>{surah.name}</p>
              <p style={styles.info}>
                {surah.numberOfAyahs} Ayahs • {surah.revelationType}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    background: "#f7f3eb", // parchment look
    fontFamily: "system-ui",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "5px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#555",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "12px",
  },
  card: {
    textDecoration: "none",
    background: "#fff",
    padding: "14px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    color: "#000",
  },
  surahName: {
    margin: 0,
    fontSize: "16px",
  },
  arabic: {
    fontSize: "20px",
    textAlign: "right",
    fontFamily: "serif",
  },
  info: {
    fontSize: "12px",
    color: "#666",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f7f3eb",
  },
};
