<script setup>
defineProps({
  label: String,
  size: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default'].includes(value)
    },
  },
  required: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => []
  },
  modelValue: String,
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="b-select" :class="[`b-select--size-${size}`, { 'b-select--required': required }]">
    <div class="b-select__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <select class="b-select__element" v-bind="$attrs" :value="modelValue" @input="emit('update:modelValue')">
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="(item, i) in items" :key="i" :value="item.value">{{ item.label }}</option>
    </select>
  </label>
</template>

<style lang="scss">
.b-select {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;

  &__element {
    padding-inline: var(--b-select-padding-inline);
    padding-block: var(--b-select-padding-block);
    border-radius: var(--b-select-border-radius, 4px);

    border: 1px solid var(--b-select-border-color, #000);
    font: inherit;
  }

  /* Required */
  &--required {
    .b-select__label {
      &:after {
        content: '*';
        color: var(--b-color-negative, #af2929);
        margin-left: 0.25rem;
      }
    }
  }

  /* Sizes */
  &--size {
    &-default {
      --b-select-padding-block: 0.75rem;
      --b-select-padding-inline: 1rem;
    }
  }
}
</style>
