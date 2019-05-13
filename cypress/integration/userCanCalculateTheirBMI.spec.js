describe('BMI Converter', () => {
  before(function() {
      cy.visit('http://localhost:3000');
  });

  beforeEach(function() {
      // Reload the application between tests to reset state
      cy.reload();
  });

  it('should display "BMI Converter" text on page', () => {
      cy.contains('BMI Converter');
  });

  describe('Metric method', () => {
      beforeEach(() => {
          // This before block will be executed prior to each test in this describe block
          cy.get('.metric')
          cy.get('input[name="weight"]').type('95')
          cy.get('input[name="height"]').type('186')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 27.46')
      })
  })

  describe('Imperial method', async () => {
      beforeEach( async () => {
          // This before block will be executed prior to each test in this describe block
          cy.get('.imperial')
          cy.get('input[name="weight_stone"]').type('15')
          cy.get('input[name="weight_pounds"]').type('4')
          cy.get('input[name="height_feet"]').type('6')
          cy.get('input[name="height_inches"]').type('5')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 26.38')
      })
  })
});