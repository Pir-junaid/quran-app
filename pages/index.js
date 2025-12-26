import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>📖 Quran App</h1>
      <p>Welcome to the Quran Study Application</p>

      <ul style={{ lineHeight: "2" }}>
        <li>
          <Link href="/quran">📘 Read Quran</Link>
        </li>
        <li>
          <Link href="/audio">🎧 Quran Audio</Link>
        </li>
        <li>
          <Link href="/hadith">📜 Hadith</Link>
        </li>
        <li>
          <Link href="/seerah">🕌 Seerah (Life of Prophet ﷺ)</Link>
        </li>
        <li>
          <Link href="/study">📚 Study Tools</Link>
        </li>
      </ul>
    </main>
  );
  }
