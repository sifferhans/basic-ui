<script setup>
import { ref } from 'vue';
import Select from './Select.vue'

const items = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pear', value: 'pear' },
  { label: 'Banana', value: 'banana' },
])
</script>

<template>
  <Story title="Select">
    <Variant title="Default">
      <Select label="Default select" placeholder="Select option" :items="items" />
    </Variant>

    <Variant title="No label">
      <Select placeholder="Select option" :items="items" />
    </Variant>

    <Variant title="Required">
      <Select label="Required field" placeholder="Select option" :required="true" :items="items" />
    </Variant>
  </Story>
</template>