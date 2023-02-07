<script setup lang="ts">
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type FlexAlignment =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export interface FlexProps {
  align?: FlexAlignment
  justify?: FlexAlignment
  direction?: FlexDirection
  wrap?: FlexWrap
  gap?: string
}

withDefaults(defineProps<FlexProps>(), {
  align: 'stretch',
  justify: 'start',
  direction: 'row',
  wrap: 'wrap',
  gap: '1rem',
})
</script>

<template>
  <div class="b-flex">
    <slot />
  </div>
</template>

<style>
.b-flex {
  display: flex;
  align-items: v-bind(align);
  justify-content: v-bind(justify);
  flex-direction: v-bind(direction);
  flex-wrap: v-bind(wrap);
  gap: v-bind(gap);
}
</style>
