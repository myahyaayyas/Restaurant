if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>a(e,r),c={module:{uri:r},exports:s,require:d};i[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(f(...e),s)))}}define(["./workbox-5485516b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"471.bundle.js",revision:"81fdf0da86a962f6b62c26dfaf91963c"},{url:"471.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"828.bundle.js",revision:"e18e9fda2860ab5fc81486e2b3b99f3a"},{url:"828.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"91bf5c4a50c73e706c25.jpg",revision:null},{url:"971.bundle.js",revision:"b4337809b6ff55529098ff15b7ef7d1c"},{url:"971.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"Chef-restaurant.png",revision:"54d38869dfae8fa87efae48249f76419"},{url:"app.webmanifest",revision:"842275e7dae050c9cd94ef46e5144e17"},{url:"app~e96e9bea.bundle.js",revision:"6d0cfed114e710de03943208491269ac"},{url:"app~f6563343.bundle.js",revision:"7e8db293c587ab0a6b72b32100a089b4"},{url:"app~f6563343.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"fd2b84362a0b249367da.jpg",revision:null},{url:"icons/favicon-16x16.png",revision:"0aec2c5f6611e83d51ed19e84dee1f8b"},{url:"icons/favicon-180x180.png",revision:"8a65b26545a546558a2bfd2386aceae0"},{url:"icons/favicon-192x192.png",revision:"dc91d03f228790faf156d73fa71b8fee"},{url:"icons/favicon-32x32.png",revision:"33fb6f932ae84f041f785e6a9783c627"},{url:"icons/favicon-48x48.png",revision:"acdb0635745d9e3f4f1290c071a38a23"},{url:"icons/favicon-512x512.png",revision:"ad5f1f1507812c80f0b1c44c717738fc"},{url:"images/hero-image_1-small.jpg",revision:"cbaf27694b4a4788a824c6bf3582f1a3"},{url:"images/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"index.html",revision:"c366df3d666848a92af507cc2a2ca882"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
