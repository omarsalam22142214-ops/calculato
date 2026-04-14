Enterconst cacheName = 'casio-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق من التخزين (Cache) في حالة عدم وجود نت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
