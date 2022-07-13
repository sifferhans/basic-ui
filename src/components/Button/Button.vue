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
  disabled: {
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
      {
        'b-button--state-loading': loading,
        'b-button--state-disabled': disabled,
      },
    ]"
    @click="emit('click')"
    :disabled="loading || disabled"
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
  position: relative;
  font-size: 1rem;

  padding-inline: var(--b-button-padding-inline);
  padding-block: var(--b-button-padding-block);
  border-radius: var(--b-border-radius, var(--_b-border-radius));

  display: flex;
  align-items: center;
  gap: var(--b-button-gap, 0.5rem);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:where(:disabled) {
    cursor: not-allowed;
  }

  &__content {
    transition: 150ms var(--b-easing-function, var(--_b-easing-function));
  }

  /* Sizes */
  &--size {
    &-default {
      --b-button-padding-block: 0.75rem;
      --b-button-padding-inline: 1rem;
    }

    &-small {
      --b-button-padding-block: 0.4rem;
      --b-button-padding-inline: 0.6rem;
    }
  }

  /* States */
  &--state {
    &-loading {
      cursor: wait;

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

        animation: spin 1s var(--b-easing-function, var(--_b-easing-function))
          infinite;
      }

      .b-button__content {
        opacity: 0;
        transform: translateY(0.2rem);
      }
    }

    &-disabled {
      opacity: 0.5;
    }
  }

  /* Themes */
  &--theme {
    &-default {
      background-color: var(--b-color-default, #f0f0f0);
      color: var(--b-color-default-contrast, #000000);

      &:not(:disabled):hover {
        background-color: var(--b-color-default--hover, #eaeaea);
      }

      &:not(:disabled):active {
        background-color: var(--b-color-default--active, #e0e0e0);
      }
    }

    &-primary {
      background-color: var(--b-color-primary, var(--_b-color-primary));
      color: var(--b-color-primary-contrast, var(--_b-color-primary-contrast));

      &:not(:disabled):hover {
        background-color: var(
          --b-color-primary--hover,
          var(--_b-color-primary--hover)
        );
      }

      &:not(:disabled):active {
        background-color: var(
          --b-color-primary--active,
          var(--_b-color-primary--active)
        );
      }
    }

    &-secondary {
      background-color: transparent;
      color: var(--b-color-secondary, var(--_b-color-primary));
      border: 1px solid var(--b-color-secondary, var(--_b-color-primary));

      &:not(:disabled):hover {
        background-color: transparent;
        border-color: var(
          --b-color-secondary--hover,
          var(--_b-color-primary--hover)
        );
      }

      &:not(:disabled):active {
        background-color: transparent;
        border-color: var(
          --b-color-secondary--active,
          var(--_b-color-primary--active)
        );
      }
    }

    &-tertiary {
      background-color: var(--b-color-tertiary, var(--_b-color-tertiary));
      color: var(
        --b-color-tertiary-contrast,
        var(--_b-color-tertiary-contrast)
      );

      &:not(:disabled):hover {
        background-color: var(
          --b-color-tertiary--hover,
          var(--_b-color-tertiary--hover)
        );
      }

      &:not(:disabled):active {
        background-color: var(
          --b-color-tertiary--active,
          var(--_b-color-tertiary--active)
        );
      }
    }

    &-positive {
      background-color: var(--b-color-positive, var(--_b-color-positive));
      color: var(
        --b-color-positive-contrast,
        var(--_b-color-positive-contrast)
      );

      &:not(:disabled):hover {
        background-color: var(
          --b-color-positive--hover,
          var(--_b-color-positive--hover)
        );
      }

      &:not(:disabled):active {
        background-color: var(
          --b-color-positive--active,
          var(--_b-color-positive--active)
        );
      }
    }

    &-negative {
      background-color: var(--b-color-negative, var(--_b-color-negative));
      color: var(
        --b-color-negative-contrast,
        var(--_b-color-negative-contrast)
      );

      &:not(:disabled):hover {
        background-color: var(
          --b-color-negative--hover,
          var(--_b-color-negative--hover)
        );
      }

      &:not(:disabled):active {
        background-color: var(
          --b-color-negative--active,
          var(--_b-color-negative--active)
        );
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
