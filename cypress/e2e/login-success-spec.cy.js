describe('Login Success Scenarios', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
  });

  it('TC02_01: Validate logging in with valid credentials', () => {
    cy.get('input[name="email"]').should('be.visible').type('subedigaurav15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('123456');
    cy.get('input[name="submit"]').should('be.visible').click();
    cy.url().should('include', '/insurance/v1/header.php');
  });

  it('TC02_02: Validate logging in with case-sensitive username', () => {
    cy.get('input[name="email"]').should('be.visible').type('SUBEDIgaurav15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('gaurav');
    cy.get('input[name="submit"]').should('be.visible').click();
    cy.url().should('include', '/insurance/v1/header.php');
  });

  it('TC02_03: Validate logging in with case-sensitive password', () => {
    cy.get('input[name="email"]').should('be.visible').type('subediGAURAV15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('GAURAV');
    cy.get('input[name="submit"]').should('be.visible').click();
    cy.url().should('include', '/insurance/v1/header.php');
  });
});
