/// <reference types="cypress"/>
describe('Llenar y Editar la cita seleccionada', () => {

    //Llenar los campos
    it('Campos para una cita', () => {
        //Primero visita el sitio web
        cy.visit('/index.html')
    
        cy.get('[data-cy="mascota-input"]')
            .type('Kira');  
    
        cy.get('[data-cy="propietario-input"]')
            .type('Jennifer');  
    
        cy.get('[data-cy="email-input"]')
            .type('jennifer15aries@gmail.com');  
    
        cy.get('[data-cy="fecha-input"]')
            .type('2024-08-26'); 
    
        cy.get('[data-cy="sintomas-texaera"]')
            .type('No quiere comer');  
    
        cy.get('[data-cy="submit-cita"]')
            .click()
    })

    //Editar las citas
    it('Editando citas', () => {
        cy.get('[data-cy="btn-editar"]')
            .click()
        
        //Reescribir
        cy.get('[data-cy="mascota-input"]')
            //Limpiar el value previsto
            .clear()
            .type('Nueva Kira')
        
        //Guardar los cambios
        cy.get('[data-cy="submit-cita"]')
            .click()
    })
})