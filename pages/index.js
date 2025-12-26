export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>📖 Quran App</h1>
      <p>Complete Islamic Learning Platform</p>

      <hr />

      <h2>Features</h2>
      <ul>
        <li>🕋 Complete Quran (Arabic)</li>
        <li>📘 Tafsir (Urdu)</li>
        <li>📜 Hadith with Urdu & English Translation</li>
        <li>📖 Seerah (Sealed Nectar)</li>
        <li>🎧 Audio Quran</li>
        <li>📚 Study Mode</li>
      </ul>

      <hr />

      <h3>Navigate</h3>
      <ul>
        <li>/quran</li>
        <li>/hadith</li>
        <li>/seerah</li>
        <li>/audio</li>
        <li>/study</li>
      </ul>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
        © Quran App – Built with Next.js
      </p>
    </main>
  );
  }// Home page with Tilawat & Study slots
