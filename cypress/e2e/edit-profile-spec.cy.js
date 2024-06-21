describe('Edit Profile Scenarios', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('input[name="email"]').should('be.visible').type('subediGAURAV15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('GAURAV');
    cy.get('input[name="submit"]').should('be.visible').click();
  });

  it('TC06-01: Should save changes with valid data', () => {
    cy.contains('Edit Profile').click();
  
    cy.get('input[name="user[surname]"]').clear().type('Oli');
    cy.get('input[name="user[firstname]"]').clear().type('KP');
    cy.get('input[name="user[phone]"]').clear().type('0987654321');
    cy.get('input[name="user[address_attributes][street]"]').clear().type('Baluwatar');
    cy.get('input[name="user[address_attributes][city]"]').clear().type('Kathmandu');
    cy.get('input[name="user[address_attributes][county]"]').clear().type('No County in Nepal');
    cy.get('input[name="user[address_attributes][postcode]"]').clear().type('12345');
    cy.get('input[name="commit"]').click();
    
  
  });

  it('TC06-02: Should display error messages with invalid data', () => {
    cy.contains('Edit Profile').click();
    
    cy.get('input[name="user[surname]"]').clear().type('Bhatta');
    cy.get('input[name="user[firstname]"]').clear().type('Biraj');
    cy.get('input[name="user[phone]"]').clear().type('9&&*&0084477');
    cy.get('input[name="user[address_attributes][street]"]').clear().type('Laxmana');
    cy.get('input[name="user[address_attributes][city]"]').clear().type('Bardiya');
    cy.get('input[name="user[address_attributes][county]"]').clear().type('County$Chhaina');
    cy.get('input[name="user[address_attributes][postcode]"]').clear().type('#$%991');
    cy.get('input[name="commit"]').click();
    
  });

  it('TC06-03: Should save profile without making changes', () => {
    cy.contains('Edit Profile').click();
    
    cy.get('input[name="commit"]').click();
    
    cy.contains('Profile').click();
    cy.get('input[name="user[surname]"]').should('have.value', 'subediGAURAV15@gmail.com');
    cy.get('input[name="user[firstname]"]').should('have.value', 'GAURAV');
    cy.get('input[name="user[phone]"]').should('have.value', '1234567890');
    cy.get('input[name="user[address_attributes][street]"]').should('have.value', 'Original Street');
    cy.get('input[name="user[address_attributes][city]"]').should('have.value', 'Original City');
    cy.get('input[name="user[address_attributes][county]"]').should('have.value', 'Original County');
    cy.get('input[name="user[address_attributes][postcode]"]').should('have.value', 'Original Post Code');
  });
});
