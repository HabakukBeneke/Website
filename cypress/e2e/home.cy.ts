/// <reference types="cypress" />

describe('Hero Section E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the hero section', () => {
    cy.get('.hero').should('be.visible');
  });

  it('should display the correct title in the hero section', () => {
    cy.get('.hero__title').should('contain', 'Hola, mi nombre es Enrique Quero Web Developer');
  });

  it('should display colored span in the title', () => {
    cy.get('.hero__title--colored').should('contain', 'Enrique Quero').and('have.css', 'color');
  });

  it('should display the correct buttons in the hero section', () => {
    cy.get('.hero__button-list').should('be.visible');
    cy.get('.hero__button').should('have.length', 2);
  });

  it('should have a link to the portfolio page', () => {
    cy.get('.hero__button a')
      .contains('Descubre mis proyectos')
      .should('have.attr', 'href', '/portfolio');
  });

  it('should have a link to the about page', () => {
    cy.get('.hero__button a').contains('¿Quien soy?').should('have.attr', 'href', '/about');
  });

  it('should change button styles on hover', () => {
    cy.get('.hero__button a').first().trigger('mouseover');
    cy.get('.hero__button a').first().should('have.css', 'background');
  });

  it('should verify the responsiveness of title on smaller screens', () => {
    cy.viewport(1024, 768);
    cy.get('.hero__title').should('have.css', 'font-size', '30px');

    cy.viewport(375, 667);
    cy.get('.hero__title').should('have.css', 'font-size', '30px');
  });

  it('should verify the button font size at different viewports', () => {
    cy.viewport(425, 768);
    cy.get('.hero__button a').should('have.css', 'font-size', '16px');

    cy.viewport(768, 1024);
    cy.get('.hero__button a').should('have.css', 'font-size', '24px');
  });
});
