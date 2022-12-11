describe('Pagina principal test', () => {
  it('Visitar la agina inicial', () => {
    cy.visit('/');
    cy.contains('Pacientes');
    cy.contains('Citas');
    cy.contains('OdontoCeiba');
    cy.contains('Lorem ipsum dolor sit amet consectetur');
    cy.contains('Agendar');
  });
});
