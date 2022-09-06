<script setup lang="ts">
export type ButtonSize = 'small' | 'default'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonTheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'

export interface ButtonProps {
  label?: string
  tag?: string
  size?: ButtonSize
  theme?: ButtonTheme
  loading?: boolean
  disabled?: boolean
  type?: ButtonType
}

withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  size: 'default',
  theme: 'default',
  loading: false,
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  click: (event: MouseEvent) => void
}>()
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
  border-radius: var(--b-border-radius, 0.5rem);

  display: flex;
  align-items: center;
  gap: var(--b-button-gap, 0.5rem);

  &:focus-visible {
    outline: 2px solid var(--b-color-primary, black);
    outline-offset: 2px;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:where(:disabled) {
    cursor: not-allowed;
  }

  &__content {
    transition: 150ms var(--b-easing-function, ease);
  }

  /* Sizes */
  &--size {
    &-default {
      --b-button-padding-block: 0.6rem;
      --b-button-padding-inline: 1rem;
    }

    &-small {
      --b-button-padding-block: 0.25rem;
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

        animation: spin 1s var(--b-easing-function, ease) infinite;
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
      background-color: transparent;
      color: var(--b-color-primary, black);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-color: var(--b-color-primary, black);
        opacity: 0.06;
        z-index: -1;
      }

      &:not(:disabled):where(:hover, :focus-visible) {
        &::before {
          opacity: 0.1;
        }
      }

      &:not(:disabled):active {
        &::before {
          opacity: 0.12;
        }
      }
    }

    &-primary {
      background-color: var(--b-color-primary, black);
      color: var(--b-color-primary-contrast, white);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-color: white;
        opacity: 0;
        z-index: 1;
      }

      &:not(:disabled):where(:hover, :focus-visible) {
        &::before {
          opacity: 0.1;
        }
      }

      &:not(:disabled):active {
        &::before {
          opacity: 0.15;
        }
      }
    }

    &-secondary {
      background-color: transparent;
      color: var(--b-color-primary, black);
      border: 1px solid var(--b-color-primary, black);

      &:not(:disabled):active {
        background-color: transparent;
        border-color: var(--b-color-primary--active, black);
      }
    }

    &-tertiary {
      background-color: transparent;
      color: var(--b-color-primary, black);
      border: 1px solid transparent;

      &:not(:disabled):where(:hover, :focus-visible) {
        border-color: var(--b-color-primary, black);
      }
    }

    &-link {
      padding: 0;
      color: var(--b-color-primary, black);

      &:not(:disabled):where(:hover, :focus-visible) {
        text-decoration: underline;
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
