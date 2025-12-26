import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AYAH_PER_PAGE = 10; // text page size

export default function QuranPage() {
  const router = useRouter();
  const { page } = router.query;

  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageNum = parseInt(page || "1");

  useEffect(() => {
    async function loadPage() {
      if (!pageNum || pageNum < 1) return;

      setLoading(true);

      // We simulate pages using Surah 1–114 continuous ayahs
      const res = await fetch(
        "https://api.alquran.cloud/v1/quran/ar.alafasy"
      );
      const data = await res.json();

      const allAyahs = data.data.surahs.flatMap(s =>
        s.ayahs.map(a => a.text)
      );

      const start = (pageNum - 1) * AYAH_PER_PAGE;
      const pageAyahs = allAyahs.slice(start, start + AYAH_PER_PAGE);

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
    if (startX - endX > 50) {
      router.push(`/quran/page/${pageNum + 1}`);
    }
    if (endX - startX > 50 && pageNum > 1) {
      router.push(`/quran/page/${pageNum - 1}`);
    }
  }

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <main
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div style={styles.pageNumber}>Page {pageNum}</div>

      <div style={styles.text}>
        {ayahs.map((a, i) => (
          <span key={i}>{a} </span>
        ))}
      </div>

      <div style={styles.hint}>
        Swipe left/right to change page
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    background: "#fff",
  },
  pageNumber: {
    textAlign: "center",
    color: "#777",
    marginBottom: "12px",
  },
  text: {
    fontSize: "28px",
    lineHeight: "2.2",
    textAlign: "right",
    direction: "rtl",
    fontFamily: "serif",
  },
  hint: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "13px",
    color: "#888",
  },
};
