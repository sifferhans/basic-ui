<script setup lang="ts">
import { computed } from 'vue'

export type GridAlign = 'start' | 'center' | 'end' | 'stretch'
export interface GridProps {
  columns?: string | number
  rows?: string | number
  gap?: string
  justify?: GridAlign
  align?: GridAlign
  placeItems?: GridAlign
}

const props = withDefaults(defineProps<GridProps>(), {
  columns: 2,
  gap: '1rem',
})

const columnsComp = computed(() => {
  if (!props.columns) return '1fr'
  if (typeof props.columns === 'number') return `repeat(${props.columns}, 1fr)`

  return props.columns
    .split(':')
    .map(n => `${n}fr`)
    .join(' ')
})

const rowsComp = computed(() => {
  if (!props.rows) return 'auto'
  if (typeof props.rows === 'number') return `repeat(${props.rows}, 1fr)`

  return props.rows
    .split(':')
    .map(n => `${n}fr`)
    .join(' ')
})
</script>

<template>
  <div class="b-grid">
    <slot />
  </div>
</template>

<style lang="scss">
.b-grid {
  display: grid;
  grid-template-columns: v-bind(columnsComp);
  grid-template-rows: v-bind(rowsComp);
  gap: v-bind(gap);
}
</style>
