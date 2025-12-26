/**
 * Temporary Hadith API (static example)
 * Vercel build safe
 */

export async function getHadiths() {
  return [
    {
      id: 1,
      text: "اعمال کا دارومدار نیتوں پر ہے",
      urdu: "اعمال کا دارومدار نیتوں پر ہے",
      english: "Actions are judged by intentions."
    },
    {
      id: 2,
      text: "دین خیرخواہی کا نام ہے",
      urdu: "دین خیرخواہی کا نام ہے",
      english: "Religion is sincerity."
    }
  ];
}// Hadith APIs
