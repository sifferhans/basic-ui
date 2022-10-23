<script setup lang="ts">
import { computed } from 'vue';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4
}

const props = defineProps<HeadingProps>()
const heading = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="heading" class="b-heading">
    <slot />
  </component>
</template>

<style lang="scss">
.b-heading {
  --size-4: clamp(1.20rem, calc(0.94rem + 1.32vw), 1.88rem);
  --size-3: clamp(1.44rem, calc(1.09rem + 1.76vw), 2.34rem);
  --size-2: clamp(1.73rem, calc(1.26rem + 2.35vw), 2.93rem);
  --size-1: clamp(2.07rem, calc(1.45rem + 3.10vw), 3.66rem);

  display: block;
  line-height: 1.2;

  &:is(h1) {
    font-size: var(--size-1);
  }

  &:is(h2) {
    font-size: var(--size-2);
  }

  &:is(h3) {
    font-size: var(--size-3);
  }

  &:is(h4) {
    font-size: var(--size-4);
  }
}
</style>