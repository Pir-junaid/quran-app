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
    ]).then(([infoRes, ar]) => {
      const onlyArabic = ar.data.ayahs.map(a => ({
        number: a.numberInSurah,
        ar: a.text,
      }));

      setInfo(infoRes.data);
      setAyahs(onlyArabic);
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
        </div>
      ))}
    </main>
  );
}

const styles = {
  card: {
    marginBottom: 18,
    padding: 16,
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,.06)",
  },
  ar: {
    fontSize: 28,
    textAlign: "right",
    lineHeight: "2",
    fontFamily: "serif",
  },
};
