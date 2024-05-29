import{j as t}from"./jsx-runtime-9c4ae004.js";import{k as e,b as r,S as c}from"./global.css.ts.vanilla-799eb6f1.js";import{r as s}from"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const x={title:"COMPONENTS/Select",component:e,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{}},n={render:()=>{const[o,O]=s.useState("");return t.jsxs("div",{style:{transform:"translate(0)",height:"600px",width:"375px",background:"#F6F9FC"},children:[t.jsxs(e,{children:[t.jsx(e.Trigger,{children:t.jsx(r,{block:!0,children:"Select Open"})}),t.jsxs(e.OptionList,{title:"은행을 선택해주세요",closeIcon:t.jsx(c,{}),onChangeSelected:O,children:[t.jsx(e.Option,{value:"Option 1",children:"Option 1"}),t.jsx(e.Option,{value:"Option 2",children:"Option 2"}),t.jsx(e.Option,{value:"Option 3",children:"Option 3"}),t.jsx(e.Option,{value:"Option 4",children:"Option 4"}),t.jsx(e.Option,{value:"Option 5",children:"Option 5"}),t.jsx(e.Option,{value:"Option 6",children:"Option 6"}),t.jsx(e.Option,{value:"Option 7",children:"Option 7"}),t.jsx(e.Option,{value:"Option 8",children:"Option 8"}),t.jsx(e.Option,{value:"Option 9",children:"Option 9"}),t.jsx(e.Option,{value:"Option 10",children:"Option 10"}),t.jsx(e.Option,{value:"Option 11",children:"Option 11"}),t.jsx(e.Option,{value:"Option 12",children:"Option 12"}),t.jsx(e.Option,{value:"Option 13",children:"Option 13"}),t.jsx(e.Option,{value:"Option 14",children:"Option 14"})]})]}),o&&`Select Item: ${o}`]})}};var i,p,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("");
    return <div style={{
      transform: "translate(0)",
      height: "600px",
      width: "375px",
      background: "#F6F9FC"
    }}>\r
        <Select>\r
          <Select.Trigger>\r
            <Button block>Select Open</Button>\r
          </Select.Trigger>\r
          <Select.OptionList title="은행을 선택해주세요" closeIcon={<CloseOutlined />} onChangeSelected={setSelected}>\r
            <Select.Option value="Option 1">Option 1</Select.Option>\r
            <Select.Option value="Option 2">Option 2</Select.Option>\r
            <Select.Option value="Option 3">Option 3</Select.Option>\r
            <Select.Option value="Option 4">Option 4</Select.Option>\r
            <Select.Option value="Option 5">Option 5</Select.Option>\r
            <Select.Option value="Option 6">Option 6</Select.Option>\r
            <Select.Option value="Option 7">Option 7</Select.Option>\r
            <Select.Option value="Option 8">Option 8</Select.Option>\r
            <Select.Option value="Option 9">Option 9</Select.Option>\r
            <Select.Option value="Option 10">Option 10</Select.Option>\r
            <Select.Option value="Option 11">Option 11</Select.Option>\r
            <Select.Option value="Option 12">Option 12</Select.Option>\r
            <Select.Option value="Option 13">Option 13</Select.Option>\r
            <Select.Option value="Option 14">Option 14</Select.Option>\r
          </Select.OptionList>\r
        </Select>\r
        {selected && \`Select Item: \${selected}\`}\r
      </div>;
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,x as default};
