var W=(m,b,r)=>new Promise((u,l)=>{var c=n=>{try{i(r.next(n))}catch(_){l(_)}},f=n=>{try{i(r.throw(n))}catch(_){l(_)}},i=n=>n.done?u(n.value):Promise.resolve(n.value).then(c,f);i((r=r.apply(m,b)).next())});import{d as R,r as g,h as w,a as F,x as H,i as s,w as T,o as h,c as p,b as v,F as $,e as z,u as t,t as E,q as L,f as j,_ as q}from"./index.b2f7e009.js";import{u as M}from"./index.f9a5bc2d.js";import{u as O}from"./useEventBus.c205bfc7.js";const X={class:"dv-percent-pond"},A=["id"],J=["offset","stop-color"],K=["id","x2"],Q=["offset","stop-color"],U=["x","y","rx","ry","stroke-width","stroke","width","height"],Y=["stroke-width","stroke-dasharray","stroke","points"],Z=["stroke","fill","x","y"],ee=R({__name:"Progress",props:{component:null},setup(m){const b=m,{propValue:r}=M(b.component),u=g(150),l=g(150),c=g(60),f=g(`percent-pond-gradientId1-${w()}`),i=g(`percent-pond-gradientId2-${w()}`),n=a=>{const o=a.contentRect;u.value=o.width,l.value=o.height},_=a=>{const o=a;r.data.datatag&&o.TagName===r.data.datatag&&(c.value=Number((Number(o.TagValue)*100/Number(r.data.maxValue)).toFixed(2)))};F(()=>W(this,null,function*(){yield S()}));const S=()=>W(this,null,function*(){if(r.data.history)try{const a=yield H.post({url:r.data.history,data:[r.data.datatag]});a.status===200&&(c.value=(Number(a.data.TagValue)||0)*100/Number(r.data.maxValue))}catch(a){console.log(a.message||a)}}),e=s(()=>({colors:[r.attr.color1,r.attr.color2],borderWidth:Number(r.attr.borderWidth),borderGap:Number(r.attr.borderGap),lineDash:r.attr.lineDash,gapWeight:r.attr.gapWeight,textColor:r.attr.textColor,fontSize:Number(r.attr.fontSize),borderRadius:Number(r.attr.borderRadius),localGradient:Boolean(r.attr.localGradient),formatter:r.attr.formatter})),k=s(()=>e.value.borderWidth?u.value-e.value.borderWidth:0),G=s(()=>e.value.borderWidth?l.value-e.value.borderWidth:0),D=s(()=>e.value?l.value-(e.value.borderWidth+e.value.borderGap)*2:0),V=s(()=>e.value&&e.value.localGradient?f.value:i.value),C=s(()=>{const a=l.value/2;if(!e.value)return`0, ${a} 0, ${a}`;const o=(u.value-(e.value.borderWidth+e.value.borderGap)*2)/100*c.value;return`
        ${e.value.borderWidth+e.value.borderGap}, ${a}
        ${e.value.borderWidth+e.value.borderGap+o}, ${a+.001}`}),N=s(()=>{if(!e.value.colors)return[];const o=100/(e.value.colors.length-1);return e.value.colors.map((y,d)=>[o*d,y])}),B=s(()=>e.value?"200%":"100%"),I=s(()=>e.value.formatter?e.value.formatter.replace("{value}",c.value.toString()):""),P=s(()=>({fontSize:(r.attr.fontSize||12)+"px"}));return O("actual",_),(a,o)=>{const y=j("resize");return T((h(),p("div",X,[(h(),p("svg",null,[v("defs",null,[v("linearGradient",{id:f.value,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[(h(!0),p($,null,z(t(N),(d,x)=>(h(),p("stop",{key:x,offset:`${d[0]}%`,"stop-color":d[1]},null,8,J))),128))],8,A),v("linearGradient",{id:i.value,x1:"0%",y1:"0%",x2:t(B),y2:"0%"},[(h(!0),p($,null,z(t(N),(d,x)=>(h(),p("stop",{key:x,offset:`${d[0]}%`,"stop-color":d[1]},null,8,Q))),128))],8,K)]),v("rect",{x:t(e)?t(e).borderWidth/2:"0",y:t(e)?t(e).borderWidth/2:"0",rx:t(e)?t(e).borderRadius:"0",ry:t(e)?t(e).borderRadius:"0",fill:"transparent","stroke-width":t(e)?t(e).borderWidth:"0",stroke:`url(#${f.value})`,width:t(k)>0?t(k):0,height:t(G)>0?t(G):0},null,8,U),v("polyline",{"stroke-width":t(D),"stroke-dasharray":t(e)?[t(e).lineDash,t(e).gapWeight].join(","):"0",stroke:`url(#${t(V)})`,points:t(C)},null,8,Y),v("text",{style:L(t(P)),stroke:t(e)?t(e).textColor:"#fff",fill:t(e)?t(e).textColor:"#fff",x:u.value/2,y:l.value/2},E(t(I)),13,Z)]))])),[[y,n]])}}});const se=q(ee,[["__scopeId","data-v-1a4c424b"]]);export{se as default};
