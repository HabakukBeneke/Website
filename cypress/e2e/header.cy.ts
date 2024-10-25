describe('Header Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.header', { timeout: 20000 }).should('be.visible');
    cy.get('.header__item', { timeout: 10000 }).should('exist');
  });

  it('should render all header options correctly', () => {
    cy.get('.header__item').should('have.length.greaterThan', 0);
  });

  it('should navigate to the correct route when a header option is clicked', () => {
    cy.get('.header__item').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('a.header__link').click();
        cy.url().should('include', $el.attr('href'));
      });
      cy.go('back');
    });
  });

  it('should correctly apply active class when a route is active', () => {
    cy.get('.header__link').first().click();
    cy.get('.header__link').first().should('have.class', 'is-active');
  });

  it('should apply correct icon classes based on route', () => {
    cy.get('.header__item').each(($el) => {
      cy.wrap($el)
        .find('i')
        .should('have.attr', 'class') 
        .and('match', /icon-[a-z]+(-t)?/);
    });
  });

  it('should show text when hovering over a header link', () => {
    cy.get('.header__link').first().trigger('mouseover');
    cy.get('.header__text').first().should('have.css', 'opacity', '1');
  });

});
