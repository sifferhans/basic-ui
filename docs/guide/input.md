<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../src/components/Input.vue'
import Flex from '../../src/components/Flex.vue'
import Checkbox from '../../src/components/Checkbox.vue'
import Demo from '../components/Demo.vue'

const isLoading = ref(false)
const isDisabled = ref(false)
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

<Demo>
  <template #controls>
    <Flex>
      <Checkbox label="Loading" v-model:checked="isLoading" />
      <Checkbox label="Disabled" v-model:checked="isDisabled" />
    </Flex>
  </template>
  <Flex direction="column">
    <Input :disabled="isDisabled" :loading="isLoading" label="Name" placeholder="John Doe" />
    <Input :disabled="isDisabled" :loading="isLoading" label="E-mail" type="email" placeholder="john@doe.com" required />
    <Input :disabled="isDisabled" :loading="isLoading" label="Password" type="password" />
    <Input :disabled="isDisabled" :loading="isLoading" label="Small input size" size="small" />
  </Flex>
</Demo>

## Type definitions

```ts
interface InputProps {
  label?: string
  placeholder?: string
  type?: InputType
  required?: boolean
  size?: InputSize
  modelValue?: string | number
  description?: string
  name?: string
  loading?: boolean
}

type InputSize = 'default' | 'small'
type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
```

## Slots

- label
- description
