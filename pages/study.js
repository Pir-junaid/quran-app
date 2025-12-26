import { useEffect, useState } from "react";

export default function StudyPage() {
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Surah Al-Fatiha with Arabic + Urdu + English
  useEffect(() => {
    async function loadStudyQuran() {
      try {
        const res = await fetch(
          "https://api.alquran.cloud/v1/surah/1/editions/ar,ur.jalandhry,en.asad"
        );
        const data = await res.json();

        const arabic = data.data[0].ayahs;
        const urdu = data.data[1].ayahs;
        const english = data.data[2].ayahs;

        const combined = arabic.map((a, i) => ({
          number: a.numberInSurah,
          arabic: a.text,
          urdu: urdu[i].text,
          english: english[i].text,
        }));

        setAyahs(combined);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadStudyQuran();
  }, []);

  return (
    <div className="container">
      <h2>📖 قرآن اسٹڈی</h2>
      <p>آیت بہ آیت ترجمہ (اردو + English)</p>

      {loading && <p>Loading study Quran...</p>}

      {!loading &&
        ayahs.map((a) => (
          <div key={a.number} className="card" style={{ marginBottom: "16px" }}>
            <div className="arabic">{a.arabic}</div>

            <div className="translation">
              <b>اردو:</b> {a.urdu}
            </div>

            <div className="translation">
              <b>English:</b> {a.english}
            </div>

            {/* Tafseer & Shaan-e-Nuzool will be connected here next */}
          </div>
        ))}

      <footer>
        <p>
          اگلے مرحلے میں: تفسیر مودودی اور شانِ نزول شامل کی جائے گی
        </p>
      </footer>
    </div>
  );
          }// Study Mode (Urdu + English + Tafseer + Shaan-e-Nuzool)
