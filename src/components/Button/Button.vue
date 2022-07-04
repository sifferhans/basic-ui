<script setup>
defineProps({
  label: String,
  tag: {
    type: [String, Object],
    default: 'button',
  },
  size: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'small'].includes(value)
    },
  },
  theme: {
    type: String,
    default: 'default',
    validator(value) {
      return [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'positive',
        'negative',
      ].includes(value)
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <component
    v-bind="$attrs"
    :is="tag"
    class="b-button"
    :class="[
      `b-button--size-${size} b-button--theme-${theme}`,
      { 'b-button--state-loading': loading },
    ]"
    @click="emit('click')"
    :disabled="loading"
  >
    <div class="b-button__content">
      <slot name="icon-left" />
      <slot name="default">{{ label }}</slot>
      <slot name="icon-right" />
    </div>
  </component>
</template>

<style lang="scss">
.b-button {
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  position: relative;

  padding-inline: var(--b-button-padding-inline);
  padding-block: var(--b-button-padding-block);
  border-radius: var(--b-button-border-radius, 4px);

  display: flex;
  align-items: center;
  gap: var(--b-button-gap, 0.5rem);

  &__content {
    transition: 150ms var(--b-easing-function, ease-out);
  }

  /* Sizes */
  &--size {
    &-default {
      --b-button-padding-block: 0.6rem;
      --b-button-padding-inline: 1rem;
    }

    &-small {
      --b-button-padding-block: 0.35rem;
      --b-button-padding-inline: 0.7rem;
    }
  }

  /* States */
  &--state {
    &-loading {
      &:after {
        content: '';
        height: 0.75rem;
        aspect-ratio: 1;
        border-radius: 20rem;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        border: 2px solid transparent;
        border-right-color: currentColor;
        border-top-color: currentColor;

        animation: spin 1s var(--b-easing-function, linear) infinite;
      }

      .b-button__content {
        opacity: 0;
        transform: translateY(1rem);
      }
    }
  }

  /* Themes */
  &--theme {
    &-default {
      background-color: var(--b-color-default, #f0f0f0);
      color: var(--b-color-default-contrast, #000000);

      &:hover {
        background-color: var(--b-color-default--hover, #eaeaea);
      }

      &:active {
        background-color: var(--b-color-default--active, #e0e0e0);
      }
    }

    &-primary {
      background-color: var(--b-color-primary, #000000);
      color: var(--b-color-primary-contrast, #ffffff);

      &:hover {
        background-color: var(--b-color-default--hover, #202020);
      }

      &:active {
        background-color: var(--b-color-default--active, #000000);
      }
    }

    &-secondary {
      background-color: transparent;
      color: var(--b-color-secondary-contrast, #000000);
      border: 1px solid var(--b-color-secondary, #000000);

      &:hover {
        background-color: transparent;
        border-color: var(--b-color-secondary--hover, #202020);
      }

      &:active {
        background-color: transparent;
        border-color: var(--b-color-secondary--active, #000000);
      }
    }

    &-tertiary {
      background-color: var(--b-color-tertiary, transparent);
      color: var(--b-color-tertiary-contrast, #000000);

      &:hover {
        background-color: var(--b-color-tertiary--hover, #f0f0f0);
      }

      &:active {
        background-color: var(--b-color-tertiary--active, #e0e0e0);
      }
    }

    &-positive {
      background-color: var(--b-color-positive, #29af46);
      color: var(--b-color-positive-contrast, #ffffff);

      &:hover {
        background-color: var(--b-color-positive--hover, #3dc45a);
      }

      &:active {
        background-color: var(--b-color-positive--active, #179c34);
      }
    }

    &-negative {
      background-color: var(--b-color-positive, #af2929);
      color: var(--b-color-positive-contrast, #ffffff);

      &:hover {
        background-color: var(--b-color-positive--hover, #c43d3d);
      }

      &:active {
        background-color: var(--b-color-positive--active, #9c1717);
      }
    }
  }
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
