<script setup lang="ts">
import Input from '../../src/components/Input/Input.vue'
import Flex from '../../src/components/Flex/Flex.vue'
</script>

# Input

The Input component is used for user input and data collection.

```vue
<script setup lang="ts">
import { Input } from '@sigveh/basic-ui'
</script>

<template>
  <Input label="Name" required />
</template>
```

## Demo

<Flex direction="column">
	<Input label="Name" placeholder="John Doe" />
	<Input label="E-mail" type="email" placeholder="john@doe.com" required />
	<Input label="Password" type="password" />
	<Input label="Small input size" size="small" />
</Flex>

## Props

```ts
interface InputProps {
  label?: string
  placeholder?: string
  type?: InputType
  required?: boolean
  size?: InputSize
  modelValue?: string | number
}

type InputSize = 'default' | 'small'
type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
```
