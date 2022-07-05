<script setup>
defineProps({
  label: String,
  size: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default'].includes(value)
    },
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <label
    class="b-input"
    :class="[`b-input--size-${size}`, { 'b-input--required': required }]"
  >
    <div class="b-input__label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </div>
    <input class="b-input__element" v-bind="$attrs" />
  </label>
</template>

<style lang="scss">
.b-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &__element {
    padding-inline: var(--b-input-padding-inline);
    padding-block: var(--b-input-padding-block);
    border-radius: var(--b-input-border-radius, 4px);

    border: 1px solid var(--b-input-border-color, #000);
    font: inherit;
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
      --b-input-padding-block: 0.75rem;
      --b-input-padding-inline: 1rem;
    }
  }
}
</style>
