import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AYAH_PER_PAGE = 12;

export default function QuranPage() {
  const router = useRouter();
  const { page } = router.query;
  const pageNum = parseInt(page || "1");

  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPage() {
      setLoading(true);

      const res = await fetch(
        "https://api.alquran.cloud/v1/quran/ar.alafasy"
      );
      const data = await res.json();

      const allAyahs = [];
      data.data.surahs.forEach((s) => {
        s.ayahs.forEach((a) => {
          allAyahs.push({
            text: a.text,
            surah: s.name,
            number: a.numberInSurah,
            surahNumber: s.number,
          });
        });
      });

      const start = (pageNum - 1) * AYAH_PER_PAGE;
      const pageAyahs = allAyahs.slice(start, start + AYAH_PER_PAGE);

      setSurahName(pageAyahs[0]?.surah || "");
      setAyahs(pageAyahs);
      setLoading(false);
    }

    loadPage();
  }, [pageNum]);

  // Swipe handling
  let startX = 0;
  function onTouchStart(e) {
    startX = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) router.push(`/quran/page/${pageNum + 1}`);
    if (endX - startX > 50 && pageNum > 1)
      router.push(`/quran/page/${pageNum - 1}`);
  }

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <main
      className="quran-page"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Surah Header */}
      <div className="surah-header">
        <h2>{surahName}</h2>
      </div>

      {/* Bismillah */}
      {ayahs[0]?.surahNumber !== 1 && (
        <div className="bismillah">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
      )}

      {/* Quran Text */}
      <div className="quran-text">
        {ayahs.map((a, i) => (
          <span key={i}>
            {a.text}
            <span className="ayah-end"> ۝</span>{" "}
          </span>
        ))}
      </div>

      <div className="page-hint">Swipe left / right</div>
    </main>
  );
}
