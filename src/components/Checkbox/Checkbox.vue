<script setup lang="ts">
export interface CheckboxProps {
  label?: string
  sublabel?: string
  checked?: boolean
  required?: boolean
  modelValue?: boolean | string | number
}

withDefaults(defineProps<CheckboxProps>(), {
  checked: false,
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <label class="b-checkbox">
    <input
      type="checkbox"
      class="b-checkbox__element"
      :value="modelValue"
      :checked="checked"
      @change="emit('update:modelValue', $event.target.value)"
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
      <span class="b-checkbox__label">{{ label }}</span>
      <span v-if="sublabel" class="b-checkbox__sublabel">{{ sublabel }}</span>
    </div>
  </label>
</template>

<style lang="scss">
.b-checkbox {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    .b-checkbox__element:not(:indeterminate, :disabled) {
      border-color: var(--b-color-primary, black);
    }
  }

  &__icon {
    height: 1.2em;
    width: 1em;

    position: absolute;
    color: var(--b-color-primary-contrast, #ffffff);
  }

  &__element {
    position: relative;
    margin: 0.15rem 0;
    appearance: none;
    width: 1.2em;
    aspect-ratio: 1;
    flex-shrink: 0;
    border: 1px solid var(--b-checkbox-border-color, #eaeaea);
    border-radius: calc(var(--b-border-radius, 0.5rem) / 2);
    transition: 100ms var(--b-easing-function, ease);

    &:disabled {
      border-color: var(--b-checkbox-color-disabled, #d0d0d0) !important;
    }

    &:checked {
      border-color: var(--b-color-primary, black);
      border-width: 0.6em;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-weight: medium;
  }

  &__sublabel {
    opacity: 0.5;
    line-height: 1.1;
  }
}
</style>
