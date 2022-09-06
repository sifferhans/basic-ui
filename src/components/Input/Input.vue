<script setup lang="ts">
export type InputSize = 'default'
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'

export interface InputProps {
  label?: string
  placeholder?: string
  type?: InputType
  required?: boolean
  size?: InputSize
  modelValue?: string | number
}

withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'default',
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<template>
  <label
    class="b-input"
    :class="[`b-input--size-${size}`, { 'b-input--required': required }]"
  >
    <div class="b-input__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <input
      class="b-input__element"
      :value="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </label>
</template>

<style lang="scss">
.b-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;

  &__element {
    padding-inline: var(--b-input-padding-inline);
    padding-block: var(--b-input-padding-block);
    border-radius: var(--b-input-border-radius, 0.5rem);

    border: 1px solid var(--b-input-border-color, #000);
    font: inherit;

    &:focus-visible {
      outline: 2px solid var(--b-color-primary, black);
      outline-offset: 2px;
    }
  }

  /* Required */
  &--required {
    .b-input__label {
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
      --b-input-padding-block: 0.6rem;
      --b-input-padding-inline: 1rem;
    }
  }
}
</style>
