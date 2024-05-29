import{j as r}from"./jsx-runtime-9c4ae004.js";import{d as e,e as f,f as o,b as T}from"./global.css.ts.vanilla-799eb6f1.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index-70495b6e.js";const z={title:"COMPONENTS/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"],args:{divider:!1,borderless:!0,rounded:!1},argTypes:{}},I={render:({children:n,...a})=>r.jsx("div",{style:{width:375},children:r.jsx(e,{...a,children:n})})},t={...I,args:{divider:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(e.Header,{extra:r.jsx(f,{}),children:"header"}),r.jsxs(e.Content,{children:[r.jsx(e.ImageBox,{children:r.jsx("img",{src:"http://via.placeholder.com/375x375",alt:""})}),r.jsxs(e.Information,{children:[r.jsx(o.Text,{children:"모아에게 새로운 발을 선물해주세요"}),r.jsx(o.Foot,{children:"모아에게 새로운 발을 선물해주세요"})]})]}),r.jsx(e.Footer,{children:r.jsx(T,{size:"small",block:!0,children:"편지함"})})]})}},s={...I,args:{children:r.jsxs(e.Content,{size:"small",right:r.jsx(f,{}),children:[r.jsx(e.ImageBox,{size:"small",children:r.jsx("img",{src:"http://via.placeholder.com/375x375",alt:""})}),r.jsxs(e.Information,{children:[r.jsx(o.Text,{children:"모아에게 새로운 발을 선물해주세요"}),r.jsx(o.Foot,{children:"모아에게 새로운 발을 선물해주세요"})]})]})}},d={render:({children:n,...a})=>r.jsx("div",{style:{width:164},children:r.jsx(e,{...a,children:n})}),args:{children:r.jsxs(e.Grid,{children:[r.jsx(e.ImageBox,{size:"full",children:r.jsx("img",{src:"http://via.placeholder.com/375x375",alt:""})}),r.jsx(e.Information,{children:r.jsx(o.Caption,{children:"장마철 출근길도 뽀송"})})]})}},i={render:({children:n,...a})=>r.jsx("div",{style:{width:300},children:r.jsx(e,{...a,children:n})}),args:{borderless:!1,rounded:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(e.ImageBox,{size:"full",rounded:!1,children:r.jsx("img",{src:"http://via.placeholder.com/375x375"})}),r.jsx(e.Content,{size:"large",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolore fugiat obcaecati libero non dolorem commodi temporibus incidunt sequi sint neque dolores at sit quisquam deserunt, magnam, atque aperiam aut.!"})]})}};var u,C,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...CardTemplate,
  args: {
    divider: true,
    children: <>\r
        <Card.Header extra={<ArrowRightOutlined />}>header</Card.Header>\r
        <Card.Content>\r
          <Card.ImageBox>\r
            <img src="http://via.placeholder.com/375x375" alt="" />\r
          </Card.ImageBox>\r
          <Card.Information>\r
            <Typography.Text>모아에게 새로운 발을 선물해주세요</Typography.Text>\r
            <Typography.Foot>모아에게 새로운 발을 선물해주세요</Typography.Foot>\r
          </Card.Information>\r
        </Card.Content>\r
        <Card.Footer>\r
          <Button size="small" block>\r
            편지함\r
          </Button>\r
        </Card.Footer>\r
      </>
  }
}`,...(l=(C=t.parameters)==null?void 0:C.docs)==null?void 0:l.source}}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...CardTemplate,
  args: {
    children: <Card.Content size="small" right={<ArrowRightOutlined />}>\r
        <Card.ImageBox size="small">\r
          <img src="http://via.placeholder.com/375x375" alt="" />\r
        </Card.ImageBox>\r
        <Card.Information>\r
          <Typography.Text>모아에게 새로운 발을 선물해주세요</Typography.Text>\r
          <Typography.Foot>모아에게 새로운 발을 선물해주세요</Typography.Foot>\r
        </Card.Information>\r
      </Card.Content>
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }) => <div style={{
    width: 164
  }}>\r
      <Card {...args}>{children}</Card>\r
    </div>,
  args: {
    children: <Card.Grid>\r
        <Card.ImageBox size="full">\r
          <img src="http://via.placeholder.com/375x375" alt="" />\r
        </Card.ImageBox>\r
        <Card.Information>\r
          <Typography.Caption>장마철 출근길도 뽀송</Typography.Caption>\r
        </Card.Information>\r
      </Card.Grid>
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var B,j,y;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }) => <div style={{
    width: 300
  }}>\r
      <Card {...args}>{children}</Card>\r
    </div>,
  args: {
    borderless: false,
    rounded: true,
    children: <>\r
        <Card.ImageBox size="full" rounded={false}>\r
          <img src="http://via.placeholder.com/375x375" />\r
        </Card.ImageBox>\r
        <Card.Content size="large">\r
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolore\r
          fugiat obcaecati libero non dolorem commodi temporibus incidunt sequi\r
          sint neque dolores at sit quisquam deserunt, magnam, atque aperiam\r
          aut.!\r
        </Card.Content>\r
      </>
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const q=["Default","Simply","Grid","Custom"];export{i as Custom,t as Default,d as Grid,s as Simply,q as __namedExportsOrder,z as default};
