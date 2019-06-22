<template>
  <button
    class="btn"
    :type="type"
    :class="btnColorClass"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'InputButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    btnColorClass () {
      return `btn--${this.color}`
    },
  },
}
</script>

<style lang="scss" scoped>
  .btn {
    padding: 1rem 2rem;

    background-color: $color-grey;
    border: none;
    border-radius: 2px;

    color: $color-font;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;

    box-shadow: 0 1px 4px rgba(0,0,0,.2);

    cursor: pointer;

    transition: transform .3s;

    &:active,
    &:focus,
    &:visited {
      outline: 0;
    }

    &:hover {
      box-shadow: 0 2px 6px rgba(0,0,0,.2);
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: 0 1px 4px rgba(0,0,0,.2);
      transform: translateY(0);
    }

    &--primary {
      background-color: $color-primary;
      color: #fff;
    }

    &--secondary {
      background-color: $color-secondary;
      color: #fff;
    }

    &--tertiary {
      background-color: $color-tertiary;
      color: #fff;
    }

    &--warning {
      background-color: $color-warning;
      color: #fff;
    }
  }
</style>
