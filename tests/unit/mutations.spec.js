import mutations from '@/store/mutations'
import initialState from '@/store/state'

const sampleTodo = {
  userId: 1,
  id: 1,
  title: 'Sample todo title',
  completed: false,
}

describe('addTodo', () => {
  it('adds a todo to the state', () => {
    const state = { ...initialState }

    mutations.addTodo(state, sampleTodo)

    expect(state.todos).toContainEqual(sampleTodo)
  })
})

describe('deleteTodo', () => {
  it('deletes a todo from the state', () => {
    const state = { ...initialState }
    state.todos = [ sampleTodo ]

    mutations.deleteTodo(state, sampleTodo)

    expect(state.todos).not.toContainEqual(sampleTodo)
  })
})

describe('setActiveTodo', () => {
  it('sets the active todo in the state', () => {
    const state = { ...initialState }

    mutations.setActiveTodo(state, sampleTodo)

    expect(state.active).toBe(sampleTodo)
  })
})

describe('setTodos', () => {
  it('sets todos in the state', () => {
    const state = { ...initialState }
    const todos = [ sampleTodo ]

    mutations.setTodos(state, todos)

    expect(state.todos).toEqual(todos)
  })
})

describe('updateTodo', () => {
  it('updates a todo in the state', () => {
    const state = { ...initialState }
    state.todos = [ sampleTodo ]

    const updatedTodo = { ...sampleTodo, title: 'Change title' }

    mutations.updateTodo(state, updatedTodo)

    expect(state.todos).toContainEqual(updatedTodo)
    expect(state.todos).not.toContainEqual(sampleTodo)
  })
})
