<script setup>
import { reactive, ref } from 'vue'
import Checkbox from './Checkbox.vue'

const state = reactive({
  disabled: false,
  checked: false,
})
</script>

<template>
  <Story title="Checkbox" :layout="{ type: 'grid', width: '100%' }">
    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.checked" title="Checked" />
    </template>

    <Variant title="Default ">
      <Checkbox label="Label" v-bind="state" />
    </Variant>

    <Variant title="With sublabel">
      <Checkbox
        label="Label"
        sublabel="Sublabels are used to describe the option."
        :required="true"
        v-bind="state"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Checkbox

Component for selecting an option. Usually used in forms.
</docs>
