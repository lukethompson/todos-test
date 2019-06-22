<template>
  <div class="input-text">
    <input
      type="text"
      class="input-text__input"
      :placeholder="placeholder"
      :value="localValue"
      @input="onInput"
    >
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      localValue: '',
    }
  },
  watch: {
    value: {
      handler: function (value) {
        this.localValue = value
      },
      immediate: true,
    },
  },
  methods: {
    onInput (e) {
      this.localValue = e.target.value
      this.$emit('input', this.localValue)
    },
  },
}
</script>

<style lang="scss" scoped>
  .input-text {
    &__input {
      width: 100%;
      height: 6rem;
      margin-bottom: 2rem;
      padding: 1rem 2rem;

      border: 0;
      border-bottom: 2px solid $color-grey;

      color: $color-font;
      font-size: 2.5rem;

      transition: border .5s;

      &:active,
      &:focus {
        border-bottom-color: $color-primary;
        outline: 0;
      }
    }
  }
</style>
