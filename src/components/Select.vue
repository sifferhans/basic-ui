<script setup lang="ts">
export type SelectSize = 'default' | 'small'
export type SelectOption = {
  label: string
  value: string
}
export interface SelectProps {
  items: SelectOption[]
  label?: string
  size?: SelectSize
  required?: boolean
  modelValue?: string
  placeholder?: string
  description?: string
  name?: string
}

withDefaults(defineProps<SelectProps>(), {
  size: 'default',
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label
    class="b-select"
    :class="[`b-select--size-${size}`, { 'b-select--required': required }]"
  >
    <div class="b-select__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="b-select__wrapper">
      <select
        class="b-select__element"
        v-bind="$attrs"
        :value="modelValue"
        :name="name"
        @input="onInput"
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
    </div>
    <div v-if="description || $slots.description" class="b-select__description">
      <slot name="description">{{ description }}</slot>
    </div>
  </label>
</template>

<style lang="scss">
@import '../../styles/main.scss';

.b-select {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;

  &__element {
    width: 100%;
    padding-inline: var(--b-select-padding-inline);
    padding-block: var(--b-select-padding-block);
    border-radius: var(--b-select-border-radius, $border-radius);

    border: 1px solid var(--b-select-border-color, $primary);
    font: inherit;

    &:focus-visible {
      outline: 2px solid var(--b-color-primary, $primary);
      outline-offset: 2px;
    }
  }

  &__description {
    opacity: 0.6;
  }

  &__wrapper {
    position: relative;
  }

  &__icon {
    pointer-events: none;
    width: 1.5rem;
    aspect-ratio: 1;
    position: absolute;
    right: var(--b-select-padding-inline);
    top: 50%;
    translate: 0 -50%;
  }

  /* Required */
  &--required {
    .b-select__label {
      &:after {
        content: '*';
        color: var(--b-color-negative, $negative);
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

    &-small {
      --b-select-padding-block: 0.25rem;
      --b-select-padding-inline: 0.6rem;
    }
  }
}
</style>
