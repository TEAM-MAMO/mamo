import{j as x}from"./jsx-runtime-9c4ae004.js";import{I as c}from"./global.css.ts.vanilla-799eb6f1.js";import{r as g}from"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const E={title:"COMPONENTS/InputNumber",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"라벨",placeholder:"얼마나 전할까요?",helperText:"에러 메세지",state:"valid"},argTypes:{label:{description:"label 텍스트를 설정합니다."},helperText:{description:"가이드 문구를 제공합니다."},state:{control:"select",options:["valid","error"],description:"input의 상태를 설정합니다."},suffix:{description:"단위와 같은 구성요소를 추가할 수 있습니다."}}},i={render:({label:u,...l})=>{const[m,d]=g.useState("");return x.jsx(c,{label:u,value:m,onChange:f=>d(f.target.value),...l})}},e={...i},r={...i,args:{suffix:"원"}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,p,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    suffix: "원"
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Default","Suffix"];export{e as Default,r as Suffix,N as __namedExportsOrder,E as default};
