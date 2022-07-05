import{a as s,w as c,m as d,r as b,o as u,b as m,d as r,e as v,t as p}from"./vue.esm-bundler.e25881e1.js";const g={class:"b-button__content"},n={__name:"Button",props:{label:String,tag:{type:[String,Object],default:"button"},size:{type:String,default:"default",validator(t){return["default","small"].includes(t)}},theme:{type:String,default:"default",validator(t){return["default","primary","secondary","tertiary","positive","negative"].includes(t)}},loading:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:i}){return(o,a)=>(u(),s(b(t.tag),d(o.$attrs,{class:["b-button",[`b-button--size-${t.size} b-button--theme-${t.theme}`,{"b-button--state-loading":t.loading}]],onClick:a[0]||(a[0]=x=>i("click")),disabled:t.loading||o.$attrs.disabled}),{default:c(()=>[m("div",g,[r(o.$slots,"icon-left"),r(o.$slots,"default",{},()=>[v(p(t.label),1)]),r(o.$slots,"icon-right")])]),_:3},16,["class","disabled"]))}};var l=n;n.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"tag",type:{name:"string|object"},defaultValue:{func:!1,value:"'button'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","small"]},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","primary","secondary","tertiary","positive","negative"]},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"icon-left"},{name:"default"},{name:"icon-right"}]};var S={parameters:{storySource:{source:`import Button from './Button.vue'\r
\r
export default {\r
  title: 'Button',\r
  component: Button,\r
  argTypes: {\r
    theme: {\r
      options: ['default', 'primary', 'secondary', 'tertiary', 'positive', 'negative'],\r
      control: { type: 'select' }\r
    },\r
    size: {\r
      options: ['default', 'small'],\r
      control: { type: 'radio' }\r
    }\r
  }\r
}\r
\r
const Template = (args) => ({\r
  components: { Button },\r
  setup() {\r
    return { args };\r
  },\r
  template: '<Button v-bind="args" />'\r
})\r
\r
export const Default = Template.bind({})\r
Default.args = { theme: 'default', label: 'Default button' }\r
\r
export const Primary = Template.bind({})\r
Primary.args = { theme: 'primary', label: 'Primary button' }\r
\r
export const Secondary = Template.bind({})\r
Secondary.args = { theme: 'secondary', label: 'Secondary button' }\r
\r
export const Tertiary = Template.bind({})\r
Tertiary.args = { theme: 'tertiary', label: 'Tertiary button' }\r
\r
export const Positive = Template.bind({})\r
Positive.args = { theme: 'positive', label: 'Positive button' }\r
\r
export const Negative = Template.bind({})\r
Negative.args = { theme: 'negative', label: 'Negative button' }\r
\r
export const Loading = Template.bind({})\r
Loading.args = { theme: 'primary', label: 'Loading button', loading: true }\r
`,locationsMap:{default:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},primary:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},secondary:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},tertiary:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},positive:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},negative:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}},loading:{startLoc:{col:17,line:18},endLoc:{col:2,line:24},startBody:{col:17,line:18},endBody:{col:2,line:24}}}}},title:"Button",component:l,argTypes:{theme:{options:["default","primary","secondary","tertiary","positive","negative"],control:{type:"select"}},size:{options:["default","small"],control:{type:"radio"}}}};const e=t=>({components:{Button:l},setup(){return{args:t}},template:'<Button v-bind="args" />'}),f=e.bind({});f.args={theme:"default",label:"Default button"};const y=e.bind({});y.args={theme:"primary",label:"Primary button"};const h=e.bind({});h.args={theme:"secondary",label:"Secondary button"};const B=e.bind({});B.args={theme:"tertiary",label:"Tertiary button"};const k=e.bind({});k.args={theme:"positive",label:"Positive button"};const L=e.bind({});L.args={theme:"negative",label:"Negative button"};const T=e.bind({});T.args={theme:"primary",label:"Loading button",loading:!0};const N=["Default","Primary","Secondary","Tertiary","Positive","Negative","Loading"];export{f as Default,T as Loading,L as Negative,k as Positive,y as Primary,h as Secondary,B as Tertiary,N as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories.63fd5efb.js.map
