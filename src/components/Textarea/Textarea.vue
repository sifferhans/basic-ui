<script setup lang="ts">
import { ref } from 'vue'

export type TextareaSize = 'default'
export type TextareaResize = 'none' | 'both' | 'horizontal' | 'vertical'
export interface TextareaProps {
  name: string
  resize?: TextareaResize
  modelValue?: string
  autoheight?: boolean
  label?: string
  placeholder?: string
  required?: boolean
  size?: TextareaSize
  rows?: number
  description?: string
  showCount?: boolean
  maxlength?: number
  minlength?: number
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

withDefaults(defineProps<TextareaProps>(), {
  resize: 'vertical',
  autoheight: false,
  required: false,
  size: 'default',
  rows: 5,
  showCount: false,
})

const el = ref<HTMLTextAreaElement>()

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <label :class="[
    `b-textarea b-textarea--size-${size}`,
    ,
    { 'b-textarea--required': required, 'b-textarea--state-disabled': $attrs.disabled },
  ]">
    <div class="b-textarea__header">
      <div v-if="label || $slots.label" class="b-textarea__label">
        <slot name="label">{{ label }}</slot>
      </div>
      <div v-if="showCount" class="b-textarea__count">
        {{ modelValue?.length }} / {{ maxlength }}
      </div>
    </div>
    <textarea class="b-textarea__element" :value="modelValue" @input="handleInput" :placeholder="placeholder"
      :required="required" :rows="rows" :name="name" :maxlength="maxlength" :minlength="minlength" v-bind="$attrs" />
    <div v-if="description || $slots.description" class="b-textarea__description">
      <slot name="description">{{ description }}</slot>
    </div>
  </label>
</template>

<style lang="scss">
.b-textarea {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;

  &__element {
    resize: v-bind(resize);
    padding-inline: var(--b-textarea-padding-inline);
    padding-block: var(--b-textarea-padding-block);
    border-radius: var(--b-textarea-border-radius, 0.5rem);

    border: 1px solid var(--b-textarea-border-color, #000);
    font: inherit;

    &:focus-visible {
      outline: 2px solid var(--b-color-primary, black);
      outline-offset: 2px;
    }
  }

  &__description {
    opacity: 0.6;
  }

  &__count {
    opacity: 0.5;
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  /* Required */
  &--required {
    .b-textarea__label {
      &:after {
        content: '*';
        color: var(--b-color-negative, #af2929);
        margin-left: 0.25rem;
      }
    }
  }

  /** States */
  &--state {
    &-disabled {
      .b-textarea__element {
        cursor: not-allowed;
      }

      opacity: 0.5;
    }
  }

  /* Sizes */
  &--size {
    &-default {
      --b-textarea-padding-block: 0.6rem;
      --b-textarea-padding-inline: 1rem;
    }
  }
}
</style>
