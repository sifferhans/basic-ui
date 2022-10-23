<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';

export interface SwitchProps {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium'
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: 'medium'
})

const emit = defineEmits<{
  (e: 'input', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
}>()

function toggleValue() {
  emit('input', !props.modelValue)
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button :class="['b-switch', `b-switch--size-${size}`, { 'b-switch--on': modelValue }]" @click="toggleValue">
    <div class="b-switch__toggle"></div>
  </button>
</template>

<style lang="scss">
@import '../../styles/main.scss';

.b-switch {
  border: 1px solid var(--b-color-primary, $primary);
  border-radius: 20rem;
  padding: .2rem;
  width: calc(var(--b-switch-size) * 2.5);

  &__toggle {
    background-color: #d0d0d0;
    width: var(--b-switch-size);
    aspect-ratio: 1;
    border-radius: inherit;
    transition: 100ms var(--b-easing-function, ease);
  }

  &--on {
    border-color: var(--b-color-primary, $primary);

    .b-switch__toggle {
      background-color: var(--b-color-primary, $primary);
      transform: translateX(100%);
    }
  }

  &--size {
    &-small {
      --b-switch-size: 1rem;
    }

    &-medium {
      --b-switch-size: 1.2rem;
    }
  }
}
</style>