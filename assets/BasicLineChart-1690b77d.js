import{u as L}from"./index-25359c8e.js";import{u as h}from"./index-c01320d9.js";import{u as C}from"./hooks-02fce192.js";import{c as S}from"./utils-ac153957.js";import{d as b,e as g,f as _,h as v,w,u as A,o as E,c as k}from"./index-3ca9a95a.js";const F=b({__name:"BasicLineChart",props:{component:{}},setup(m){const n=m,c=g(null);let o,s=[];const u=(a,i)=>{a.status==="SUCCESS"?(s=a.afterData,r(s)):r([])};L(n.component,u);const y=()=>{r(s)},{updateEchart:p,resizeHandler:d}=C(c),{propValue:e}=h(n.component,y);_(async()=>{o=x(),p(o)});const x=()=>{const a={grid:{top:"10%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],splitLine:{show:e.axis.xshow,lineStyle:{type:e.axis.xLineType,color:e.axis.xAxisLineColor}},axisLine:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisLabel:{color:e.axis.axisLabelColor||"#fff"}},yAxis:{type:"value",max:e.data.max?e.data.max:"dataMax",splitLine:{show:e.axis.yshow,lineStyle:{type:e.axis.yLineType,color:e.axis.yAxisLineColor}},axisLine:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisLabel:{color:e.axis.axisLabelColor||"#fff"}},series:[]};let i=[{data:[],type:"line",symbol:"none",smooth:!0,markLine:{data:[]},areaStyle:{opacity:e.series.lineArea?.7:0},lineStyle:{width:1,color:e.series.lineColor||"#3491FA"},itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.series.lineLinearStart||"#3491FA"},{offset:1,color:e.series.lineLinearEnd||"transparent"}],global:!1}}}];return a.series=i,a},r=a=>{const i=e.data.upperLimit,l=e.data.lowerLimit,f=a.map(t=>({value:S(Number(t.value),i,l),label:t.label}));o=x(),o.series[0].data=f.map(t=>t.value),o.xAxis={...o.xAxis,data:f.map(t=>t.label)},p(o)};return(a,i)=>{const l=v("resize");return w((E(),k("div",{ref_key:"chartEl",ref:c},null,512)),[[l,A(d)]])}}});export{F as default};
