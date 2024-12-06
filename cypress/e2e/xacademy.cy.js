

describe('template spec', () => {
  it('passes', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('.orangehrm-login-layout-blob');
    cy.get('.orangehrm-login-branding > img');
    cy.get('.orangehrm-login-branding');
    cy.get('.oxd-text--h5');
    cy.get('.oxd-sheet');
    cy.get('.oxd-sheet > :nth-child(1)');
    cy.get('.oxd-sheet > :nth-child(2)');
    cy.get('.oxd-form');
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-icon');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    cy.get('.oxd-button');
    cy.get('.orangehrm-login-forgot > .oxd-text');
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)');
    cy.get('.orangehrm-copyright-wrapper > :nth-child(2)');
    cy.get('.orangehrm-login-footer-sm');
    cy.get('.orangehrm-login-logo > img');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label');
    


  });
});
