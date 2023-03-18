(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,a=(window.wp.i18n,window.wp.blockEditor),n=window.wp.components,r=JSON.parse('{"u2":"create-block/peak-marquee"}');(0,e.registerBlockType)(r.u2,{supports:{align:["full","wide"]},edit:function(e){let{attributes:r,setAttributes:o}=e;const[l,i]=(0,t.useState)(r.marquee);return(0,t.createElement)("div",(0,a.useBlockProps)({className:"peak-marquee"}),r.marquee.map(((e,c)=>(0,t.createElement)("div",{key:c,className:"peak-marquee-headline"},(0,t.createElement)(a.RichText,{tagName:"h2",className:"peak-marquee-item",value:e.content,onChange:e=>((e,t)=>{let a=[...l];a[t].content=e,i(a),o({marquee:a})})(e,c)}),(0,t.createElement)(n.ButtonGroup,{className:"ui-button-group"},(0,t.createElement)(n.Button,{className:"remove-ui-button",onClick:()=>(e=>{let t=l.filter((t=>t!=l[e]));i(t),o({marquee:t})})(c)},(0,t.createElement)(n.Dashicon,{icon:"trash"})),0!=c&&(0,t.createElement)(n.Button,{className:"up-ui-button",onClick:()=>(e=>{if(0===e)return;let t=[...l],a=t.splice(e,1)[0];t.splice(e-1,0,a),i(t),o({marquee:t})})(c)},(0,t.createElement)(n.Dashicon,{icon:"arrow-up-alt2"})),c<r.marquee.length-1&&(0,t.createElement)(n.Button,{className:"down-ui-button",onClick:()=>(e=>{if(e===l.length-1)return;let t=[...l],a=t.splice(e,1)[0];t.splice(e+1,0,a),i(t),o({marquee:t})})(c)},(0,t.createElement)(n.Dashicon,{icon:"arrow-down-alt2"})))))),(0,t.createElement)(n.Button,{className:"add-ui-button",onClick:()=>{let e=[...l];e.unshift({content:"New Headline"}),i(e),o({marquee:e})}},(0,t.createElement)(n.Dashicon,{icon:"insert"})," New Headline"))},save:function(e){let{attributes:n}=e;return(0,t.createElement)("div",a.useBlockProps.save({className:"peak-marquee"}),n.marquee.map(((e,n)=>(0,t.createElement)("div",{key:n,className:"peak-marquee-headline"},(0,t.createElement)(a.RichText.Content,{tagName:"h2",className:"peak-marquee-item",value:e.content})))))}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,r,o)=>{if(!a){var l=1/0;for(s=0;s<e.length;s++){for(var[a,r,o]=e[s],i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[a,r,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[l,i,c]=a,u=0;if(l.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var s=c(n)}for(t&&t(a);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},a=globalThis.webpackChunkpeak_marquee=globalThis.webpackChunkpeak_marquee||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[431],(()=>n(259)));r=n.O(r)})();