describe('Testing ModsenYouTube', () => {
  it('Testing search', () => {
    cy.visit('http://localhost:8080/');
    cy.get('input').type('sherlock holmes');
    cy.get('form').submit();
    cy.get('main')
      .children()
      .contains(/sherlock holmes/i);
  });
  it('Testing theme', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test-id="theme-id"]').click();
    cy.get('main').should('have.css', 'background-color').and('equal', 'rgb(56, 56, 56)');
  });
  it('Testing genre selector', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test-id="биография"]').click();
    cy.get('main')
      .children()
      .contains(/биография/i);
  });
  it('Testing MovieItems cards', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test-id="movie-card-id"]').children();
  });
});
