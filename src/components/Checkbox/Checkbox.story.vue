<script setup>
import Checkbox from './Checkbox.vue'
</script>

<template>
  <Story title="Checkbox">
    <Variant title="Default ">
      <Checkbox label="Label" />
    </Variant>

    <Variant title="With sublabel">
      <Checkbox label="Label" sublabel="Sublabels are used to describe the option." :required="true" />
    </Variant>
  </Story>
</template>