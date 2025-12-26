import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>📖 Quran App</h1>
      <p style={styles.subtitle}>
        Complete Quran • Tafseer • Hadith • Seerah
      </p>

      <div style={styles.grid}>
        <Link href="/quran" style={styles.card}>
          <h3>📘 Quran</h3>
          <p>Arabic Quran with Tajweed</p>
        </Link>

        <Link href="/study" style={styles.card}>
          <h3>📖 Study Quran</h3>
          <p>Urdu & English Translation + Tafseer</p>
        </Link>

        <Link href="/hadith" style={styles.card}>
          <h3>📚 Hadith</h3>
          <p>Arabic, Urdu & English</p>
        </Link>

        <Link href="/seerah" style={styles.card}>
          <h3>🕌 Seerah</h3>
          <p>Life of Prophet ﷺ (Sealed Nectar)</p>
        </Link>

        <Link href="/audio" style={styles.card}>
          <h3>🎧 Audio Quran</h3>
          <p>Listen to Quran Recitation</p>
        </Link>
      </div>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Quran App
      </footer>
    </main>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "32px",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#555",
    marginBottom: "25px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "16px",
    borderRadius: "12px",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    textDecoration: "none",
    color: "#000",
  },
  footer: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#777",
    textAlign: "center",
  },
};
