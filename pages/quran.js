import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuranPage() {
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

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>📖 Al-Qur’an</h1>
      <p style={styles.sub}>Complete Quran (114 Surahs)</p>

      {loading && <p>Loading Quran...</p>}

      <div style={styles.list}>
        {surahs.map((s) => (
          <Link
            key={s.number}
            href={`/quran/${s.number}`}
            style={styles.card}
          >
            <div>
              <strong>
                {s.number}. {s.englishName}
              </strong>
              <br />
              <span style={styles.meta}>
                {s.name} • {s.numberOfAyahs} Ayahs
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "system-ui",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "5px",
  },
  sub: {
    color: "#555",
    marginBottom: "20px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "12px",
  },
  card: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #eee",
    background: "#fff",
    textDecoration: "none",
    color: "#000",
    boxShadow: "0 2px 6px rgba(0,0,0,.05)",
  },
  meta: {
    fontSize: "13px",
    color: "#666",
  },
};
