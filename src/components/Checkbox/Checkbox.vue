<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  sublabel: String,
  modelValue: [Boolean, String, Number]
})
</script>

<template>
  <label class="b-checkbox">
    <input type="checkbox" class="b-checkbox__element" :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)">
    <svg xmlns="http://www.w3.org/2000/svg" class="b-checkbox__icon" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" />
    </svg>
    <div class="b-checkbox__content">
      <span class="b-checkbox__label">{{ label }}</span>
      <span class="b-checkbox__sublabel" v-if="sublabel">{{ sublabel }}</span>
    </div>
  </label>
</template>

<style lang="scss">
.b-checkbox {
  display: flex;
  align-items: start;
  gap: .75rem;
  font-size: 1rem;

  &:hover {
    .b-checkbox__element:not(:indeterminate, :disabled) {
      border-color: var(--b-color-primary, #000000);
    }
  }

  &__icon {
    height: 1em;

    position: absolute;
    color: var(--b-color-primary-contrast, #ffffff);
  }

  &__element {
    position: relative;
    margin: 0;
    appearance: none;
    width: 1.2em;
    aspect-ratio: 1;
    flex-shrink: 0;
    border: 1px solid var(--b-checkbox-border-color, #eaeaea);
    border-radius: var(--b-border-radius, 4px);

    &:disabled {
      border-color: var(--b-checkbox-color-disabled, #d0d0d0);

      &:after {
        background-color: var(--b-checkbox-color-disabled, #d0d0d0);
      }
    }

    &:after {
      content: '';
      background-color: var(--b-color-primary, #000000);
      transition: 75ms var(--b-easing-function, ease-out);
      position: absolute;
      inset: 0;
      transform: scale(0);
      opacity: 0;
    }

    &:checked {
      border-color: var(--b-color-primary, #000000);

      &:after {
        color: var(--b-color-primary-contrast, #ffffff);
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: .2rem;
  }

  &__label {
    font-weight: medium;
  }

  &__sublabel {
    opacity: .5;
  }
}
</style>