<template>
  <div class="input-checkbox">
    <div class="input-checkbox__checkbox-container">
      <input
        :id="id"
        type="checkbox"
        class="input-checkbox__checkbox"
        :name="name"
        :checked="value"
        @change="onCheckboxChange"
      >
      <div
        class="input-checkbox__control"
        :class="{ 'input-checkbox__control--checked':checked }"
      />
    </div>
    <label
      v-if="label"
      class="input-checkbox__label"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      checked: null,
    }
  },
  watch: {
    value: {
      handler: function (value) {
        this.checked = value
      },
      immediate: true,
    },
  },
  methods: {
    onCheckboxChange () {
      this.checked = !this.value
      this.$emit('input', this.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
  .input-checkbox {
    display: flex;
    align-items: center;

    &__checkbox-container {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 2rem;
    }

    &__checkbox {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;

      opacity: 0;

      cursor: pointer;

      z-index: 1;
    }

    &__control {
      width: 2.5rem;
      height: 2.5rem;

      background-color: $color-tertiary;
      border: .4rem solid $color-tertiary-dark;
      border-radius: 5px;

      &--checked:after {
        content: '';
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;

        position: absolute;
        top: .5rem;
        left: .5rem;

        background-image: url(../assets/tick.svg);
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

    &__label {
      font-size: 1.6rem;

      cursor: pointer;
    }
  }
</style>
