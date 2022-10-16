<script setup lang="ts">
import { ref } from 'vue'

import Form from '../../src/components/Form/Form.vue'
import Button from '../../src/components/Button/Button.vue'
import Input from '../../src/components/Input/Input.vue'
import Select from '../../src/components/Select/Select.vue'
import Flex from '../../src/components/Flex/Flex.vue'
import Textarea from '../../src/components/Textarea/Textarea.vue'
import Demo from '../components/Demo.vue'

function alert(data: SubmitEvent) {
	window.alert(data.formData())
}
const textarea = ref('')
const animals = [{label:'Cat', value: 'cat'}, {label: 'Dog', value: 'dog'}]
</script>

# Form

Forms are used to collect data from users, and send the collected data to a function or an API.

```vue
<script setup lang="ts">
import { Form, Button, Input, Select, Textarea } from '@sigveh/basic-ui'

function handleSubmit(event: SubmitEvent): void {
  // ...
}
</script>

<template>
  <Form @submit="handleSubmit">
    <Input name="email" label="Email" type="email" required />
    <Select name="animal" label="Favorite animal" :items="animals" />
    <Textarea name="comment" label="Comment" />
    <Button theme="primary" type="submit">Submit</Button>
  </Form>
</template>
```

## Demo

<Demo>
  <Form @submit="alert">
    <Flex direction="column">
      <Input type="email" name="email" label="Email" placeholder="john@doe.com" required />
      <Select name="animal" label="Favorite animal" placeholder="None" :items="animals" description="You can only select one animal" required />
      <Textarea name="comment" label="Comment" :maxlength="100" resize="none" show-count v-model="textarea" />
      <Flex gap=".5rem" justify="end">
        <Button theme="tertiary" type="reset">Reset</Button>
        <Button theme="primary" type="submit">Submit</Button>
      </Flex>
    </Flex>
  </Form>
</Demo>
