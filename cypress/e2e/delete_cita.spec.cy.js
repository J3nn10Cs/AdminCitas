/// <reference types="cypress"/>
describe('Llenar y Eliminar la cita', () => {

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
    it('Eliminando una cita', () => {
        cy.get('[data-cy="btn-eliminar"]')
            .click()
        
        // cy.get('[data-cy="citas-headinga]')
        //     .invoke('text')
        //     .should('equal','No Hay Pacientes comienza creado uno')
    })
})