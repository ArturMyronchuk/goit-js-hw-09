function e(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const t=document.querySelector(".form");t.addEventListener("submit",(function(n){n.preventDefault();const o=document.querySelector('input[name="delay"]'),i=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),r=parseInt(o.value),s=parseInt(i.value),u=parseInt(l.value);let a=r;for(let t=1;t<=u;t++)e(t,a).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),a+=s;t.reset()}));
//# sourceMappingURL=03-promises.7f9c4543.js.map
