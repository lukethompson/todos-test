<template>
  <button
    class="tab-item"
    :class="{ 'tab-item--active': isActive }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  .tab-item {
    height: 2.5rem;
    margin: 0 1rem;

    background: none;
    border: 0;

    font-size: 1.6rem;

    cursor: pointer;

    transition: border .5s;

    &:active,
    &:focus {
      outline: 0;
    }

    &:hover:not(&--active) {
      border-bottom: 2px solid $color-secondary;
    }

    &--active {
      border-bottom: 2px solid $color-primary;
    }
  }
</style>
