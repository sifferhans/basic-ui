<script setup>
import { reactive } from 'vue'
import Input from './Input.vue'

const state = reactive({
  disabled: false,
})
</script>

<template>
  <Story title="Input" :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <HstCheckbox title="Disabled" v-model="state.disabled" />
    </template>

    <Variant title="Default">
      <Input label="Default Input" v-bind="state" />
    </Variant>

    <Variant title="No label">
      <Input placeholder="No label" v-bind="state" />
    </Variant>

    <Variant title="Required">
      <Input label="Required input" :required="true" v-bind="state" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Input

Component for collecting user input.
</docs>
