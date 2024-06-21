describe('Retrieve Quotation Scenarios', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('input[name="email"]').should('be.visible').type('subediGAURAV15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('GAURAV');
    cy.get('input[name="submit"]').should('be.visible').click();
  });

  it('TC04-01: Should retrieve and display details of a valid quotation', () => {
    cy.contains('Retrieve Quotation').click();
    
    cy.get('input[name="id"]').should('be.visible').type('36474');
    cy.get('#getquote').should('be.visible').click();
    cy.contains('Quotation').should('exist');
    
  });

  it('TC04-02: Should display an error message for an invalid quotation ID', () => {
    cy.contains('Retrieve Quotation').click();
    cy.get('input[name="id"]').should('be.visible').type('Jpayotei');
    cy.get('#getquote').should('be.visible').click();
    
  });
});
