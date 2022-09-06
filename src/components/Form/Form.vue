<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', ...args: any[]): void
  (e: 'reset', ...args: any[]): void
}>()
</script>

<template>
  <form
    class="b-form"
    @submit.prevent="emit('submit', $event)"
    @reset="emit('reset')"
  >
    <slot />
  </form>
</template>
