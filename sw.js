self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Lewatkan semua request langsung ke jaringan agar data Supabase selalu terbaru
  event.respondWith(fetch(event.request));
});