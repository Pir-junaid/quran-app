import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function QuranPage() {
  const router = useRouter();
  const { page } = router.query;

  const pageNum = Number(page);
  const [ayahs, setAyahs] = useState([]);

  // fetch Quran page
  useEffect(() => {
    if (!pageNum) return;

    fetch(`https://api.alquran.cloud/v1/page/${pageNum}/quran-uthmani`)
      .then(res => res.json())
      .then(data => setAyahs(data.data.ayahs));

    // save progress
    localStorage.setItem("lastPage", pageNum);
  }, [pageNum]);

  // resume last page
  useEffect(() => {
    if (!page) {
      const last = localStorage.getItem("lastPage") || 1;
      router.replace(`/quran/page/${last}`);
    }
  }, [page]);

  function nextPage() {
    router.push(`/quran/page/${pageNum + 1}`);
  }

  function prevPage() {
    if (pageNum > 1) {
      router.push(`/quran/page/${pageNum - 1}`);
    }
  }

  return (
    <main style={styles.container}>
      <div style={styles.page}>
        {ayahs.map(a => (
          <span key={a.number} style={styles.ayah}>
            {a.text} ۝
          </span>
        ))}
      </div>

      <div style={styles.nav}>
        <button onClick={prevPage}>⬅</button>
        <span>Page {pageNum}</span>
        <button onClick={nextPage}>➡</button>
      </div>
    </main>
  );
}

const styles = {
  container: {
    background: "#f8f3e8",
    minHeight: "100vh",
    padding: 20
  },
  page: {
    fontSize: 22,
    lineHeight: 2,
    direction: "rtl",
    textAlign: "justify"
  },
  ayah: {
    marginRight: 6
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20
  }
};
