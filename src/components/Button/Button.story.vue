<script setup>
import { reactive } from 'vue'
import Button from './Button.vue'

const state = reactive({
  loading: false,
  disabled: false,
})
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <HstCheckbox title="Loading" v-model="state.loading" />
      <HstCheckbox title="Disabled" v-model="state.disabled" />
    </template>

    <Variant title="Default">
      <Button label="Default button" v-bind="state" />
    </Variant>

    <Variant title="Primary">
      <Button label="Primary button" theme="primary" v-bind="state" />
    </Variant>

    <Variant title="Secondary">
      <Button label="Secondary button" theme="secondary" v-bind="state" />
    </Variant>

    <Variant title="Tertiary">
      <Button label="Tertiary button" theme="tertiary" v-bind="state" />
    </Variant>

    <Variant title="Positive">
      <Button label="Positive button" theme="positive" v-bind="state" />
    </Variant>

    <Variant title="Negative">
      <Button label="Negative button" theme="negative" v-bind="state" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Button

Primary component for user interaction
</docs>
