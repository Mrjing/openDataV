var _=Object.defineProperty,g=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(i,t,e)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,h=(i,t)=>{for(var e in t||(t={}))N.call(t,e)&&L(i,e,t[e]);if(b)for(var e of b(t))O.call(t,e)&&L(i,e,t[e]);return i},C=(i,t)=>g(i,w(t));var v=(i,t,e)=>new Promise((o,n)=>{var x=s=>{try{c(e.next(s))}catch(a){n(a)}},u=s=>{try{c(e.throw(s))}catch(a){n(a)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(x,u);c((e=e.apply(i,t)).next())});import{c as A}from"./utils.fc532f69.js";import{u as D}from"./hooks.90da2006.js";import{u as S}from"./index.f9a5bc2d.js";import{u as k}from"./index.bea530d6.js";import{d as E,r as B,a as T,w as z,u as M,o as V,c as H,f as P}from"./index.b2f7e009.js";const J=E({__name:"BasicBarChart",props:{component:null},setup(i){const t=i,e=B(null);let o,n=[];const x=(r,f)=>{r.status>=0&&(n=r.afterData,d(n))};k(t.component,x);const u=()=>{d(n)},{updateEchart:c,resizeHandler:s}=D(e),{propValue:a}=S(t.component,u);T(()=>v(this,null,function*(){o=p(),c(o)}));const p=()=>{const r={grid:{top:"10%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],splitLine:{show:a.axis.xshow,lineStyle:{type:a.axis.xLineType,color:a.axis.xAxisLineColor}},axisLine:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisLabel:{color:a.axis.axisLabelColor||"#fff"}},yAxis:{type:"value",max:l=>a.data.max==="dataMax"||!a.data.max?l.max+Number(a.data.maxOffset||0):Number(a.data.max)+Number(a.data.maxOffset||0),min:l=>a.data.min==="dataMin"?l.min-Number(a.data.minOffset||0):["",void 0,null].includes(a.data.min)?0-Number(a.data.minOffset||0):Number(a.data.min)-Number(a.data.minOffset||0),splitLine:{show:a.axis.yshow,lineStyle:{type:a.axis.yLineType,color:a.axis.yAxisLineColor}},axisLine:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisLabel:{color:a.axis.axisLabelColor||"#fff"}},series:[]};let f=[{data:[],type:"bar"}];return r.series=f,r},d=r=>{const f=a.data.upperLimit,l=a.data.lowerLimit,y=r.map(m=>({value:A(Number(m.value),f,l),label:m.label}));o=p(),o.series[0].data=y.map(m=>m.value),o.xAxis=C(h({},o.xAxis),{data:y.map(m=>m.label)}),c(o)};return(r,f)=>{const l=P("resize");return z((V(),H("div",{ref_key:"chartEl",ref:e},null,512)),[[l,M(s)]])}}});export{J as default};
