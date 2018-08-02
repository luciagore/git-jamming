context('Actions', () => {
beforeEach(() => {
  cy.visit('lucy.html')
})

// https://on.cypress.io/interacting-with-elements

it('input midi data', () => {
       cy.get('input[name=username]')
          .type('Rob')

       cy.get('select[name=instrument]')
       .select('Piano')

      cy.get('select[name=jSession]')
      .select('1')

       cy.get('select[name=tracks_in_js]')
          .select('t1')

     cy.get('Select[name=Notes_in_track]')
     .select('m2')

       cy.get('input[name=new_track]')
         .type('hello')

       cy.get('input[name=new_session]')
         .type('session name')


       cy.get('#begin_jamming').submit();

})




});
