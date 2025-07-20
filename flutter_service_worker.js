'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c929b524d2ef10497e7f4694d380d250",
"version.json": "2b4d6a9d078137f6a1285c214191cc64",
"index.html": "edd17e6530548ae48ff7d03bbfd9335a",
"/": "edd17e6530548ae48ff7d03bbfd9335a",
"main.dart.js": "afed62ae6896539db8854af7e6d7f616",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "d468ec9ca0dec207b6e6e09467439b36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12289afb055bd683ca38ff2815436410",
"assets/AssetManifest.json": "72b0d2949e2cb1051362381bc1e3e122",
"assets/NOTICES": "ab174d5f149b4cb28f117cacbfafde7a",
"assets/FontManifest.json": "b15b89b4d5361d522c8d06665b22cd2a",
"assets/AssetManifest.bin.json": "cdbde459856a0d8b089cffb33b7f836e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "350e444fa5053969990336dcb8de3590",
"assets/fonts/MaterialIcons-Regular.otf": "961cf0cbbb2f6da5544478e48ade3114",
"assets/assets/images/science_2.png": "6e3fa3d723169dd1d02b5cc673346632",
"assets/assets/images/logo_in_white.PNG": "28455a5713a609d480297233fc805761",
"assets/assets/images/profile_photo_majose.png": "8d20e46354108fb2c43f3bc83c5f746d",
"assets/assets/images/science_3.png": "2f577c360bff1427070e44eb22287f1e",
"assets/assets/images/science_1.png": "89abe6234c9203b0bf761c3fdbca9096",
"assets/assets/images/profile_photo_lucilia.PNG": "14adc6c1f238e60d4a24481ff63721b4",
"assets/assets/images/ip_protected.png": "30109c0be1f35cc15b0595ee92a92e58",
"assets/assets/images/profile_photo_hugo.PNG": "f98c124ee7fd4f6034857365d071e5cb",
"assets/assets/images/cell.png": "bc90bd5954875d9477c02c7db78747f5",
"assets/assets/images/logo_in_black.PNG": "1d2a6a017bd214c4698ed167dd97d588",
"assets/assets/images/azul_s_fundo.png": "1789a8e0ce0942720a0738b737064073",
"assets/assets/images/branco_s_fundo.png": "488cae6af8f337d2f98664c57d1f0db2",
"assets/assets/images/branco_s_fundo2.png": "60a71db3a51646f0f0547b36ef74d8bd",
"assets/assets/images/backgroundImage.png": "de842fbf25000d38c9b98b9b86762781",
"assets/assets/images/partners/partners_1.jpg": "2a5be668b4223d074c91a5f6d5974fde",
"assets/assets/images/partners/partners_0.jpg": "7afb1d3d27691e74f4da56eeadf992f6",
"assets/assets/images/partners/partners_2.jpg": "7198da219396c8c3e33dbbb45206d7e5",
"assets/assets/images/partners/partners_3.jpg": "5e6537285c9bb2b72c6c6fc5fe73a6f6",
"assets/assets/images/partners/partners_7.jpg": "431682280e5a82ceaf0c31b4e5870236",
"assets/assets/images/partners/partners_6.jpg": "bdf2ce108eb6c5474ef85eea3d38c15b",
"assets/assets/images/partners/partners_4.jpg": "be8a35e80bfe28f2a56af8e677e85900",
"assets/assets/images/partners/partners_5.jpg": "31901a23f1a7f78073c5de3a02b359fe",
"assets/assets/images/partners/partners_8.jpg": "68a2911c80c86a3e7e0fb2c7c3a57d04",
"assets/assets/images/microscope.png": "6a75aa3c7761564496932d8ed1d419b6",
"assets/assets/images/backgroundImageMobile.png": "de842fbf25000d38c9b98b9b86762781",
"assets/assets/images/awards/awards_11.png": "8ce964c22aaa54288e65e75e57579483",
"assets/assets/images/awards/awards_2.png": "656a7150ee4a7712e4bd47f3ec05d2ab",
"assets/assets/images/awards/awards_3.png": "7b841a7e86b39d3150168b4459a83bd8",
"assets/assets/images/awards/awards_10.JPG": "c42af4a6d72ae8b27c46349253a3f10a",
"assets/assets/images/awards/awards_1.png": "44ea8953581d81a590476eae150aeec6",
"assets/assets/images/awards/awards_0.png": "2e83ce340feeb86c8081dc4eaf463ccb",
"assets/assets/images/awards/awards_4.png": "b99d0afc60a341042c229b0676da96c5",
"assets/assets/images/awards/awards_5.jpg": "0c87636d07a61673c5b1dbde2ea2e5e2",
"assets/assets/images/awards/awards_7.png": "86fda5df971079fa0f6604b0a5c18615",
"assets/assets/images/awards/awards_6.png": "9abc6711dc062175ef223c51621344e1",
"assets/assets/images/awards/awards_8.png": "41cc2d6b97f2c749b5e34ea52370335b",
"assets/assets/images/awards/awards_9.png": "51c88bcd8111c9cbd9bf48fa545f43f9",
"assets/assets/images/profile_photo_lucio.png": "97f2684d0ad70100a9467c237d2f1d66",
"assets/assets/images/profile_photo_angela.PNG": "7d7cc4ab515a677566912320276af62a",
"assets/assets/icons/science_2.png": "f6fe18bd153499054cf6107d2bc3f68e",
"assets/assets/icons/science_3.png": "af39d359a191f35dacaad4b32818049d",
"assets/assets/icons/science_1.png": "4e26f86651b1e33c4e54007bb409dde6",
"assets/assets/icons/linkedin_blue.png": "311605f8aaa3f8c4cb5e2d711bccb68d",
"assets/assets/icons/IP_protected.png": "366deb85244c5c794fc3a5f103111a8f",
"assets/assets/icons/linkedin_white.png": "4fcec7ae253d6397b3b1aca493eb6711",
"assets/assets/icons/email_white.png": "cf41d570fdd7742afb0033aeb5582776",
"assets/assets/icons/icon_arrow_left_rounded.png": "ac4a5fa1cba0fb22a7d2ee778224ea3b",
"assets/assets/icons/icon_arrow_right_rounded.png": "40ac674db8891c3d5519a4018a905aed",
"assets/assets/icons/orcid_blue.png": "146a87d4a57aa3a23ff18facaa617798",
"assets/assets/icons/orcid_white.png": "c247c71a3e6e1aa5088d0e8a4dc91d20",
"assets/assets/icons/icon_arrow_down_rounded.png": "06227b3526d633125990a73b884505af",
"assets/assets/icons/email_blue.png": "dfad97a5ac530a72d8b86b3c4c79c399",
"assets/assets/fonts/Figtree-ExtraBold.ttf": "2960d6e099892183db5484444ed152c0",
"assets/assets/fonts/Figtree-Bold.ttf": "c35c3ee5c1bab1acfe1e0d71549dd501",
"assets/assets/fonts/Figtree-SemiBoldItalic.ttf": "c42d5ab1b2f5144bc6157c508a9bccb0",
"assets/assets/fonts/Figtree-Light.ttf": "4d0b973d5fe9d48fafbc101aeb6addcc",
"assets/assets/fonts/Figtree-MediumItalic.ttf": "959f16743828a114ddbcdcfddfd62570",
"assets/assets/fonts/Figtree-ExtraBoldItalic.ttf": "dd801cdb59f2b2542036026cfa68600e",
"assets/assets/fonts/Figtree-Medium.ttf": "0493473149844cee7b601ff24ef1479d",
"assets/assets/fonts/Figtree-Regular.ttf": "fde4a0ff6b61f88efd09f91f41c9a6da",
"assets/assets/fonts/Figtree-BlackItalic.ttf": "c6dcb279022586ad20660a894013a492",
"assets/assets/fonts/Figtree-BoldItalic.ttf": "219abf857325ba545376cb9cc2e08508",
"assets/assets/fonts/Figtree-Italic.ttf": "9d65a509684b10766dfc3238d886a494",
"assets/assets/fonts/Figtree-Black.ttf": "cb929048af7ca7945e057d80cd579809",
"assets/assets/fonts/Figtree-LightItalic.ttf": "924864a4ae5cd26c081f68749aa5f78d",
"assets/assets/fonts/Figtree-SemiBold.ttf": "0aea8911a39371620ecd59ab2a49e642",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
