<script setup lang="ts">
import Button from '../../src/components/Button.vue'
import Flex from '../../src/components/Flex.vue'
import Demo from '../components/Demo.vue'
</script>

# Flex

The Flex component is a component for declaratively defining `display: flex` CSS layouts.

```vue
<script setup lang="ts">
import { Flex, Button } from '@sigveh/basic-ui'
</script>

<template>
  <Flex justify="space-between">
    <Button theme="primary">Primary button</Button>
    <Button theme="secondary">Secondary button</Button>
    <Button theme="tertiary">Tertiary button</Button>
  </Flex>
</template>
```

## Demo

<Demo>
  <Flex direction="column" style="border: 1px dashed red; padding: 8px">
    <small>justify="space-evenly"</small>
    <Flex justify="space-evenly" style="border: 1px dashed red; padding: 8px">
      <Button theme="primary">Primary button</Button>
      <Button theme="secondary">Secondary button</Button>
      <Button theme="default">Default button</Button>
    </Flex>
    <small>justify="space-around"</small>
    <Flex justify="space-around" style="border: 1px dashed red; padding: 8px">
      <Button theme="primary">Primary button</Button>
      <Button theme="secondary">Secondary button</Button>
      <Button theme="default">Default button</Button>
    </Flex>
    <small>justify="space-between"</small>
    <Flex justify="space-between" style="border: 1px dashed red; padding: 8px">
      <Button theme="primary">Primary button</Button>
      <Button theme="secondary">Secondary button</Button>
      <Button theme="default">Default button</Button>
    </Flex>
  </Flex>
</Demo>

## Props

```ts
interface FlexProps {
  align?: FlexAlignment
  justify?: FlexAlignment
  direction?: FlexDirection
  wrap?: FlexWrap
  gap?: string
}

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
type FlexAlignment =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
```
