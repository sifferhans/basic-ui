<script setup lang="ts">
import { ref } from 'vue'
import Textarea from '../../src/components/Textarea/Textarea.vue'
import Checkbox from '../../src/components/Checkbox/Checkbox.vue'
import Demo from '../components/Demo.vue'

const isDisabled = ref(false)
</script>

# Textarea

Used for collection larger amounts of text input than the `Input` component.

```vue
<script setup lang="ts">
import { Textarea } from '@sigveh/basic-ui'
</script>

<template>
  <Textarea
    name="description"
    label="Description"
    placeholder="Describe your problem"
    required
  />
</template>
```

## Demo

<Demo>
  <template #controls>
    <Checkbox label="Disabled" v-model:checked="isDisabled" />
  </template>
  <Textarea :disabled="isDisabled" name="description" label="Description" placeholder="Describe your problem" required />
</Demo>

## Props

```ts
interface TextareaProps {
  name: string
  resize?: TextareaResize // default vertical
  modelValue?: string
  autoheight?: boolean
  label?: string
  placeholder?: string
  required?: boolean // default false
  size?: TextareaSize
  rows?: number // default 5
  description?: string
  showCount?: boolean
  maxlength?: number
  minlength?: number
}

export type TextareaSize = 'default'
export type TextareaResize = 'none' | 'both' | 'horizontal' | 'vertical'
```

## Slots

- label
- description
