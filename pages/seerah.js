export default function SeerahPage() {
  const sections = [
    {
      title: "قبل از نبوت",
      points: [
        "نسب مبارک",
        "ولادت",
        "بچپن اور جوانی",
        "صداقت و امانت",
      ],
    },
    {
      title: "بعثت اور مکہ کا دور",
      points: [
        "پہلی وحی",
        "دعوتِ خفیہ",
        "دعوتِ علانیہ",
        "مخالفت اور آزمائشیں",
      ],
    },
    {
      title: "ہجرت",
      points: [
        "ہجرت کی تیاری",
        "غارِ ثور",
        "مدینہ منورہ آمد",
      ],
    },
    {
      title: "مدنی دور",
      points: [
        "ریاستِ مدینہ",
        "مواخات",
        "غزوات",
        "فتح مکہ",
      ],
    },
    {
      title: "آخری ایام",
      points: [
        "حجۃ الوداع",
        "خطبہ حج",
        "وصالِ نبوی ﷺ",
      ],
    },
  ];

  return (
    <div className="container">
      <h2>🕌 سیرت النبی ﷺ</h2>
      <p>الرحيق المختوم (The Sealed Nectar) کی روشنی میں</p>

      {sections.map((s, i) => (
        <div key={i} className="card" style={{ marginBottom: "16px" }}>
          <h3>{s.title}</h3>
          <ul>
            {s.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}

      <footer>
        <p>
          یہ سیرت تعلیمی مقصد کے لیے ہے، جلد تفصیلی ابواب شامل ہوں گے
        </p>
      </footer>
    </div>
  );
        }// Seerah-un-Nabi ﷺ (The Sealed Nectar structure)
