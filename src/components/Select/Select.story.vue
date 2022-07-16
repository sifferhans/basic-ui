<script setup>
import { reactive, ref } from 'vue'
import Select from './Select.vue'

const items = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pear', value: 'pear' },
  { label: 'Banana', value: 'banana' },
])

const state = reactive({
  disabled: false,
})
</script>

<template>
  <Story title="Select">
    <template #controls>
      <HstCheckbox title="Disabled" v-model="state.disabled" />
    </template>

    <Variant title="Default">
      <Select
        label="Default select"
        placeholder="Select option"
        :items="items"
        v-bind="state"
      />
    </Variant>

    <Variant title="No label">
      <Select placeholder="Select option" :items="items" v-bind="state" />
    </Variant>

    <Variant title="Required">
      <Select
        label="Required field"
        placeholder="Select option"
        :required="true"
        :items="items"
        v-bind="state"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Checkbox

Component for selecting one out of multiple predefined options.
</docs>
