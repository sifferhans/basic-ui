<script setup lang="ts">
import Flex from '../../src/components/Flex.vue'
import Checkbox from '../../src/components/Checkbox.vue'
import Demo from '../components/Demo.vue'
</script>

# Checkbox

Use checkboxes for single or multiple-choice selections.

```vue
<script setup lang="ts">
import { Checkbox } from '@sigveh/basic-ui'
</script>

<template>
  <Checkbox required label="Send me email" />
</template>
```

## Demo

<Demo>
  <Flex direction="column">
    <Checkbox label="This does not have a description" />
    <Checkbox required label="Send me email" description="Receive lots and lots of ads via email" />
    <Checkbox label="Put me on the list" description="Get more emails and ads than ever" />
  </Flex>
</Demo>

## Type definitions

```ts
interface CheckboxProps {
  label?: string
  description?: string
  checked?: boolean
  required?: boolean
  modelValue?: any
  name?: string
}
```
