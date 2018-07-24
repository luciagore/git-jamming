context('Actions', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  // https://on.cypress.io/interacting-with-elements

  it('button is on the screen', () => {
    cy.get('input[name=username]')
       .type('Rob')

    cy.get('select[name=instrument]')
       .select('Piano')

    cy.get('#begin_jamming').submit()

     cy.url().should('eq', 'jamming.html')
     cy.contains('Welcome, Rob')
  })




});
