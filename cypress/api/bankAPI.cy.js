/// <reference types="cypress"/>
const data = require('../fixtures/dadosBancosAPI')

before(() => {
    cy.getToken()
})

context('Testes de API - Perguntas 1 a 5 do docx', () => {

    /* 1 - Busque o token de autenticação e utilize-o nas próximas requests das APIs implementadas.
    Você deve passar esse dado do Token como Authorization: Type ‘bearer token’.*/
    it('Autenticação - Buscando o token', () => {

        cy.api({
            method: 'GET',
            url: `${data.api.baseUrl}/auth`,
            failOnStatusCode: false
        }).then(({ body, status }) => {
            expect(status).eq(200)
            expect(body).have.property('token')
        })

    })

    // 2 - Quais são os métodos e a URL que devem ser chamados para retornar todos os bancos cadastrados e qual é o retorno dessa chamada?
    it('GET - Retornando todos os bancos cadastrados', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'GET',
            url: `${data.api.baseUrl}/bank`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            }
        }).then(({ body, status }) => {
            expect(status).eq(200)
            cy.log(`Retorno da chamada: ${JSON.stringify(body)}`)
        })

    })

    // 3 - Como realizar uma chamada na URL para retornar os bancos do estado de SC? Não esqueça de usar query parameters.
    it('GET - Retornando todos os bancos do estado SC', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'GET',
            url: `${data.api.baseUrl}/bank?estadoAtuacao=SC`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            }
        }).then(({ status }) => {
            expect(status).eq(200)
        })

    })

    // 4 - Realize alteração das informações do Banco do Brasil na API para: ‘estadoAtuacao’: ‘SP’ e valor de ‘juros’: 15,00 usando o campo ‘ID’
    it('PUT - Alterando estado de atuação e valor de jurus do Banco do Brasil', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'PUT',
            url: `${data.api.baseUrl}/bank?id=1`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            },
            body: {
                'estadoAtuacao': 'SP',
                'juros': '15,00%'
            }
        }).then(({ body, status }) => {
            expect(status).eq(200)
            expect(body[0].mensagem).eq('Registro alterado com sucesso!')
            expect(body[1].id).eq(1)
            expect(body[1].banco).eq('Banco do Brasil')
            expect(body[1].estadoAtuacao).eq('SP')
            expect(body[1].juros).eq('15,00%')
        })

    })

    // 5 - Adicione um novo banco com os seguintes dados: Dados: Banco Teste, SC, 10, 00 %.
    it('POST - Adicionando um novo Banco', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'POST',
            url: `${data.api.baseUrl}/bank`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            },
            body: data.banco.novoBanco,

        }).then(({ body, status }) => {
            expect(status).eq(201)
            expect(body[1].mensagem).eq('Banco adicionado com sucesso!')
            expect(body[0].banco).eq('Banco Teste')
            expect(body[0].estadoAtuacao).eq('SC')
            expect(body[0].juros).eq('10,00%')
        })
    })

})

context('Testes de API - Cenários de testes descritos no item 6 do docx', () => {
    it('Funcional - Buscando banco inexistente', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'GET',
            url: `${data.api.baseUrl}/bank?id=a1b2c3`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            }
        }).then(({ body }) => {
            expect(body[1].mensagem).eq('O banco não existe')
        })

    })

    it('Funcional - Buscar um banco sem  informar o token', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'GET',
            url: `${data.api.baseUrl}/bank`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
            }
        }).then(({ status }) => {
            expect(status).eq(401)
        })

    })

    it('Funcional - Criar um banco sem informar os campos no body', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'POST',
            url: `${data.api.baseUrl}/bank`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            },
        }).then(({ body }) => {
            expect(body[1].mensagem).eq('Não foram informados os campos necessários')
        })

    })

    it('Não Funcional - Valida o tempo de resposta ao criar um banco', { env: { hideCredentials: true } }, () => {

        cy.api({
            method: 'POST',
            url: `${data.api.baseUrl}/bank`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${Cypress.env('token')}`
            },
            body: data.banco.novoBanco,

        }).then(({ duration, status }) => {
            expect(status).eq(201)
            expect(duration).be.lessThan(350)
        })

    })


})