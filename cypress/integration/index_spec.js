context('Actions', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  // https://on.cypress.io/interacting-with-elements

  it('button is on the screen', () => {
    cy.contains('Button')
  })

  it('can click the button', () => {
    cy.get("Button").click()
  })

});
