import{j as o}from"./jsx-runtime-9c4ae004.js";import{r as m}from"./index-1b03fe98.js";import{T as p}from"./global.css.ts.vanilla-799eb6f1.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const i=["primary","secondary","default"],v={title:"COMPONENTS/Tag",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:i,control:{type:"select"}}}},c=r=>o.jsx(p,{...r,children:"텍스트"}),a={render:r=>o.jsx("div",{style:{display:"flex",gap:"10px"},children:i.map(e=>m.createElement(c,{...r,key:e,variant:e}))})};var t,s,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
      {variantOptions.map(variant => <Template {...args} key={variant} variant={variant} />)}\r
    </div>
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Variants"];export{a as Variants,u as __namedExportsOrder,v as default};
