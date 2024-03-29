<script setup lang="ts">
/** Type definitions */
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

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  size: 'default',
  theme: 'default',
  loading: false,
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function onClick(event: MouseEvent): void {
  if (props.disabled) return
  emit('click', event)
}
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
    @click="onClick"
    :disabled="loading || disabled"
    :type="type"
  >
    <div class="b-button__content">
      <slot name="icon-left" />
      <slot name="default">{{ label }}</slot>
      <slot name="icon-right" />
    </div>
  </component>
</template>

<style lang="scss">
@import '../styles/main.scss';

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
    outline: 2px solid var(--b-color-primary, $primary);
    outline-offset: 2px;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:where(:disabled) {
    cursor: not-allowed;
  }

  &__content {
    transition: 150ms var(--b-easing-function, $easing-function);
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
        translate: -50% -50%;

        border: 2px solid transparent;
        border-right-color: currentColor;
        border-top-color: currentColor;

        animation: spin 1s linear infinite;
      }

      .b-button__content {
        opacity: 0;
        translate: 0 0.15rem;
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
      color: var(--b-color-primary, $primary);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-color: var(--b-color-primary, $primary);
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
      background-color: var(--b-color-primary, $primary);
      color: var(--b-color-primary-contrast, $primary-contrast);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-color: $primary-contrast;
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
      color: var(--b-color-primary, $primary);
      border: 1px solid var(--b-color-primary, $primary);

      &:not(:disabled):active {
        background-color: transparent;
        border-color: var(--b-color-primary--active, $primary);
      }
    }

    &-tertiary {
      background-color: transparent;
      color: var(--b-color-primary, $primary);
      border: 1px solid transparent;

      &:not(:disabled):where(:hover, :focus-visible) {
        border-color: var(--b-color-primary, $primary);
      }
    }

    &-link {
      padding: 0;
      color: var(--b-color-primary, $primary);

      &:not(:disabled):where(:hover, :focus-visible) {
        text-decoration: underline;
      }
    }
  }
}
</style>
