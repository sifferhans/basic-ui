<script setup lang="ts">
import Flex from '../../src/components/Flex.vue'
import Switch from '../../src/components/Switch.vue'
import Demo from '../components/Demo.vue'

import { reactive } from 'vue'
const notifications = reactive({
  push: false,
  pull: true
})
</script>

# Switch

Used for toggling a value between `true` and `false`.  
Eg. to turn settings on or off.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@sigveh/basic-ui'

const notifications = ref(false)
</script>

<template>
  <Switch v-model="notifications" />
</template>
```

## Events

### input

`(e: 'input', value: boolean): void`

Runs everytime the value is updated.

### update:modelValue

`(e: 'update:modelValue', value: boolean): void`

Runs everytime the value is updated. Updates the `v-model` value.

## Demo

<Demo>
  <Flex direction="column">
    <Flex>
      <small>Medium</small>
      <Switch v-model="notifications.push" size="medium" />
    </Flex>
    <Flex>
      <small>Small</small>
      <Switch v-model="notifications.pull" size="small" />
    </Flex>
  </Flex>
</Demo>

## Type definitions

```ts
interface SwitchProps {
  modelValue?: boolean
  size?: 'small' | 'medium'
}

interface SwitchEvents {
  (e: 'input', value: boolean): void
  (e: 'udate:modelValue', value: boolean): void
}
```
