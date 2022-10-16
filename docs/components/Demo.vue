<script setup lang="ts">
import Controls from './DemoControls.vue'
</script>

<template>
  <div class="demo">
    <Controls v-if="$slots.controls" style="margin-bottom: 1.5rem;">
      <slot name="controls" />
    </Controls>
    <slot />
  </div>
</template>