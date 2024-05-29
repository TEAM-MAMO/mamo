import{j as e}from"./jsx-runtime-9c4ae004.js";import{h as t,b as l}from"./global.css.ts.vanilla-799eb6f1.js";import{r as d}from"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const x={title:"COMPONENTS/DatePicker",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{}},r={args:{},render:()=>{const[a,i]=d.useState(null);return e.jsx("div",{style:{height:"350px"},children:e.jsxs(t,{children:[e.jsxs(t.Trigger,{children:[e.jsx(l,{children:"DatePicker Open"}),a&&a.toString()]}),e.jsx(t.Panel,{onClickDay:c=>{i(c)}})]})})}};var n,s,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      height: "350px"
    }}>\r
        <DatePicker>\r
          <DatePicker.Trigger>\r
            <Button>DatePicker Open</Button>\r
            {date && date.toString()}\r
          </DatePicker.Trigger>\r
          <DatePicker.Panel onClickDay={value => {
          setDate(value);
        }} />\r
        </DatePicker>\r
      </div>;
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,x as default};
