/// <reference types="cypress" />
const data = require('../fixtures/dadosBancosAPI')

Cypress.Commands.add('getToken', () => {
    cy.request({
        method: 'GET',
        url: `${data.api.baseUrl}/auth`,
    }).then(({ body, status }) => {
        expect(status).eq(200)
        expect(body).have.property('token')

        Cypress.env('token', body.token)
    })
})