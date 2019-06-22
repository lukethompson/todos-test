<template>
  <transition name="fade">
    <div
      v-if="value"
      class="dialog"
      @click="$emit('input', null)"
    >
      <div
        class="dialog__content card"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
  .dialog {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,.2);

    z-index: 10;

    &__content {
      flex: 0 1 600px;
      max-width: 90vw;
      margin: auto 0;
      padding: 2rem;

      background: #fff;

      z-index: 11;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
