<script setup>
import Input from './Input.vue'
</script>

<template>
  <Story title="Input">
    <Variant title="Default">
      <Input label="Default Input" />
    </Variant>

    <Variant title="No label">
      <Input placeholder="No label" />
    </Variant>

    <Variant title="Required">
      <Input label="Required input" :required="true" />
    </Variant>
  </Story>
</template>