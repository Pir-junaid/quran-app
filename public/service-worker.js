self.addEventListener("install", () => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", () => {
  // default network behavior
});// Offline caching
