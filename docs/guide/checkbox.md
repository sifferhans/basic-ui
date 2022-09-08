<script setup lang="ts">
import Flex from '../../src/components/Flex/Flex.vue'
import Checkbox from '../../src/components/Checkbox/Checkbox.vue'
</script>

# Checkbox

```vue
<script setup lang="ts">
import { Checkbox } from '@sifferhans/basic-ui'
</script>

<template>
  <Checkbox required label="Send me email" />
</template>
```

## Demo

<Flex direction="column">
  <Checkbox required label="Send me email" sublabel="Receive lots and lots of ads via email" />
  <Checkbox label="Put me on the list" sublabel="Get more emails and ads than ever" />
</Flex>

## Props

```ts
interface CheckboxProps {
  label?: string
  sublabel?: string
  checked?: boolean
  required?: boolean
  modelValue?: boolean | string | number
}
```