/// <reference types="cypress"/>

describe('Desafio Teste End to End - ecred Simulador', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Realiza simulação de R$ 1.000 em 6x, o valor esperado deve ser 6x R$ 271,27', () => {

    cy.step('Utiliza o slider para definir o valor desejado')
    cy.sliderRangeValue(1000)

    cy.step('Utiliza o slider de meses para definir em quatas vezes o valor será dividido')
    cy.sliderRangeMonth(6)

    cy.step('Valida se está exibindo o valor esperado')
    cy.validaValorEsperado('271,27')

  })

  it('Realiza simulação de R$ 4.000 em 12x, o valor esperado deve ser 12x R$ 478,49', () => {

    cy.step('Utiliza o slider para definir o valor desejado')
    cy.sliderRangeValue(4000)

    cy.step('Utiliza o slider de meses para definir em quantas vezes o valor será dividido')
    cy.sliderRangeMonth(12)

    cy.step('Valida se está exibindo o valor esperado')
    cy.validaValorEsperado('478,49')

  })

  it('Realiza simulação de R$ 6.000 em 24x, o valor esperado deve ser 24x R$ 347,89', () => {

    cy.step('Utiliza o slider para definir o valor desejado')
    cy.sliderRangeValue(6000)

    cy.step('Utiliza o slider de meses para definir em quatas vezes o valor será dividido')
    cy.sliderRangeMonth(24)

    cy.step('Valida se está exibindo o valor esperado')
    cy.validaValorEsperado('347,89')

  })

})