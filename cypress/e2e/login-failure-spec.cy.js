describe('Login Failure Scenarios', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    beforeEach(() => {
      cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    });
  
    it('TC01_01: Validate logging in with invalid username and valid password', () => {
      cy.get('input[name="email"]') 
        .should('be.visible') 
        .type('jpayotei@proshore.com'); 
  
      
      cy.get('input[name="password"]') 
        .should('be.visible') 
        .type('123456'); 
  
      cy.get('input[name="submit"]').should('be.visible').click();
  
      cy.contains('Enter your Email address and password correct').should('be.visible');
    });
  
    it('TC01_02: Validate logging in with invalid password and valid username', () => {
      cy.get('input[name="email"]')
        .should('be.visible')
        .type('subedigaurav15@gmail.com'); 
  
      cy.get('input[name="password"]') 
        .should('be.visible') 
        .type('KhaikKhaik'); 
  
      cy.get('input[name="submit"]').should('be.visible').click(); 
  
      cy.contains('Enter your Email address and password correct').should('be.visible'); 
    });
  
    it('TC01_03: Validate logging in with invalid username and password', () => {
      
      cy.get('input[name="email"]') 
        .should('be.visible') 
        .type('jpayotei@proshore.com'); 
  
      
      cy.get('input[name="password"]') 
        .should('be.visible') 
        .type('KhaikKhaik'); 
  
      
      cy.get('input[name="submit"]').should('be.visible').click(); 
  
      
      cy.contains('Enter your Email address and password correct').should('be.visible'); 
    });
  });
  