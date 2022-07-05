<script setup>
import Button from './Button.vue'
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <Button label="Default button" />
    </Variant>

    <Variant title="Primary">
      <Button label="Primary button" theme="primary" />
    </Variant>

    <Variant title="Secondary">
      <Button label="Secondary button" theme="secondary" />
    </Variant>

    <Variant title="Tertiary">
      <Button label="Tertiary button" theme="tertiary" />
    </Variant>

    <Variant title="Positive">
      <Button label="Positive button" theme="positive" />
    </Variant>

    <Variant title="Negative">
      <Button label="Negative button" theme="negative" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Button

Used for user interactions
</docs>
