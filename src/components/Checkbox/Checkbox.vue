<script setup lang="ts">
export interface CheckboxProps {
  label?: string
  description?: string
  checked?: boolean
  required?: boolean
  modelValue?: any
  name?: string
}

withDefaults(defineProps<CheckboxProps>(), {
  checked: false,
  required: false,
})

const emit = defineEmits<{
  <T>(e: 'update:modelValue', value: T): void
  (e: 'update:checked', value: boolean): void
}>()

function onChange(event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
  emit('update:checked', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <label class="b-checkbox" :class="{ 'b-checkbox--required': required }">
    <input
      type="checkbox"
      class="b-checkbox__element"
      :value="modelValue"
      :checked="checked"
      :name="name"
      :required="required"
      @change="onChange"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="b-checkbox__icon"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <div class="b-checkbox__content">
      <span class="b-checkbox__label">
        <slot name="label">{{ label }}</slot>
      </span>
      <slot name="description">
        <span
          v-if="description || $slots.description"
          class="b-checkbox__description"
          >{{ description }}</span
        >
      </slot>
    </div>
  </label>
</template>

<style lang="scss">
@import '../../styles/main.scss';

.b-checkbox {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.1;

  &:hover {
    .b-checkbox__element:not(:indeterminate, :disabled) {
      border-color: var(--b-color-primary, $primary);
    }
  }

  &--required {
    .b-checkbox__label:after {
      content: ' *';
      color: var(--b-color-negative, $negative);
    }
  }

  &__icon {
    width: 1em;
    aspect-ratio: 1;

    position: absolute;
    color: var(--b-color-primary-contrast, $primary-contrast);
  }

  &__element {
    position: relative;
    margin: 0;
    appearance: none;
    width: 1.2em;
    aspect-ratio: 1;
    flex-shrink: 0;
    border: 1px solid var(--b-checkbox-border-color, #d0d0d0);
    border-radius: calc(var(--b-border-radius, $border-radius) / 2);
    transition: 100ms var(--b-easing-function, $easing-function);

    &:disabled {
      border-color: var(--b-checkbox-color-disabled, #d0d0d0) !important;
    }

    &:checked {
      border-color: var(--b-color-primary, $primary);
      border-width: 0.6em;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__description {
    opacity: 0.5;
  }
}
</style>
