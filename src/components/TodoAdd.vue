<template>
  <form
    class="add-todo"
    @submit.prevent="onNewTodoSubmit"
  >
    <InputText
      v-model="newTodoTitle"
      :placeholder="'Add a new todo'"
    />
    <transition name="slide">
      <div
        v-if="newTodoTitle !== ''"
        class="add-todo__btn-container"
      >
        <InputButton :type="'submit'">
          Save
        </InputButton>
      </div>
    </transition>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

import InputButton from './InputButton'
import InputText from './InputText'

export default {
  name: 'TodoAdd',
  components: {
    InputButton,
    InputText,
  },
  data () {
    return {
      newTodoTitle: '',
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
    ]),
    onNewTodoSubmit () {
      this.newTodoTitle = this.newTodoTitle.trim()
      if (this.newTodoTitle === '') return

      const newTodo = {
        title: this.newTodoTitle,
        completed: false,
      }

      this.addTodo(newTodo)
        .then(() => {
          this.newTodoTitle = ''
        })
    },
  },
}
</script>

<style lang="scss" scoped>
  .add-todo {
    padding: 2rem;

    &__btn-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 4rem;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  .slide-enter-to, .slide-leave {
    max-height: 4rem;
    overflow: hidden;
    opacity: 1;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
  }
</style>
