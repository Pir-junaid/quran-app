export default function HadithPage() {
  return (
    <div className="container">
      <h2>📚 حدیث</h2>
      <p>احادیث مع عربی، اردو اور English ترجمہ</p>

      <div className="card">
        <div className="arabic">
          إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ
        </div>

        <div className="translation">
          <b>اردو:</b> اعمال کا دارومدار نیتوں پر ہے۔
        </div>

        <div className="translation">
          <b>English:</b> Actions are judged by intentions.
        </div>

        <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>
          (صحیح بخاری، صحیح مسلم)
        </div>
      </div>

      <footer>
        <p>
          جلد ہی: مکمل حدیث کتب، تلاش، اور بُک مارکس
        </p>
      </footer>
    </div>
  );
}// Hadith Module (Arabic + Urdu + English)
