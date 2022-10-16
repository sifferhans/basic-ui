<script setup lang="ts">
import { ref } from 'vue'
import Select from '../../src/components/Select/Select.vue'
import Flex from '../../src/components/Flex/Flex.vue'
import Demo from '../components/Demo.vue'

const favorite = ref('')
const fruits = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pear', value: 'pear' },
])
</script>

# Select

The Select component is used for selecting one or more choices in a form.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@sigveh/basic-ui'

const fruits = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pear', value: 'pear' },
])
</script>

<template>
  <Select label="Favorite fruit" :items="fruits" v-model="favorite" />
</template>
```

## Demo

<Demo>
  <Flex direction="column">
    <Select required label="Favorite fruit" :items="fruits" placeholder="Choose" />
    <Select label="Small select" :items="fruits" placeholder="Choose" size="small" />
  </Flex>
</Demo>

## Props

```ts
export interface SelectProps {
  items: SelectOption[]
  label?: string
  size?: SelectSize
  required?: boolean
  modelValue?: string
  placeholder?: string
  description?: string
  name?: string
}

export type SelectSize = 'default' | 'small'
export type SelectOption = {
  label: string
  value: string
}
```

## Slots

- label
- description
