import{j as e}from"./jsx-runtime-9c4ae004.js";import{L as o,i as n}from"./global.css.ts.vanilla-799eb6f1.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const g={title:"COMPONENTS/List",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{}},d=[{id:"1",firstName:"John",lastName:"Doe"},{id:"2",firstName:"Jane",lastName:"Doe"},{id:"3",firstName:"Gildong",lastName:"Hong"}],c=({item:t})=>e.jsxs(n,{children:[e.jsx("div",{children:t.firstName}),e.jsx("div",{children:t.lastName})]}),r={render:({...t})=>e.jsx(o,{...t,items:d,renderItem:s=>e.jsx(c,{item:s},s.id)})};var a,m,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <List {...args} items={Items} renderItem={item => <Item key={item.id} item={item} />} />;
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const f=["ListExample"];export{r as ListExample,f as __namedExportsOrder,g as default};
