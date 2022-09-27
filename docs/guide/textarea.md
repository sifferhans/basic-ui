<script setup lang="ts">
import Textarea from '../../src/components/Textarea/Textarea.vue'
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

<Textarea name="description" label="Description" placeholder="Describe your problem" required />

## Props

```ts
interface TextareaProps {
  name: string
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' // default vertical
  modelValue?: string
  autoheight?: boolean
  label?: string
  placeholder?: string
  required?: boolean
  size?: 'default'
  rows?: number // default 5
}
```
