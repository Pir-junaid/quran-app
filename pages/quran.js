import { useEffect, useState } from "react";

export default function QuranPage() {
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Surah Al-Fatiha (example – later we’ll add full navigation)
  useEffect(() => {
    async function loadQuran() {
      try {
        const res = await fetch(
          "https://api.alquran.cloud/v1/surah/1/ar"
        );
        const data = await res.json();
        setAyahs(data.data.ayahs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadQuran();
  }, []);

  return (
    <div className="container">
      <h2>📖 القرآن الكريم</h2>
      <p>صرف عربی قرآن (تلاوت)</p>

      {loading && <p>Loading Quran...</p>}

      {!loading &&
        ayahs.map((a) => (
          <div key={a.number} className="card" style={{ marginBottom: "14px" }}>
            <div className="arabic">{a.text}</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              آیت {a.numberInSurah}
            </div>
          </div>
        ))}

      <footer>
        <p>
          یہ حصہ صرف تلاوت کے لیے ہے — ترجمہ و تفسیر اسٹڈی سیکشن میں
        </p>
      </footer>
    </div>
  );
        }
