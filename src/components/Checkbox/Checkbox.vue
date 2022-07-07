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

  &__element {
    position: relative;
    margin: 0;
    appearance: none;
    width: 1.2em;
    aspect-ratio: 1;
    border: 1px solid var(--b-checkbox-border-color, #eaeaea);
    border-radius: var(--b-border-radius, 4px);

    &:after {
      transition: 150ms var(--b-easing-function, ease-out);
    }

    &:checked {
      border-color: var(--b-color-primary, #000000);

      &:after {
        content: '✓';
        color: var(--b-color-primary-contrast, #ffffff);
        position: absolute;
        inset: 0;
        background-color: var(--b-color-primary, #000000);
      }
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
    opacity: .5;
  }
}
</style>