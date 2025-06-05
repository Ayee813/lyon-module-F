const CACHE_NAME = "lyon-tourist-cache-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/Script.js",
    "/asset/videos/lyon.mp4",
    //  image files
    "asset/images/all-attractions-low-res.jpg",
    "asset/images/all-attractions.jpg",
    "asset/images/attraction-a-low-res.jpg",
    "asset/images/attraction-a.jpg",
    "asset/images/attraction-b-low-res.jpg",
    "asset/images/attraction-b.jpg",
    "asset/images/attraction-c-low-res.jpg",
    "asset/images/attraction-c.jpg",
    "asset/images/cover-low-res.jpg",
    "asset/images/cover.jpg",
    "asset/images/lyon-map-low-res.jpg",
    "asset/images/lyon-map.jpg",
    "asset/images/latest-events-images/fda-p-low-res.jpg",
    "asset/images/latest-events-images/fda-p.jpg",
    "asset/images/latest-events-images/journees_portes_ouvertes_entreprises_2023_p-low-res.jpg",
    "asset/images/latest-events-images/journees_portes_ouvertes_entreprises_2023_p.jpg",
    "asset/images/latest-events-images/lyon-kayak-p-0-low-res.jpg",
    "asset/images/latest-events-images/lyon-kayak-p-0.jpg",
    "asset/images/latest-events-images/semaine-bleue-2024-p-low-res.jpg",
    "asset/images/latest-events-images/semaine-bleue-2024-p.jpg",
    "asset/images/latest-events-images/village-des-metiers-p-low-res.jpg",
    "asset/images/latest-events-images/village-des-metiers-p.jpg",
    "asset/images/latest-events-images/worldskills-2024-p-low-res.png",
    "asset/images/latest-events-images/worldskills-2024-p.jpg",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(
            (response) => response || fetch(event.request)
        )
    );
});
