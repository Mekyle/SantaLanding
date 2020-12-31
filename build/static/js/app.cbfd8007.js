(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function f(t){d=t}new Set,new Set;const p=[],h=[],m=[],x=[],g=Promise.resolve();let $=!1;function b(t){m.push(t)}let y=!1;const v=new Set;function w(){if(!y){y=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];f(e),k(e.$$)}for(f(null),p.length=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];v.has(e)||(v.add(e),e())}m.length=0}while(p.length);for(;x.length;)x.pop()();$=!1,y=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const _=new Set;let E;function T(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(r,l,a,c,u,h,m=[-1]){const x=d;f(r);const y=l.props||{},v=r.$$={fragment:null,ctx:null,props:h,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(x?x.$$.context:[]),callbacks:n(),dirty:m,skip_bound:!1};let k=!1;if(v.ctx=a?a(r,y,((t,e,...n)=>{const s=n.length?n[0]:e;return v.ctx&&u(v.ctx[t],v.ctx[t]=s)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](s),k&&function(t,e){-1===t.$$.dirty[0]&&(p.push(t),$||($=!0,g.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(r,t)),e})):[],v.update(),k=!0,s(v.before_update),v.fragment=!!c&&c(v.ctx),l.target){if(l.hydrate){const t=(S=l.target,Array.from(S.childNodes));v.fragment&&v.fragment.l(t),t.forEach(i)}else v.fragment&&v.fragment.c();l.intro&&((E=r.$$.fragment)&&E.i&&(_.delete(E),E.i(T))),function(t,n,r){const{fragment:l,on_mount:a,on_destroy:i,after_update:c}=t.$$;l&&l.m(n,r),b((()=>{const n=a.map(e).filter(o);i?i.push(...n):s(n),t.$$.on_mount=[]})),c.forEach(b)}(r,l.target,l.anchor),w()}var E,T,S;f(x)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function j(e){let n,s,o;return{c(){var t;n=c("link"),t=" ",s=document.createTextNode(t),o=c("main"),o.innerHTML='<header class="h-24 sm:h-32 flex items-center"><div class="font-black text-purple-500 text-2xl pl-6 sm:pl-20 flex">Eth<span class="text-white">Grounds</span></div> \n        <div class="container mx-auto px-4 sm:px-6 flex items-center justify-between"><div class="flex items-center"><nav class="text-white md:text-lg text-md flex items-center"><a href="https://t.me/ethgrounds" class="py-2 px-3 flex hover:text-purple-500 text-green-300">Telegram</a> \n                    <a href="https://discord.gg/znrEDDQca8" class="py-2 px-3 flex hover:text-purple-500 text-green-300">Discord</a> \n                    <a href="https://twitter.com/EthGrounds" class="py-2 px-3 flex hover:text-purple-500 text-green-300">Twitter</a></nav></div></div></header> \n    <div class="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row relative"><div class="sm:w-6/12 relative z-10"><img class="w-full" src="/santa.png"/></div> \n        <div class="sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0"><h1 class="text-4xl lg:text-5xl text-white leading-none mb-4 font-black">Be like <span class="text-red-500">Santa</span> and live your dreams with <span class="text-purple-500">Eth</span>Grounds</h1> \n            <p class="lg:text-lg mb-4 sm:mb-12 text-white"><span class="text-purple-500">Eth</span>Grounds allows you to invest in passion projects that traditional capital never would. As a project creator you can accept capital from anyone and anywhere securely through our smart contracts.</p> \n            <a href="#" class="font-semibold text-lg bg-green-600 hover:bg-white hover:text-black text-white py-3 px-12 rounded-full">Learn more</a></div></div>',u(n,"href","https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap"),u(n,"rel","stylesheet"),u(o,"class","bg-gray-900 font-montserrat")},m(t,e){a(t,n,e),a(t,s,e),a(t,o,e)},p:t,i:t,o:t,d(t){t&&i(n),t&&i(s),t&&i(o)}}}new class extends class{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,null,j,r,{})}}({target:document.body})})();