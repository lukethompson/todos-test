describe('CRUDing todos', () => {
  it('can add a new todo', () => {
    cy.visit('/')
    cy.get('.add-todo input[type="text"]').type('Sample todo')
    cy.get('.add-todo button[type="submit"]').click()
    cy.get('.todos-view__content .todo-item__title').contains('Sample todo')
  })

  it('can mark a todo as complete and remove the todo from curernt todos', () => {
    cy.get('.todos-view__content .todo-item .input-checkbox').click()
    cy.wait(1000).get('.todos-view__content .todo-item').should('not.to.exist')
  })

  it('can nagivate to completed todos and show the completed todo', () => {
    cy.get('.tab-item:not(.tab-item--active)').click()
    cy.get('.todos-view__content .todo-item__title').contains('Sample todo')
  })

  it('can edit the title of a todo', () => {
    cy.get('.todos-view__content .todo-item__title').click()
    cy.get('.edit-todo input[type="text"]').type(' edited')
    cy.get('.edit-todo button[type="submit"]').click()
    cy.get('.todos-view__content .todo-item__title').contains('Sample todo edited')
  })

  it('can delete a todo', () => {
    cy.get('.todos-view__content .todo-item__title').click()
    cy.get('.edit-todo .btn--warning').click()
    cy.get('.todos-view__content').should('not.to.exist')
  })
})
