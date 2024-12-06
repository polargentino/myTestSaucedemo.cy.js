describe('SauceDemo Test Suite', () => {
    // URL base del sitio
    const baseUrl = 'https://www.saucedemo.com';
  
    // Datos de usuarios
    const users = {
      standard: { username: 'standard_user', password: 'secret_sauce' },
      problem: { username: 'problem_user', password: 'secret_sauce' },
    };
  
    // Función reutilizable para iniciar sesión
    const login = (username, password) => {
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
    };
  
    // Función reutilizable para agregar productos al carrito
    const addProductsToCart = () => {
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).find('.btn_inventory').click();
      });
    };
  
    // Función reutilizable para realizar el checkout
    const completeCheckout = () => {
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.get('#first-name').type('Nombre');
      cy.get('#last-name').type('Apellido');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    };
  
    // Función reutilizable para cerrar sesión
    const logout = () => {
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
    };
  
    // Antes de cada prueba, visitar el sitio
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    // Prueba para el usuario estándar
    it('Compra con usuario estándar', () => {
      login(users.standard.username, users.standard.password);
      addProductsToCart();
      completeCheckout();
      logout();
    });
  
    // Prueba para el usuario problemático
    it('Compra con usuario problemático', () => {
      login(users.problem.username, users.problem.password);
      addProductsToCart();
      completeCheckout();
      logout();
    });
  });
  