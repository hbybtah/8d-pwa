self.addEventListener('install', function (event) {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', function (event) {
  console.log('Service Worker activating...');
});

self.addEventListener('fetch', function (event) {
  // لا يوجد كاش، فقط تسجيل وجود الـ SW
});
