<script setup lang="ts">
import Flex from '../../src/components/Flex/Flex.vue'

withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Controls'
})
</script>

<template>
  <fieldset class="demo-controls">
    <legend class="demo-controls__title">{{ title }}</legend>
    <Flex>
      <slot />
    </Flex>
  </fieldset>
</template>

<style>
.demo-controls {
  border-radius: .5rem;
  border: 1px solid #eaeaea;
  padding: 1rem;
}

.demo-controls__title {
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: .8em;
}
</style>