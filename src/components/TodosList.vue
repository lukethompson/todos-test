<template>
  <div class="todo-list">
    <template v-for="todo in todos">
      <TodoItem
        :key="todo.id"
        :todo="todo"
      />
    </template>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodosList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
}
</script>
