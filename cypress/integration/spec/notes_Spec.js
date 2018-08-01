//notes_Spec.js

context('Notes', () => {
  beforeEach(() => {
    cy.visit('azlan.html')
  })

  // https://on.cypress.io/interacting-with-elements

  it('has a keyboard', () => {

    cy.get('input[name=username]')
       .type('Rob')

    cy.get('select[name=instrument]')
       .select('Piano')
   	cy.get('select[name=jSession]')
   	.select('Create a new session')

   	cy.get('input[name=new_session]')
       .type('newest session')

    cy.get('#begin_jamming').submit();

     cy.contains('kbd')


  })




});
