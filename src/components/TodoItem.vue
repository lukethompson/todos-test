<template>
  <div class="todo-item">
    <InputCheckbox
      :id="`checkbox-${todo.id}`"
      v-model="todoCompleted"
      :name="`checkbox-${todo.id}`"
    />
    <div
      class="todo-item__title"
      @click="onTodoClick"
    >
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import InputCheckbox from './InputCheckbox'

export default {
  name: 'TodoItem',
  components: {
    InputCheckbox,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    todoCompleted: {
      get () {
        return this.todo.completed
      },
      set (value) {
        let updatedTodo = { ...this.todo, completed: value }
        setTimeout(() => this.updateTodo(updatedTodo), 500)
      },
    },
  },
  methods: {
    ...mapActions([
      'updateTodo',
    ]),
    ...mapMutations([
      'setActiveTodo',
    ]),
    onTodoClick () {
      this.setActiveTodo(this.todo)
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;

  padding: 2rem;

  &__title {
    flex: 1;
    font-size: 2rem;

    cursor: pointer;
  }
}
</style>
