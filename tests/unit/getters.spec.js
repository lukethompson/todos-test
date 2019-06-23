import getters from '@/store/getters'
import initialState from '@/store/state'

const todos = [
  {
    'userId': 1,
    'id': 1,
    'title': 'delectus aut autem',
    'completed': false,
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'quis ut nam facilis et officia qui',
    'completed': false,
  },
  {
    'userId': 1,
    'id': 3,
    'title': 'fugiat veniam minus',
    'completed': false,
  },
  {
    'userId': 1,
    'id': 4,
    'title': 'et porro tempora',
    'completed': true,
  },
]

const state = { ...initialState, todos }

describe('completedTodos', () => {
  it('returns completed todos in reverse order', () => {
    const actual = getters.completedTodos(state)

    expect(actual).toEqual([ todos[3] ])
  })
})

describe('remainingTodos', () => {
  it('returns not completed todos in reverse order', () => {
    const actual = getters.remainingTodos(state)

    expect(actual).toEqual([ todos[2], todos[1], todos[0] ])
  })
})

describe('hasActiveTodo', () => {
  it('returns false if there is no active todo in the state', () => {
    const actual = getters.hasActiveTodo(state)

    expect(actual).toBe(false)
  })

  it('returns true if there is an active todo in the state', () => {
    const testState = { ...state }
    testState.active = todos[0]

    const actual = getters.hasActiveTodo(testState)

    expect(actual).toBe(true)
  })
})

describe('hasTodos', () => {
  it('returns false if there are no todos in the state', () => {
    const testState = { ...initialState }

    const actual = getters.hasTodos(testState)

    expect(actual).toBe(false)
  })

  it('returns true if there are todos in the state', () => {
    const actual = getters.hasTodos(state)

    expect(actual).toBe(true)
  })
})

describe('lastId', () => {
  it('returns the id of the last todo in the state', () => {
    const actual = getters.lastId(state)

    expect(actual).toEqual(4)
  })

  it('returns 0 if there are no todos in the state', () => {
    const testState = { ...initialState }

    const actual = getters.lastId(testState)

    expect(actual).toEqual(0)
  })
})
