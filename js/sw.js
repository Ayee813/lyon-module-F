const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  // HTML
  '/',
  '/index.html',
  '/tabPage/tab1.html',
  '/tabPage/tab2.html',
  '/tabPage/tab3.html',

  // CSS
  '/css/styles.css',

  // JS
  '/js/Script.js',
  '/js/sw.js',

  // Manifest
  '/json/manifest.json',

  // Images
  '/asset/images/all-attractions.jpg',
  '/asset/images/all-attractions-low-res.jpg',
  '/asset/images/attraction-a.jpg',
  '/asset/images/attraction-a-low-res.jpg',
  '/asset/images/attraction-b.jpg',
  '/asset/images/attraction-b-low-res.jpg',
  '/asset/images/attraction-c.jpg',
  '/asset/images/attraction-c-low-res.jpg',
  '/asset/images/cover.jpg',
  '/asset/images/cover-low-res.jpg',
  '/asset/images/lyon-map.jpg',
  '/asset/images/lyon-map-low-res.jpg',

  // Latest events images
  '/asset/images/latest-events-images/fda-p.jpg',
  '/asset/images/latest-events-images/fda-p-low-res.jpg',
  '/asset/images/latest-events-images/journees_portes_ouvertes_entreprises_2023_p.jpg',
  '/asset/images/latest-events-images/journees_portes_ouvertes_entreprises_2023_p-low-res.jpg',
  '/asset/images/latest-events-images/lyon-kayak-p-0.jpg',
  '/asset/images/latest-events-images/lyon-kayak-p-0-low-res.jpg',
  '/asset/images/latest-events-images/semaine-bleue-2024-p.jpg',
  '/asset/images/latest-events-images/semaine-bleue-2024-p-low-res.jpg',
  '/asset/images/latest-events-images/village-des-metiers-p.jpg',
  '/asset/images/latest-events-images/village-des-metiers-p-low-res.jpg',
  '/asset/images/latest-events-images/worldskills-2024-p.jpg',
  '/asset/images/latest-events-images/worldskills-2024-p-low-res.png',

  // Video
  '/asset/videos/lyon.mp4'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).catch(() =>
        caches.match('/index.html')
      )
    )
  );
});
