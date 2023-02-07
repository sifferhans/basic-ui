<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../src/components/Button.vue'
import Flex from '../../src/components/Flex.vue'
import Checkbox from '../../src/components/Checkbox.vue'

import DemoControls from '../components/DemoControls.vue'
import Demo from '../components/Demo.vue'

const isLoading = ref(false)
const isDisabled = ref(false)
</script>

# Button

The button component is the primary component for user interaction. Buttons should primarily be used for interactivity and user actions, and not for navigation.

If you do want to use a Button for navigation purposes, you can set the `tag` property to an anchor (`a`) element.

```vue
<script setup lang="ts">
import { Button } from '@sigveh/basic-ui'
</script>

<template>
  <Button theme="primary">Primary button</Button>
</template>
```

## Demo

<Demo>
  <template #controls>
    <Checkbox label="Loading" v-model:checked="isLoading" />
    <Checkbox label="Disabled" v-model:checked="isDisabled" />
  </template>
  <Flex direction="column">
    <Flex>
      <Button :loading="isLoading" :disabled="isDisabled" theme="default">Default</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="primary">Primary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="secondary">Secondary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="tertiary">Tertiary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="link">Link</Button>
    </Flex>
    <Flex>
      <Button :loading="isLoading" :disabled="isDisabled" theme="default" size="small">Default</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="primary" size="small">Primary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="secondary" size="small">Secondary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="tertiary" size="small">Tertiary</Button>
      <Button :loading="isLoading" :disabled="isDisabled" theme="link" size="small">Link</Button>
    </Flex>
  </Flex>
</Demo>

## Type definitions

```ts
interface ButtonProps {
  label?: string
  tag?: string
  size?: ButtonSize
  theme?: ButtonTheme
  loading?: boolean
  disabled?: boolean
  type?: ButtonType
}

type ButtonSize = 'small' | 'default'
type ButtonType = 'button' | 'submit' | 'reset'
type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary' | 'link'
```

## Slots

- default
- icon-left
- icon-right
