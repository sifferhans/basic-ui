<script setup>
import Input from './Input.vue'
</script>

<template>
  <Story title="Input" :layout="{ type: 'grid', width: '100%' }">
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

<docs lang="md">
# Input

Used for user input and forms.
</docs>
