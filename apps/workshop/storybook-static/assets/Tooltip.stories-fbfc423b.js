import{j as r}from"./jsx-runtime-9c4ae004.js";import{r as i}from"./index-1b03fe98.js";import{n as O,b as E}from"./global.css.ts.vanilla-799eb6f1.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const b=["primary","secondary"],z=["sm","md"],j=["left","center","right"],S=[!0,!1],V={title:"COMPONENTS/Tooltip",component:O,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{options:b,control:{type:"select"}},size:{options:z,control:{type:"select"}},placement:{options:j,control:{type:"select"}},close:{options:S,control:{type:"select"}}}},p=t=>r.jsx(O,{...t,children:r.jsx(E,{size:"small",children:"Tooltip 버튼"})}),a={render:t=>r.jsx("div",{style:{display:"flex",gap:"10px"},children:b.map((e,s)=>i.createElement(p,{...t,key:e,variant:e,content:`Tooltip${s+1}`,label:`${e}`}))})},o={render:t=>r.jsx("div",{style:{display:"flex",gap:"10px"},children:z.map((e,s)=>i.createElement(p,{...t,key:e,size:e,content:`Tooltip${s+1}`,label:`${e}`}))})},n={render:t=>r.jsx("div",{style:{display:"flex",gap:"10px"},children:j.map((e,s)=>i.createElement(p,{...t,key:e,placement:e,content:`Tooltip${s+1}`,label:`${e}`}))})},l={render:t=>r.jsx(p,{...t,content:"Tooltip",label:"With Close",close:!0})};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
      {variantOptions.map((variant, index) => <Template {...args} key={variant} variant={variant} content={\`Tooltip\${index + 1}\`} label={\`\${variant}\`} />)}\r
    </div>
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var x,y,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
      {sizeOptions.map((size, index) => <Template {...args} key={size} size={size} content={\`Tooltip\${index + 1}\`} label={\`\${size}\`} />)}\r
    </div>
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,T,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "10px"
  }}>\r
      {placementOptions.map((placement, index) => <Template {...args} key={placement} placement={placement} content={\`Tooltip\${index + 1}\`} label={\`\${placement}\`} />)}\r
    </div>
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,$,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Template {...args} content="Tooltip" label="With Close" close />
}`,...(h=($=l.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};const _=["Variants","Size","Placement","WithClose"];export{n as Placement,o as Size,a as Variants,l as WithClose,_ as __namedExportsOrder,V as default};
