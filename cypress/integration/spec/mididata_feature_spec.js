context('Actions', () => {
  beforeEach(() => {
    cy.visit('azlan.html')
  })

  // https://on.cypress.io/interacting-with-elements

  it('input midi data', () => {
    cy.get('input[name=username]')
       .type('Rob')

    cy.get('select[name=instrument]')
       .select('Piano')
   	cy.get('select[name=jSession]')
   	.select('Create a new session')

   	cy.get('input[name=new_session]')
       .type('newest session')

    cy.get('#begin_jamming').submit();

    cy.get('#recording').check();


    {'a'};
    cy.wait(500);

    {'s'};
    cy.wait(700);

    {'h'};
    cy.wait(350);

    cy.get('#recording').uncheck();

    cy.get('#save_recording').click();

     //cy.location("pathname").should('eq', '/jamming.html')
     
     //cy.contains('Welcome, Rob! You chose Piano for this session')

  })




});
