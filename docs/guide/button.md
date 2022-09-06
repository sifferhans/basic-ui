<script setup lang="ts">
import Button from '../../src/components/Button/Button.vue'
import Flex from '../../src/components/Flex/Flex.vue'
</script>

# Button

The button component is the main component for user interaction. Buttons should primarily be used for interactivity and user actions, and not for navigation.

If you want to use a Button for navigation purposes, you can set the `tag` property to an anchor (`a`) element.

```vue
<script setup lang="ts">
import { Button } from '@sifferhans/basic-ui'
</script>

<template>
  <Button theme="primary">Primary button</Button>
</template>
```

## Demo

<Flex direction="column">
  <Flex>
    <Button theme="default">Default</Button>
    <Button theme="primary">Primary</Button>
    <Button theme="secondary">Secondary</Button>
    <Button theme="tertiary">Tertiary</Button>
    <Button theme="link">Link</Button>
  </Flex>
  <Flex>
    <Button theme="default" size="small">Default</Button>
    <Button theme="primary" size="small">Primary</Button>
    <Button theme="secondary" size="small">Secondary</Button>
    <Button theme="tertiary" size="small">Tertiary</Button>
    <Button theme="link" size="small">Link</Button>
  </Flex>
</Flex>

## Props

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
type ButtonType = 'button' | 'submit'
type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary' | 'link'
```

## Slots

- default
- icon-left
- icon-right
