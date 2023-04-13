// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Há um erro não capturado com a biblioteca Webfont que está retornando a mensagem: 'WebFont is not defined'
// Como quero prosseguir com os testes vou retornar false, para que o cypress não encerre o teste como falha.
// https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('WebFont is not defined')) {
        return false
    }
})

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-steps'
// Alternatively you can use CommonJS syntax:
// require('./commands')