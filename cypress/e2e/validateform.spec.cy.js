/// <reference types="cypress"/>
describe('Validate Form', () => {
    it('Submit to the form and show error alert',() => {
        cy.visit('/index.html')

        cy.get('[data-cy="formulario"]')
            .submit();
        
        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son obligatorios')

        //Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'uppercase')
    })
})