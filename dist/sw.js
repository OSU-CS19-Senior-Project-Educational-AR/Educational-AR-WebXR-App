if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!c[e]&&(await new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}),!c[e]))throw new Error(`Module ${e} didn’t register its module`);return c[e]},s=async(s,c)=>{const r=await Promise.all(s.map(e));c(1===r.length?r[0]:r)};s.toUrl=e=>`./${e}`;const c={require:Promise.resolve(s)};self.define=(s,r,a)=>{c[s]||(c[s]=new Promise(async c=>{let i={};const n={uri:location.origin+s.slice(1)},l=await Promise.all(r.map(s=>"exports"===s?i:"module"===s?n:e(s))),f=a(...l);i.default||(i.default=f),c(i)}))}}define("./sw.js",["./workbox-7c85bfc1"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"index.html",revision:"25c6f760b507b9a398e3d89dc0826c6e"},{url:"model/planets-glb/neptune/Neptune.glb",revision:"b22fc6c5706582d982eb867be9c19159"},{url:"model/planets-glb/uranus/Uranus.glb",revision:"82af7750084d9c843eec63a5655eaced"},{url:"model/planets-glb/venus/Venus.glb",revision:"97df6b856aabf83f455d10884bf1f7f1"},{url:"polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",revision:"cff507bc95ad1d6bf1a415cc9c8852b0"},{url:"polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",revision:"ed55766050be285197b8f511eacedb62"},{url:"polyfills/webcomponents.d406f4685fdfb412c61f23b3ae18f2dc.js",revision:"b1db7cb76380495a55ff4f65a9648f0e"},{url:"solar-cf070e04.js",revision:"db6c49b97e68ad45f7626aaa760dafbb"},{url:"solarSystem.json",revision:"cd524a4f37fd597796f682bb83021632"},{url:"src/menuEventHandler.js",revision:"77099a211d999429a9a73cd672c976ba"},{url:"src/render.js",revision:"5cc34e971a5c55f05a06ad5cf00f9e5b"},{url:"src/sceneEventHandler.js",revision:"b4c988c47bcdacb562ca422f18a80a99"},{url:"src/solar.js",revision:"865e256a2461556085d1ad3c9a6dfeea"},{url:"style.css",revision:"a8c9c8f9cdb280da77523b371625fbf1"}],{})}));
//# sourceMappingURL=sw.js.map
