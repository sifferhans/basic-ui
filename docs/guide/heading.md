<script setup lang="ts">
import Flex from '../../src/components/Flex/Flex.vue'
import Heading from '../../src/components/Heading/Heading.vue'
import HeadingLevel from '../../src/components/Heading/HeadingLevel.vue'
import Demo from '../components/Demo.vue'
</script>

# Heading

Use for defining sections on a document.

```vue
<script setup lang="ts">
import { Heading } from '@sigveh/basic-ui'
</script>

<template>
  <Heading :level="3">This is a h3 tag</Heading>
  <Heading :level="4">This is a h4 tag</Heading>
</template>
```

## Demo

<Demo>
  <Flex direction="column">
    <Heading :level="3">This is a h3 tag</Heading>
    <Heading :level="4">This is a h4 tag</Heading>
  </Flex>
</Demo>

## Type definitions

```ts
interface HeadingProps {
  level?: 1 | 2 | 3 | 4
}
```
