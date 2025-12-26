
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SurahPage() {
  const router = useRouter();
  const { surah } = router.query;

  const [ayahs, setAyahs] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!surah) return;

    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surah}`).then(r => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`).then(r => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surah}/ur.junagarhi`).then(r => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surah}/en.sahih`).then(r => r.json()),
    ]).then(([infoRes, ar, ur, en]) => {
      const combined = ar.data.ayahs.map((a, i) => ({
        number: a.numberInSurah,
        ar: a.text,
        ur: ur.data.ayahs[i].text,
        en: en.data.ayahs[i].text,
      }));

      setInfo(infoRes.data);
      setAyahs(combined);
      setLoading(false);
    });
  }, [surah]);

  if (loading) return <p style={{ padding: 20 }}>Loading Surah...</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>{info.englishName} ({info.name})</h1>
      <p style={{ color: "#555" }}>
        {info.englishNameTranslation} • {info.numberOfAyahs} Ayahs
      </p>

      {ayahs.map(a => (
        <div key={a.number} style={styles.card}>
          <div style={styles.ar}>{a.ar}</div>
          <div style={styles.ur}>{a.ur}</div>
          <div style={styles.en}>{a.en}</div>
        </div>
      ))}
    </main>
  );
}

const styles = {
  card: {
    marginBottom: 18,
    padding: 14,
    borderRadius: 10,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,.05)",
  },
  ar: {
    fontSize: 24,
    textAlign: "right",
    marginBottom: 8,
  },
  ur: {
    fontSize: 15,
    marginBottom: 6,
  },
  en: {
    fontSize: 14,
    color: "#555",
  },
};
