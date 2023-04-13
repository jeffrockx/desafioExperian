/// <reference types="cypress" />

Cypress.Commands.add('sliderRangeValue', (valor) => {
    cy.get('#slider-range').should('be.visible')
        .invoke('val', valor) // define o valor do atributo value
        .trigger('input') // dispara o evento input para atualizar o valor do slider

})

Cypress.Commands.add('sliderRangeMonth', (valor) => {
    cy.get('#slider-range-month').should('be.visible')
        .invoke('attr', 'step', 6) // define o valor do atributo step para 6
        .invoke('attr', 'max', 48) // define o valor do atributo max para 48
        .invoke('val', valor) // define o valor do atributo value
        .trigger('input') // dispara o evento input para atualizar o valor do slider

    cy.get('#month-amount').should('be.visible').and('have.text', `${valor} meses`)
})

Cypress.Commands.add('validaValorEsperado', (valor) => {
    cy.get('#price-number').should('be.visible').and('have.text', valor)
})