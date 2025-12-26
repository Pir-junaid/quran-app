const BASE_URL = "https://api.alquran.cloud/v1";

/**
 * Get list of all Surahs
 */
export async function getSurahs() {
  const res = await fetch(`${BASE_URL}/surah`);
  const data = await res.json();
  return data.data;
}

/**
 * Get ayahs of a specific surah
 */
export async function getSurahAyahs(surahNumber) {
  const res = await fetch(`${BASE_URL}/surah/${surahNumber}/quran-uthmani`);
  const data = await res.json();
  return data.data.ayahs;
}// Quran, Tafseer, Shaan-e-Nuzool APIs
