<script setup lang="ts">
import Form from '../../src/components/Form/Form.vue'
import Button from '../../src/components/Button/Button.vue'
import Input from '../../src/components/Input/Input.vue'
import Select from '../../src/components/Select/Select.vue'
import Flex from '../../src/components/Flex/Flex.vue'

function alert(data: SubmitEvent) {
	window.alert(data)
}

</script>

# Form

```vue
<script setup lang="ts">
import { Form, Button, Input, Select } from '@sifferhans/basic-ui'

function handleSubmit(data: FormData) {
  // ...
}
</script>

<template>
  <Form @submit="handleSubmit">
    <Input label="Email" required />
    <Select label="Favorite animal" :items="animals" />
    <Button theme="primary" type="submit">Submit</Button>
  </Form>
</template>
```

## Demo

<Form @submit="alert">
	<Flex direction="column">
		<Input type="email" label="Email" placeholder="john@doe.com" required />
    <Select label="Favorite animal" placeholder="None" :items="[{label:'Cat', value: 'cat'}, {label: 'Dog', value: 'dog'}]" />
    <Flex gap=".5rem" justify="end">
			<Button theme="tertiary" type="reset">Reset</Button>
			<Button theme="primary" type="submit">Submit</Button>
		</Flex>
	</Flex>
</Form>
