<script setup>
const props = defineProps({
  label: String,
  tag: {
    type: [String, Object],
    default: 'button'
  },
  size: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'small'].includes(value)
    }
  },
  theme: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'primary', 'secondary', 'tertiary', 'positive', 'negative'].includes(value)
    }
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <component :is="tag" class="b-button" :class="[`b-button--size-${size} b-button--theme-${theme}`]"
    @click="emit('click')">
    <slot name="icon-left" />
    <slot name="default">{{ label }}</slot>
    <slot name="icon-right" />
  </component>
</template>

<style lang="scss">
.b-button {
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  padding-inline: var(--b-button-padding-inline);
  padding-block: var(--b-button-padding-block);
  border-radius: var(--b-button-border-radius, 4px);

  display: flex;
  align-items: center;
  gap: var(--b-button-gap, .5rem);

  /* Sizes */
  &--size {
    &-default {
      --b-button-padding-block: .6rem;
      --b-button-padding-inline: 1rem;
    }

    &-small {
      --b-button-padding-block: .35rem;
      --b-button-padding-inline: .7rem;
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
</style>