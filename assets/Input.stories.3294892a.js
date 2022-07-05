import{f as s,g as u,i as l,d,j as p,b as c,m as b,n as m,o as r,e as f,t as g}from"./vue.esm-bundler.e25881e1.js";let _=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");const v=["for"],I=["id"],o={__name:"Input",props:{label:String,size:{type:String,default:"default",validator(n){return["default"].includes(n)}}},setup(n){const t=s("");return u(()=>{t.value=_()}),(e,x)=>(r(),l("div",{class:m(["b-input",[`b-input--size-${n.size}`,{"b-input--required":e.$attrs.required}]])},[n.label||e.$slots.label?(r(),l("label",{key:0,for:t.value,class:"b-input__label"},[d(e.$slots,"label",{},()=>[f(g(n.label),1)])],8,v)):p("",!0),c("input",b({id:t.value,class:"b-input__element"},e.$attrs),null,16,I)],2))}};var i=o;o.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default"]}],slots:[{name:"label"}]};var B={parameters:{storySource:{source:`import Input from './Input.vue'

export default {
	title: 'Input',
	component: Input,
}

const Template = (args) => ({
	components: { Input },
	setup() {
		return { args };
	},
	template: '<Input v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = { label: 'Default input' }

export const NoLabel = Template.bind({})
NoLabel.args = { placeholder: 'No label' }

export const Required = Template.bind({})
Required.args = { label: 'Required input', required: true }
`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:2,line:14},startBody:{col:17,line:8},endBody:{col:2,line:14}},"no-label":{startLoc:{col:17,line:8},endLoc:{col:2,line:14},startBody:{col:17,line:8},endBody:{col:2,line:14}},required:{startLoc:{col:17,line:8},endLoc:{col:2,line:14},startBody:{col:17,line:8},endBody:{col:2,line:14}}}}},title:"Input",component:i};const a=n=>({components:{Input:i},setup(){return{args:n}},template:'<Input v-bind="args" />'}),y=a.bind({});y.args={label:"Default input"};const q=a.bind({});q.args={placeholder:"No label"};const N=a.bind({});N.args={label:"Required input",required:!0};const D=["Default","NoLabel","Required"];export{y as Default,q as NoLabel,N as Required,D as __namedExportsOrder,B as default};
//# sourceMappingURL=Input.stories.3294892a.js.map
