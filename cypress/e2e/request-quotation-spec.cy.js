describe('Request New Quotation Scenarios', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; 
  });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('input[name="email"]').should('be.visible').type('subediGAURAV15@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('GAURAV');
    cy.get('input[name="submit"]').should('be.visible').click();
  });

  describe('Validate request quotation page contents', () => {
    it('Displays all necessary elements on the request quotation page', () => {
      cy.contains('Request Quotation').click();
      cy.contains('Request a quotation').should('exist');
      cy.contains('Policyexcess - 16%').should('exist');
      cy.contains('Windscreenrepair').should('exist');
      cy.contains('Excesspaid - 5%').should('exist');
      cy.contains('Start of policy:').should('exist');
      cy.contains('Last modified:').should('exist');
    });
  });

  describe('Validate dropdown functionalities', () => {
    it('Validates the dropdowns and their options', () => {
      cy.contains('Request Quotation').click();

      
      cy.get('#quotation_breakdowncover').should('be.visible').select('No cover').should('have.value', 'No cover');
      cy.get('#quotation_breakdowncover').select('Roadside').should('have.value', '2');
      cy.get('#quotation_breakdowncover').select('At home').should('have.value', '3');
      cy.get('#quotation_breakdowncover').select('European').should('have.value', '4');

      cy.get('#quotation_vehicle_attributes_parkinglocation').should('be.visible').select('Select').should('have.value', '');
      cy.get('#quotation_vehicle_attributes_parkinglocation').select('Driveway').should('have.value', 'Driveway');
      cy.get('#quotation_vehicle_attributes_parkinglocation').select('Garage').should('have.value', 'Garage');
      cy.get('#quotation_vehicle_attributes_parkinglocation').select('Street/Road').should('have.value', 'Road');

      cy.get('#quotation_vehicle_attributes_policystart_1i').should('be.visible').select('2025').should('have.value', '2025');
      cy.get('#quotation_vehicle_attributes_policystart_1i').select('2024').should('have.value', '2024');
      cy.get('#quotation_vehicle_attributes_policystart_1i').select('2014').should('have.value', '2014');

      cy.get('#quotation_vehicle_attributes_policystart_2i').should('be.visible').select('January').should('have.value', '1');
      cy.get('#quotation_vehicle_attributes_policystart_2i').select('December').should('have.value', '12');

      cy.get('#quotation_vehicle_attributes_policystart_3i').should('be.visible').select('1').should('have.value', '1');
      cy.get('#quotation_vehicle_attributes_policystart_3i').select('31').should('have.value', '31');
    });
  });
});
