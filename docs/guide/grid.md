<script setup lang="ts">
import Textarea from '../../src/components/Textarea/Textarea.vue'
import Grid from '../../src/components/Grid/Grid.vue'
</script>

# Grid

The Grid component is a component for declaratively defining `display: grid` CSS layouts.

```vue
<script setup lang="ts">
import { Grid, Textarea } from '@sigveh/basic-ui'
</script>

<template>
  <Grid columns="2:1">
    <Textarea placeholder="I will use two columns" />
    <Textarea placeholder="I will use one" />
    <Textarea />
  </Grid>
</template>
```

## Demo

<Grid columns="2:1">
  <Textarea placeholder="I will use two columns"/>
  <Textarea placeholder="I will use one" />
  <Textarea />
</Grid>

## Props

```ts
export interface GridProps {
  columns?: string | number
  rows?: string | number
  gap?: string
  justify?: GridAlign
  align?: GridAlign
  placeItems?: GridAlign
}

export type GridAlign = 'start' | 'center' | 'end' | 'stretch'
```
