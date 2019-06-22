export default {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  deleteTodo (state, todo) {
    state.todos = state.todos.filter(item => item.id !== todo.id)
  },
  setActiveTodo (state, todo) {
    state.active = todo
  },
  setTodos (state, todos) {
    state.todos = todos
  },
  updateTodo (state, todo) {
    state.todos = state.todos.map(item => {
      if (item.id !== todo.id) return item
      return todo
    })
  },
}
