import axios from 'axios'

export default {
  addTodo ({ commit, getters }, todo) {
    return new Promise(resolve => {
      // Setting the id would usually be handled on db insert
      let id = getters.lastId
      id++
      const newTodo = {
        id,
        ...todo,
      }
      // axios.post
      commit('addTodo', newTodo)
      resolve()
    })
  },
  deleteTodo ({ commit }, todo) {
    return new Promise(resolve => {
      // axios.delete
      commit('deleteTodo', todo)
      resolve()
    })
  },
  getTodos ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          commit('setTodos', res.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  },
  updateTodo ({ commit }, todo) {
    return new Promise(resolve => {
      // axios.post
      commit('updateTodo', todo)
      resolve()
    })
  },
}
