export default function AudioPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎧 Quran Audio</h1>

      <p>
        Yahan Quran ki tilawat mashhoor Qaris ki awaaz mein suni ja sakti hai.
        Aap surah select karke play kar sakte hain.
      </p>

      <hr />

      <h2>▶️ Sample Tilawat</h2>

      <div
        style={{
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        <p>
          <strong>Surah:</strong> Al-Fatiha
        </p>

        <audio controls style={{ width: "100%" }}>
          <source
            src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/001.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>

        <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
          Qari: Mishary Rashid Alafasy
        </p>
      </div>
    </div>
  );
  }// Audio-only Tilawat mode
