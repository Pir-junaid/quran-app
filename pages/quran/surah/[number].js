import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SurahPage() {
  const router = useRouter();
  const { number } = router.query;

  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!number) return;

    fetch(`https://api.alquran.cloud/v1/surah/${number}/ar`)
      .then((res) => res.json())
      .then((data) => {
        setSurah(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [number]);

  if (loading) {
    return <div style={styles.loading}>Loading Quran...</div>;
  }

  if (!surah) {
    return <div style={styles.loading}>Surah not found</div>;
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <Link href="/quran" style={styles.back}>← Surah List</Link>
        <h1 style={styles.surahName}>{surah.name}</h1>
        <p style={styles.meta}>
          {surah.englishName} • {surah.numberOfAyahs} Ayahs
        </p>
      </div>

      {/* Bismillah */}
      {surah.number !== 9 && (
        <p style={styles.bismillah}>
          ﷽
        </p>
      )}

      {/* Ayahs */}
      <div style={styles.text}>
        {surah.ayahs.map((ayah) => (
          <span key={ayah.number} style={styles.ayah}>
            {ayah.text}
            <span style={styles.ayahEnd}> ۝</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    background: "#f6f1e7", // Mushaf paper color
    fontFamily: "serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  back: {
    display: "block",
    textAlign: "left",
    marginBottom: "10px",
    textDecoration: "none",
    color: "#333",
  },
  surahName: {
    fontSize: "28px",
    margin: "0",
  },
  meta: {
    fontSize: "14px",
    color: "#666",
  },
  bismillah: {
    textAlign: "center",
    fontSize: "32px",
    margin: "20px 0",
  },
  text: {
    direction: "rtl",
    textAlign: "justify",
    fontSize: "22px",
    lineHeight: "2.2",
  },
  ayah: {
    marginLeft: "4px",
  },
  ayahEnd: {
    fontSize: "18px",
    margin: "0 6px",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f6f1e7",
    fontSize: "18px",
  },
};
