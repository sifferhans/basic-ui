import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['default', 'primary', 'secondary', 'tertiary', 'positive', 'negative'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />'
}) 

export const Default = Template.bind({})
Default.args = { theme: 'default', label: 'Default button' }

export const Primary = Template.bind({})
Primary.args = { theme: 'primary', label: 'Primary button' }

export const Secondary = Template.bind({})
Secondary.args = { theme: 'secondary', label: 'Secondary button' }

export const Tertiary = Template.bind({})
Tertiary.args = { theme: 'tertiary', label: 'Tertiary button' }

export const Positive = Template.bind({})
Positive.args = { theme: 'positive', label: 'Positive button' }

export const Negative = Template.bind({})
Negative.args = { theme: 'negative', label: 'Negative button' }
