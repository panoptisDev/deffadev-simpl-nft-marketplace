if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>n(e,i),d={module:{uri:i},exports:r,require:t};s[i]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-y8c5JJVXkR-c3IfoHOt_w.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/107.c9edf38f4914e136.js",revision:"c9edf38f4914e136"},{url:"/_next/static/chunks/110.8758e2e9bdf7ccb6.js",revision:"8758e2e9bdf7ccb6"},{url:"/_next/static/chunks/112.3b45c2e3ee20140f.js",revision:"3b45c2e3ee20140f"},{url:"/_next/static/chunks/119.e2f6f884fd18f42e.js",revision:"e2f6f884fd18f42e"},{url:"/_next/static/chunks/164.366ee34b437272bc.js",revision:"366ee34b437272bc"},{url:"/_next/static/chunks/199.54a329ce5af60c5d.js",revision:"54a329ce5af60c5d"},{url:"/_next/static/chunks/1bfc9850-586c516c2bd8c42d.js",revision:"586c516c2bd8c42d"},{url:"/_next/static/chunks/236.a2e2eacf5700177d.js",revision:"a2e2eacf5700177d"},{url:"/_next/static/chunks/247.0223e12bfcdbc8d3.js",revision:"0223e12bfcdbc8d3"},{url:"/_next/static/chunks/275.fe5891cfba905fbe.js",revision:"fe5891cfba905fbe"},{url:"/_next/static/chunks/28.c02ea2394199147f.js",revision:"c02ea2394199147f"},{url:"/_next/static/chunks/311.05cd979c1d456a3a.js",revision:"05cd979c1d456a3a"},{url:"/_next/static/chunks/328.ba92f755e89db204.js",revision:"ba92f755e89db204"},{url:"/_next/static/chunks/434-7f3b951297c46e84.js",revision:"7f3b951297c46e84"},{url:"/_next/static/chunks/44.2b7dc58828fd3510.js",revision:"2b7dc58828fd3510"},{url:"/_next/static/chunks/449.a20bc38d5b44c466.js",revision:"a20bc38d5b44c466"},{url:"/_next/static/chunks/472.6d74d4fff163fcd0.js",revision:"6d74d4fff163fcd0"},{url:"/_next/static/chunks/500.f163f64fe83172ac.js",revision:"f163f64fe83172ac"},{url:"/_next/static/chunks/506.80da35710dbc5a8f.js",revision:"80da35710dbc5a8f"},{url:"/_next/static/chunks/565.b193f43a176de567.js",revision:"b193f43a176de567"},{url:"/_next/static/chunks/575.cbb36c8c3e5e2676.js",revision:"cbb36c8c3e5e2676"},{url:"/_next/static/chunks/603.68b8c4eeb10e43d7.js",revision:"68b8c4eeb10e43d7"},{url:"/_next/static/chunks/610.9bc0417647a16f8e.js",revision:"9bc0417647a16f8e"},{url:"/_next/static/chunks/630.a000ca027c33f1d6.js",revision:"a000ca027c33f1d6"},{url:"/_next/static/chunks/652.e120ee442365e929.js",revision:"e120ee442365e929"},{url:"/_next/static/chunks/695.d9106828319cb06c.js",revision:"d9106828319cb06c"},{url:"/_next/static/chunks/777.42d8373158c48179.js",revision:"42d8373158c48179"},{url:"/_next/static/chunks/793.e75f62ad45d333d0.js",revision:"e75f62ad45d333d0"},{url:"/_next/static/chunks/849-137e2fcc870a9dd3.js",revision:"137e2fcc870a9dd3"},{url:"/_next/static/chunks/876.0b6c1be14ed75be0.js",revision:"0b6c1be14ed75be0"},{url:"/_next/static/chunks/891.fc52253eb4d04492.js",revision:"fc52253eb4d04492"},{url:"/_next/static/chunks/916.c6f8b2cf6bd22474.js",revision:"c6f8b2cf6bd22474"},{url:"/_next/static/chunks/966-f1ec5c7d919ce6c3.js",revision:"f1ec5c7d919ce6c3"},{url:"/_next/static/chunks/ae51ba48-014e5c1913731869.js",revision:"014e5c1913731869"},{url:"/_next/static/chunks/framework-0ba0ddd33199226d.js",revision:"0ba0ddd33199226d"},{url:"/_next/static/chunks/main-21318afe34df6702.js",revision:"21318afe34df6702"},{url:"/_next/static/chunks/pages/_error-effe22be6ff34abe.js",revision:"effe22be6ff34abe"},{url:"/_next/static/chunks/pages/_offline-231dda896417ef03.js",revision:"231dda896417ef03"},{url:"/_next/static/chunks/pages/index-e1e95637a7616253.js",revision:"e1e95637a7616253"},{url:"/_next/static/chunks/pages/listing/%5BlistingId%5D-3523a400864f63d8.js",revision:"3523a400864f63d8"},{url:"/_next/static/chunks/pages/nftdrop-70b0b75da5380347.js",revision:"70b0b75da5380347"},{url:"/_next/static/chunks/pages/resell-7751c724877545c5.js",revision:"7751c724877545c5"},{url:"/_next/static/chunks/pages/staking-dc11dc5d74ff7605.js",revision:"dc11dc5d74ff7605"},{url:"/_next/static/chunks/pages/upload-3f7de3dd42020fb4.js",revision:"3f7de3dd42020fb4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7a4e4a46698b45c6.js",revision:"7a4e4a46698b45c6"},{url:"/_next/static/css/0bc1c491db9dfce0.css",revision:"0bc1c491db9dfce0"},{url:"/_next/static/media/coinbase.fc98ecac.svg",revision:"fc98ecac"},{url:"/_next/static/media/metamask.dfafc742.svg",revision:"dfafc742"},{url:"/_next/static/media/star1.259fc17b.png",revision:"259fc17b"},{url:"/_next/static/media/star2.de218374.png",revision:"de218374"},{url:"/_next/static/media/star3.ee0fd1eb.png",revision:"ee0fd1eb"},{url:"/_next/static/media/star4.a4e67bd6.png",revision:"a4e67bd6"},{url:"/_next/static/media/star5.b5625868.png",revision:"b5625868"},{url:"/_next/static/media/star6.1f14f962.png",revision:"1f14f962"},{url:"/_next/static/media/star7.36744ed0.png",revision:"36744ed0"},{url:"/_next/static/media/star8.138c0083.png",revision:"138c0083"},{url:"/_next/static/media/stars.06585eaa.png",revision:"06585eaa"},{url:"/_next/static/media/walletconnect.58d8396d.svg",revision:"58d8396d"},{url:"/_next/static/y8c5JJVXkR-c3IfoHOt_w/_buildManifest.js",revision:"7d7f1e8da93870fb7ce0d86394e8e5e5"},{url:"/_next/static/y8c5JJVXkR-c3IfoHOt_w/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"y8c5JJVXkR-c3IfoHOt_w"},{url:"/favicon.ico",revision:"3d5d04d0347caf59fa321b6f20c0b219"},{url:"/icons/SimPL.png",revision:"8d71ed84624471c92f87c5a669ec8ac2"},{url:"/icons/bnb.svg",revision:"4580d35d8d38e6f39d6372bf8d97dad6"},{url:"/icons/bscscan-logo.svg",revision:"2240a5a5a701de58c0d299b12a561df8"},{url:"/icons/coinbase.svg",revision:"ffa9cee0120eac5b70313de3b8da3088"},{url:"/icons/fav/android-chrome-192x192.png",revision:"e85eb969500bde3723e18e5ccbb17034"},{url:"/icons/fav/android-chrome-512x512.png",revision:"876ae8d12215cf278422526f4c8cb7a3"},{url:"/icons/fav/apple-touch-icon.png",revision:"26b6006d54b5684dd0f14bf8efccf45d"},{url:"/icons/fav/browserconfig.xml",revision:"dd85714a27adbe9ad298ab689589108f"},{url:"/icons/fav/favicon-16x16.png",revision:"144b9f1042ca4a8aa98c849ab1350e51"},{url:"/icons/fav/favicon-32x32.png",revision:"e96500ce4ead53b2da46664f79ee2488"},{url:"/icons/fav/favicon.ico",revision:"3d5d04d0347caf59fa321b6f20c0b219"},{url:"/icons/fav/maskable_icon_x192.png",revision:"18fd5292ebe75a5b1d741c47ca5ea8cb"},{url:"/icons/fav/maskable_icon_x384.png",revision:"9528b7320f8bf375bb1eade3604b9b2d"},{url:"/icons/fav/maskable_icon_x512.png",revision:"3be557fd85afc61461a01441b8dd218e"},{url:"/icons/fav/mstile-150x150.png",revision:"3d0616933426c26f9f34fe4f7c09b930"},{url:"/icons/fav/safari-pinned-tab.svg",revision:"b358c9ff0cefb67472d6a9e8a1d36b88"},{url:"/icons/fav/site.webmanifest",revision:"7ea8a3feb4bd7b5d741000b875ceec8b"},{url:"/icons/metamask.svg",revision:"de47e255248d109d080ae2867678ea8f"},{url:"/icons/mining-icon.png",revision:"d2f970a840af759a8c24b599ecb19db2"},{url:"/icons/opensea.svg",revision:"c7c3ed10e5c602fba31f6e93a6fbc957"},{url:"/icons/pancakeswap.png",revision:"4b4c5aed1a632c59507afa5f4420430b"},{url:"/icons/pinned-tab.svg",revision:"b358c9ff0cefb67472d6a9e8a1d36b88"},{url:"/icons/walletconnect.svg",revision:"882cc4e2521d6e296c82319e7f5a5efa"},{url:"/js/gyro.js",revision:"134692a3100b5744a2219e00945a79e2"},{url:"/js/gyro.min.js",revision:"23666e2cfd8a0e808205aa6269eb2596"},{url:"/js/vanilla-tilt.min.js",revision:"1ced3e3eb507e10488ab33071e1485e4"},{url:"/manifest.json",revision:"b0408119a0fd0dabcfebfa470a3ea4e9"},{url:"/simpl.png",revision:"f792bf49dd596aa89ba9e0b53dc8326f"},{url:"/space2.jpg",revision:"310de9436d1314d08f4463150a277947"},{url:"/stars/star1.png",revision:"625e6cad5a695d43e1a29f9cb9fb776a"},{url:"/stars/star2.png",revision:"da5717ace27d22d9cca91c740a5e9dee"},{url:"/stars/star3.png",revision:"3b700035ec6a8b66a84a1dfa009d00e6"},{url:"/stars/star4.png",revision:"f8356fb9cf6969ec13c62b0d2f1e9c88"},{url:"/stars/star5.png",revision:"802c13ccdcbdff21ae57f9db5c32d185"},{url:"/stars/star6.png",revision:"947906d8cf28b84976c329b5275c21a3"},{url:"/stars/star7.png",revision:"77eac06ed97d1aaf9f63d880d6783aed"},{url:"/stars/star8.png",revision:"fdbea80cdd19aa3ea8740856452012bd"},{url:"/stars/stars.png",revision:"b4d4d02b27409097baa6e778e168f1f7"},{url:"/tilt.js",revision:"b6f871ee9a54e7af5712f1610ca99017"},{url:"/undercont.png",revision:"3e06df3dc6e7dadfa5f3fc85fd0dc690"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
