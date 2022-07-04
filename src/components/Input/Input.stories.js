import Input from './Input.vue'

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
