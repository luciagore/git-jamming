//notes_Spec.js

context('Notes', () => {
  beforeEach(() => {
    cy.visit('jamming.html')
  })

  // https://on.cypress.io/interacting-with-elements

  it('12 buttons on screen', () => {

     cy.contains('Button 1')
     cy.contains('Button 2')
     cy.contains('Button 3')
     cy.contains('Button 4')
     cy.contains('Button 5')
     cy.contains('Button 6')
     cy.contains('Button 7')
     cy.contains('Button 8')
     cy.contains('Button 9')
     cy.contains('Button 10')
     cy.contains('Button 11')
     cy.contains('Button 12')


  })




});