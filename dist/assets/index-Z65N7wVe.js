var v=Object.defineProperty;var k=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>(k(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const y=123456789,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",E=6;function T(t){let e="";const s=y+g;for(let o=0;o<t;o++)e+=s.charAt(Math.random()*s.length);return e}class w{constructor(e,s=!1){c(this,"id");c(this,"value");c(this,"completed");this.id=T(E),this.value=e,this.completed=s}}class p{constructor(e){c(this,"list");c(this,"addTask",e=>(this.list.push(e),this.list));c(this,"getTaskById",e=>this.list.find(s=>s.id===e)||null);c(this,"getTaskByIndex",e=>this.list[e]||null);this.list=e||[]}}let u="all";const h=new p,C=document.querySelectorAll(".navbar__menu button");C.forEach(t=>{t.addEventListener("click",()=>{var e;(e=document.querySelector("button.active"))==null||e.classList.remove("active"),t.classList.add("active"),u=t.id,l()})});function S(t){const e=new w(t);return h.addTask(e),e}function b(t,e=""){const s=t.list.filter(o=>u=="completed"?o.value.toLowerCase().includes(e.toLowerCase())&&o.completed===!0:u=="pending"?o.value.toLowerCase().includes(e.toLowerCase())&&o.completed===!1:o.value.toLowerCase().includes(e.toLowerCase()));return new p(s)}const d=document.querySelector(".task-list");function q(t){if(!d)throw new Error("Element not found");t.list.length==0?d.innerHTML=`<h2 class="noTaskMessage">You don't have any tasks</h2>`:d.innerHTML="",t.list.forEach(e=>{const s=document.createElement("div");s.classList.add("task-item");const o=document.createElement("label");o.classList.add("form-control");const n=document.createElement("p");n.classList.add("task-item-value"),n.textContent=e.value;const r=document.createElement("input");r.setAttribute("type","checkbox"),r.checked=e.completed,r.onchange=a=>{var f;e.completed=(f=a.target)==null?void 0:f.checked,e.completed?(n.classList.add("checked"),l()):(n.classList.remove("checked"),l())},e.completed?n.classList.add("checked"):n.classList.remove("checked"),o.appendChild(n),o.appendChild(r),s.appendChild(o),d.appendChild(s)})}l();function l(t=""){const e=b(h,t);q(e)}const m=document.querySelector(".searchInput");m&&m.addEventListener("input",t=>{var s;const e=(s=t.target)==null?void 0:s.value;l(e)});const i=document.querySelector(".addTaskInput");i==null||i.addEventListener("keyup",t=>{const e=i.value.trim();t.key=="Enter"&&e&&L(e)});const I=document.querySelector(".addIcon");I.onclick=function(){const t=i.value.trim();t&&L(t)};function L(t){i.value="",S(t),l()}
