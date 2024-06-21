describe('View Own Profile Information', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('input[name="email"]').should('be.visible').type('subediGAURAV15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('GAURAV');
    cy.get('input[name="submit"]').should('be.visible').click();
  });

  it('TC05-01: Should display accurate and up-to-date profile information', () => {
    cy.contains('Profile').click();
    

    cy.contains('Title:').should('exist');
    cy.contains('Firstname:').should('exist');
    cy.contains('Surname:').should('exist');
    cy.contains('Phone:').should('exist');
    cy.contains('Dataofbirth:').should('exist');
    cy.contains('License type:').should('exist');
    cy.contains('License period:').should('exist');
    cy.contains('Occupation:').should('exist');
    cy.contains('Driver History:').should('exist');
    cy.contains('ADDRESS:').should('exist');
    cy.contains('Last modified:').should('exist');

    
  });
});
