<script setup lang="ts">
export type InputSize = 'default' | 'small'
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'

export interface InputProps {
  label?: string
  placeholder?: string
  type?: InputType
  required?: boolean
  size?: InputSize
  modelValue?: string | number
  description?: string
  name?: string
  loading?: boolean
}

withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'default',
  required: false,
  loading: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function onInput(event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label class="b-input"
    :class="[`b-input--size-${size}`, { 'b-input--required': required, 'b-input--state-loading': loading, 'b-input--state-disabled': $attrs.disabled }]">
    <div class="b-input__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <input class="b-input__element" :value="modelValue" :type="type" :name="name" :required="required"
      :placeholder="placeholder" @input="onInput" v-bind="$attrs" />
    <div v-if="description || $slots.description" class="b-input__description">
      <slot name="description">{{ description }}</slot>
    </div>
  </label>
</template>

<style lang="scss">
.b-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;

  &__element {
    position: relative;
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

  &__description {
    opacity: 0.6;
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

  /* States */
  &--state {
    &-loading {
      cursor: wait;

      .b-input__element::after {
        content: '';
        height: 0.75rem;
        aspect-ratio: 1;
        border-radius: 20rem;

        position: absolute;
        right: var(--b-input-padding-inline);
        top: 50%;
        transform: translateY(-50%);

        border: 2px solid transparent;
        border-right-color: currentColor;
        border-top-color: currentColor;

        animation: spin 1s var(--b-easing-function, ease) infinite;
      }
    }

    &-disabled {
      opacity: 0.5;
    }
  }

  /* Sizes */
  &--size {
    &-default {
      --b-input-padding-block: 0.6rem;
      --b-input-padding-inline: 1rem;
    }

    &-small {
      --b-input-padding-block: 0.25rem;
      --b-input-padding-inline: 0.6rem;
    }
  }
}

@keyframes spin {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>
