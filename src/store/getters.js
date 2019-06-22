export default {
  completedTodos (state) {
    return state.todos.filter(todo => todo.completed).reverse()
  },
  remainingTodos (state) {
    return state.todos.filter(todo => !todo.completed).reverse()
  },
  hasActiveTodo (state) {
    return state.active !== null
  },
  hasTodos (state) {
    return state.todos.length !== 0
  },
  lastId (state) {
    const lastTodo = state.todos[state.todos.length - 1]
    return lastTodo
      ? lastTodo.id
      : 0
  },
}
