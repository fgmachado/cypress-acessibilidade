/// <reference types="cypress" />

context('Página Features', () => {
  it('Acessibilidade da página Features', () => {
    cy.viewport('macbook-13')
    cy.a11y('/features')
  })
})
  