!function(){var e={908:function(e,t,r){"use strict";var n=r(205),o=r(403),l=r(803),c=r(820),a=r(628),i=r(296);n.Z.use([o.Z,l.Z,c.Z,a.Z,i.Z]),new n.Z(".slider-about",{effect:"fade",fadeEffect:{crossFade:!0},speed:700,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}),new n.Z(".slider-projects",{speed:1200,parallax:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),r(145),r(660),r(476),r(550),e=r.hmd(e),document.querySelectorAll(".slider-projects .swiper-slide").forEach((e=>{const t=e.querySelector(".more-btn");t.addEventListener("click",(()=>{const r=e.querySelector(".project-info"),n=r.scrollHeight;r.classList.contains("opened")?(r.style.height="48px",t.textContent="Читать полностью"):(r.style.height=n+"px",t.textContent="Свернуть"),r.classList.toggle("opened")}))})),e&&e.hot&&e.hot.accept()},476:function(){const e=document.querySelector(".hamburger-btn"),t=document.querySelector(".menu-hamburger"),r=t.querySelectorAll("a"),n=()=>{e.classList.toggle("active"),t.classList.toggle("hidden")};e.addEventListener("click",n),r.forEach((e=>{e.addEventListener("click",n)}))},145:function(){const e=document.querySelectorAll(".modal-btn"),t=document.querySelector("#modal-popup"),r=t.querySelector(".modal-close"),n=()=>{t.classList.remove("hidden"),t.classList.add("grid")},o=()=>{t.classList.add("hidden"),t.classList.remove("grid")};e.forEach((e=>{e.addEventListener("click",n)})),r.addEventListener("click",o),t.addEventListener("click",(e=>{e.target===e.currentTarget&&o()})),window.addEventListener("keyup",(e=>{"Escape"===e.key&&o()}))},550:function(){window.innerWidth>1024&&document.querySelectorAll("[data-parallax]").forEach((e=>{window.addEventListener("scroll",(()=>{const t=`50% -${window.scrollY/4.5}px`;e.style.backgroundPosition=t}))}))},660:function(e,t,r){const n=r(458),o=r(206).default;document.querySelectorAll(".mail-form").forEach((e=>{e.addEventListener("submit",(t=>{t.preventDefault();const r=e.querySelector('input[name="name"]'),l=e.querySelector('input[name="email"]'),c=e.querySelector('input[name="phone"]'),a=(e.querySelector(".btn"),e.querySelector(".name-errors")),i=e.querySelector(".email-errors"),s=e.querySelector(".phone-errors"),u=()=>{const e=n.value(r.value,{required:!0});return a.textContent=e.errors[0],e.approved},d=()=>{const e=n.value(l.value,{email:{message:"Email неправильный"},required:!0});return i.textContent=e.errors[0],e.approved},p=()=>{const e=n.value(c.value,{required:!0});return s.textContent=e.errors[0],e.approved};r.addEventListener("input",u),l.addEventListener("input",d),c.addEventListener("input",p);const f=u(),h=d(),m=p();f&&h&&m&&(new FormData(e),o.get("http://localhost:3000/mail").then((e=>{console.log(e.data)})).catch((e=>{console.log(e)})),console.log("Сообщение отправлено"))}))}))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.x=function(){},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[908,354]],n=function(){},o=function(o,l){for(var c,a,i=l[0],s=l[1],u=l[2],d=l[3],p=0,f=[];p<i.length;p++)a=i[p],r.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(c in s)r.o(s,c)&&(r.m[c]=s[c]);for(u&&u(r),o&&o(l);f.length;)f.shift()();return d&&t.push.apply(t,d),n()},l=self.webpackChunk=self.webpackChunk||[];function c(){for(var n,o=0;o<t.length;o++){for(var l=t[o],c=!0,a=1;a<l.length;a++){var i=l[a];0!==e[i]&&(c=!1)}c&&(t.splice(o--,1),n=r(r.s=l[0]))}return 0===t.length&&(r.x(),r.x=function(){}),n}l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l));var a=r.x;r.x=function(){return r.x=a||function(){},(n=c)()}}(),r.x()}();