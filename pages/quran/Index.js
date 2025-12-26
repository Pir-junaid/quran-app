import { useRouter } from "next/router";
import { useEffect } from "react";

export default function QuranIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/quran/page/1");
  }, [router]);

  return null;
}
