import actions from '@/store/actions'

let url = ''
jest.mock('axios', () => ({
  get: _url => {
    return new Promise(resolve => {
      url = _url
      resolve(true)
    })
  },
}))

describe('addTodo', () => {
  it('increments the result from getters.lastId and calls the addTodo mutation', async () => {
    const commit = jest.fn()
    const getters = {
      lastId: null,
    }

    let todo = {
      title: 'Sample title',
    }

    await actions.addTodo({ commit, getters }, todo)

    expect(commit).toHaveBeenCalledWith('addTodo', { id: 1, ...todo })
  })
})

describe('deleteTodo', () => {
  it('calls the deleteTodo mutation', async () => {
    const commit = jest.fn()

    await actions.deleteTodo({ commit }, {})

    expect(commit).toHaveBeenCalledWith('deleteTodo', {})
  })
})

describe('getTodos', () => {
  it('hits the correct endpoint and calls the setTodos mutation', async () => {
    const commit = jest.fn()

    await actions.getTodos({ commit })

    expect(url).toBe('https://jsonplaceholder.typicode.com/todos')
    expect(commit).toHaveBeenCalledWith('setTodos', undefined)
  })
})

describe('updateTodo', () => {
  it('calls the updateTodo mutation', async () => {
    const commit = jest.fn()

    await actions.updateTodo({ commit }, {})

    expect(commit).toHaveBeenCalledWith('updateTodo', {})
  })
})
