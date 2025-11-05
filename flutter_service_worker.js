'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b7ef9cfeb88ebb472d870f2b7e10f52",
"splash.gif": "461b53398abd77bc5410ab24674a2a56",
"version.json": "2171024e310343da7c51ba74ec710ac5",
"index.html": "87564f0c7dbd08c052356d3f23f9a647",
"/": "87564f0c7dbd08c052356d3f23f9a647",
"main.dart.js": "4425fca14bd2adeba85b8dac2fd3492b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"splash.js": "cdcb24bcd3054a3465d5a2a764183aa8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "47b9ce98a34427025113daf3b3c16f0c",
"assets/AssetManifest.json": "044d66138881563ec6068d02c9ce7eae",
"assets/NOTICES": "83d0068e9fc699cb15aa35819d961a0f",
"assets/FontManifest.json": "5da67ed7c78868dbab0e4258d6d46e53",
"assets/AssetManifest.bin.json": "a08c5219dab8317c6eee388a7fb2b721",
"assets/packages/tolyui/assets/iconfont/tolyui_icon.ttf": "7ffafc46868486d832a5cd465bc26b06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c0c31a8d713f471dd29e7b4d8f2ae725",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "69c99bd27a99a9637dd6019b74c54e20",
"assets/fonts/MaterialIcons-Regular.otf": "a159120200c09498163334bd02a722da",
"assets/assets/version.json": "48fa119e978d20d0f3b8c98786c56ca2",
"assets/assets/images/kotlin.webp": "5931862317c5b571e2b17c6a36281403",
"assets/assets/images/wy_200x300.webp": "32b5a5e9cf71762b24549c79f74c55dd",
"assets/assets/images/draw_bg3.webp": "933df5ebe2911dd49aa01504788ff69d",
"assets/assets/images/wy_300x200.webp": "3a4266ac508ba5ddfcb23dd79cdcb2df",
"assets/assets/images/flutter.png": "f8413ed3a7fcb1a3a3a88609bedce3ef",
"assets/assets/images/sabar.webp": "fb519802ddef16aff6d9a2d414ee6be3",
"assets/assets/images/draw_bg4.webp": "e627849af978ce0882bb326e4cd33554",
"assets/assets/images/icon_head.webp": "ac762e8f5772ac67661b4a1911a864ec",
"assets/assets/images/anim_draw.webp": "d39b873905648b2585ef721df43b57a9",
"assets/assets/images/dart.webp": "174ee5597f4e89922e02b31b2d2aed70",
"assets/assets/images/coffee_wx.webp": "e589ca9ec069860aabd6bc82b51d1d54",
"assets/assets/images/coffee_wx_ac.webp": "05441826d9d95d9e3acd4537439f13bd",
"assets/assets/images/wxgzh.webp": "560a98e2245024e5a1962a40cef57d66",
"assets/assets/images/sabar_bar.webp": "8bf0884e36b7f7360f838dbc0014f9da",
"assets/assets/images/head_icon/icon_6.webp": "2d028ada7ef2ac8f302fa71588a68e40",
"assets/assets/images/head_icon/icon_7.webp": "165ed3ed6a8f230c175d4b96aaa3c6d3",
"assets/assets/images/head_icon/icon_8.webp": "1e2074c0b63e55354191ec4f73fe5c92",
"assets/assets/images/head_icon/icon_5.webp": "6f075db07004fe42f14e4f49792fde53",
"assets/assets/images/wy_30x20.webp": "4cab6d76b4bb86f03f2b21619ce9be34",
"assets/assets/images/wechat.webp": "e4973300ecac8bab68d4239ef4e4035c",
"assets/assets/images/coffee_zfb.webp": "453ba0e24b37b06bd2225f5de644e16b",
"assets/assets/images/right_chat.png": "1a92a7917382d085e5e5cca9479b5e97",
"assets/assets/images/caver.webp": "0daec42d311b443a213495207156ecfc",
"assets/assets/images/left_chat.png": "6a029c3e180fe11ac4d2a0a456ae853f",
"assets/assets/images/leaf.webp": "4d21215dba45c5aa45c195e42cf1578a",
"assets/assets/images/base_draw.webp": "6205685a13464d8eeac6f3503efdef87",
"assets/assets/images/logo1.webp": "effd45beb843a31f629e628eb7c4d2db",
"assets/assets/images/java.webp": "122c0f45a99638ed19c39bd5413cf8d6",
"assets/assets/images/widgets/Text.webp": "c86cb1e2dda75b0df70c05d42ad8c95a",
"assets/assets/images/widgets/GridTile.webp": "0e5cd5eec4dee684802bb6ee370de7e7",
"assets/assets/images/widgets/Chip.svg": "e3a3794e87bdfc25599f620059a450f1",
"assets/assets/images/widgets/RichText.svg": "8587ab610f7c220930df2b002447447e",
"assets/assets/images/widgets/CircleAvatar.svg": "e45a2e0811b4f45ee40788f66cf2bf2f",
"assets/assets/images/widgets/Banner.svg": "a4c5137b9f34582ed41efb97e3b41ded",
"assets/assets/images/widgets/Visibility.webp": "622c4e11a498c1f96c7279b8ad67a6d1",
"assets/assets/images/widgets/RadioListTile.webp": "3c9a56b39aef8bd29d4ec9ff39e8c76b",
"assets/assets/images/widgets/CheckBoxListTile.webp": "8a5af8a8391eb0b2514909445896ad6a",
"assets/assets/images/widgets/Icon.svg": "38211b3a538e051ece09860504c90625",
"assets/assets/images/widgets/FilterChip.webp": "806fdd59996fe92b0f0663468274747f",
"assets/assets/images/widgets/SingleChildScrollView.svg": "1af391f6c0ec4ffac89b550500478092",
"assets/assets/images/widgets/Icon.webp": "af2b5b89d2721b0bfa83dfa92b92ee82",
"assets/assets/images/widgets/Container.svg": "c3c45ea9d1815ee562b2773df16e5342",
"assets/assets/images/widgets/Card.svg": "3c2b531190886e18e5072d6ea5fda5c6",
"assets/assets/images/widgets/ListView.svg": "c0c0637cdfe26d30087adeff8e5531da",
"assets/assets/images/widgets/Text.svg": "ecc17311a00eab05cc99f9a99e1d4ba2",
"assets/assets/images/widgets/ChoiceChip.webp": "7054079fa5e8575bcccdb364fba25971",
"assets/assets/images/widgets/Image.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/widgets/ImageIcon.webp": "60db3cdd8ea02bf1f805f75cc9847f50",
"assets/assets/images/widgets/GridView.svg": "c77c8eb2fb4af3c9ba237e9a5a55ddfc",
"assets/assets/images/widgets/ListTile.webp": "7ad1ce104b826cef5982fee656fd5257",
"assets/assets/images/widgets/FlutterLogo.webp": "7341ea99ac003c01fa689a78fdd3296b",
"assets/assets/images/widgets/Autocomplete.svg": "04e4d0db4a9e268caaadc2708b1e0966",
"assets/assets/images/widgets/FilterChip.svg": "85d7fe64921ce6048346df0a402e4fa6",
"assets/assets/images/widgets/Widget.svg": "0e77088a91971c0918f527ac705be5a8",
"assets/assets/images/widgets/Banner.webp": "9454484ecbaf8e3fd06f11551a032bc9",
"assets/assets/images/widgets/UserAccountsDrawerHeader.webp": "8606dc0634f785dc727e135aca0355e3",
"assets/assets/images/widgets/ActionChip.webp": "24c4742cfc55c1ccf0957e8b23da41b1",
"assets/assets/images/widgets/SwitchListTile.webp": "d95b45bde3566de700c8715562f72717",
"assets/assets/images/widgets/MaterialButton.svg": "dfcf1fade8a2fb77266b3b68175b93bd",
"assets/assets/images/widgets/PageView.svg": "6c7766d6761f456ecd7ecd108413a024",
"assets/assets/images/widgets/FloatingActionButton.svg": "177c74ed4871dd6f18a10f42dd34e8bf",
"assets/assets/images/widgets/InputChip.svg": "4c1c51765109e670d5d4d34934cf1dea",
"assets/assets/images/widgets/GestureDetector.svg": "7124302ff8fd640230ec77d82d1e3684",
"assets/assets/images/widgets/FlutterLogo.svg": "28691f41d56652cd4f4fe70164935c9e",
"assets/assets/images/widgets/GridTileBar.webp": "c248180c74c098a23172959333340750",
"assets/assets/images/widgets/Text.png": "4be3b6cdf7ac19d10da781931b2f99f7",
"assets/assets/images/wy_300x200_filter.webp": "2a039fac1d66097352d329f3e1926196",
"assets/assets/article.db": "83c54dd4b916c9858ccb6dea4272f9d3",
"assets/assets/iconfont/toly_icon.ttf": "a2eedb232b26f1b0175fd5e97e1c2bb7",
"assets/assets/flutter.db": "bd72f55dd86d2b39717deee9926bf08c",
"assets/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/fonts/Neucha-Regular.ttf": "8e7a91accfee66949d8f243573b80839",
"assets/assets/fonts/ComicNeue-Regular.ttf": "52497ef6e2a57915ff534c342e49a95b",
"assets/assets/fonts/CHOPS.ttf": "2fdc9975f98dd272396edd1f7ad43cca",
"assets/assets/fonts/BalooBhai2-Regular.ttf": "7c94be72174267b3aac61b9ab4df2af7",
"assets/assets/fonts/Inconsolata-Regular.ttf": "9d52a8c4fafc763d9a356d8b67d4a2e6",
"assets/assets/data/web/widget.json": "37bb626dfafd7a58c53fefb6ffde0448",
"assets/assets/data/web/node.json": "8aa95e35706bcc5bf4df9826981dad67",
"assets/assets/data/gallery_info.json": "63682979e72e7b4948fc61d3a61cf4c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
