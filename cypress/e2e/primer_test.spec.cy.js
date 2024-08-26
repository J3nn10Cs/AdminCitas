/// <reference types="cypress"/>
describe('carga la pagina principal', () => {
  it('carrga la pg principal', () => {
    //Primero visita el sitio web
    cy.visit('/index.html')
    //Verificar el elemento y su texto
    cy.contains('h1','Seguimiento Pacientes')
    //si existe 
    cy.get('[data-cy="titulo-proyecto"]').should('exist');

    //Verificar que exista el elemento y contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      //igual
      .should('equal','Seguimiento Pacientes Veterinaria')

    //Verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('not.equal','No Hay Pacientes xd')
  })
})