// save reading progress
useEffect(() => {
  localStorage.setItem("lastPage", pageNum);
}, [pageNum]);

// resume last page if exists
useEffect(() => {
  const last = localStorage.getItem("lastPage");
  if (last && pageNum === 1) {
    router.replace(`/quran/page/${last}`);
  }
}, []);
