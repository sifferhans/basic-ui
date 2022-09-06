<script setup lang="ts">
export type SelectSize = 'default'
export type SelectOption = { label: string; value: string }
export interface SelectProps {
  items: SelectOption[]
  label?: string
  size?: SelectSize
  required?: boolean
  modelValue?: string
  placeholder?: string
}

withDefaults(defineProps<SelectProps>(), {
  size: 'default',
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label
    class="b-select"
    :class="[`b-select--size-${size}`, { 'b-select--required': required }]"
  >
    <div class="b-select__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <select
      class="b-select__element"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue')"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="(item, i) in items" :key="i" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <svg
      class="b-select__icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </svg>
  </label>
</template>

<style lang="scss">
.b-select {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;
  position: relative;

  &__element {
    padding-inline: var(--b-select-padding-inline);
    padding-block: var(--b-select-padding-block);
    border-radius: var(--b-select-border-radius, 0.5rem);

    border: 1px solid var(--b-select-border-color, #000);
    font: inherit;

    &:focus-visible {
      outline: 2px solid var(--b-color-primary, black);
      outline-offset: 2px;
    }
  }

  &__icon {
    pointer-events: none;
    width: 1.5rem;
    aspect-ratio: 1;
    position: absolute;
    right: var(--b-select-padding-inline);
    bottom: var(--b-select-padding-block);
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
      --b-select-padding-block: 0.6rem;
      --b-select-padding-inline: 1rem;
    }
  }
}
</style>
