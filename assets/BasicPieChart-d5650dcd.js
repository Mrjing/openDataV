import{u as g}from"./index-25359c8e.js";import{u as w}from"./index-c01320d9.js";import{u as v}from"./hooks-02fce192.js";import{c as _}from"./utils-ac153957.js";import{d as C,e as S,f as L,h as D,w as E,u as y,o as z,c as B}from"./index-3ca9a95a.js";const V=C({__name:"BasicPieChart",props:{component:{}},setup(d){const n=d,c=S(null);let a;const{updateEchart:p,resizeHandler:m}=v(c);let s=[];const h=(t,o)=>{t.status==="SUCCESS"&&(s=t.afterData,l(s)),l(s)};g(n.component,h);const b=()=>{l(s)},{propValue:e}=w(n.component,b);L(async()=>{a=u(),p(a)});const u=()=>{const t={grid:{top:"10%",left:"3%",right:"4%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item"},legend:{show:e.legend.isShow,top:"5%",left:"center"},series:[]};let o=[{type:"pie",radius:[`${e.series.radiusMin||0}%`,`${e.series.radiusMax||100}%`],avoidLabelOverlap:!0,itemStyle:{borderRadius:e.series.borderRadius,borderColor:"transparent",borderWidth:100},label:{show:!1,position:"center",color:e.label.labelColor},emphasis:{label:{show:e.label.isShow,fontSize:e.label.labelSize,fontWeight:e.label.labelWeight},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{show:!1},data:[]}];return t.series=o,t},l=t=>{const o=e.data.upperLimit,i=e.data.lowerLimit,f=t.map(r=>({value:_(Number(r.value),o,i),label:r.label}));a=u(),a.series[0].data=f.map(r=>({value:r.value,name:r.label})),p(a)};return(t,o)=>{const i=D("resize");return E((z(),B("div",{ref_key:"chartEl",ref:c},null,512)),[[i,y(m)]])}}});export{V as default};
