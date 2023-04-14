# Desafio Experian Testes _end-to-end_ e de _API_  

Testes end-to-end (e2e) escritos com Cypress

## Pré-Requisitos

Para executar este projeto, você precisa:

- [nodejs](https://nodejs.org/en/) (Usando a versão `18.15.0` enquanto escrevo este doc)
- [NPM] (Usando a versão `9.5.0` enquanto escrevo este doc)

**Nota:** Quando instalamos o nodejs, o NPM é automaticamente instalado também.

## Instalação

Para instalar as dependências de desenvolvimento, estando na pasta raíz do projeto rode `npm install` (ou `npm i`)

## Estrutura de pastas

`e2e` - Pasta onde ficam os scripts de testes.  
`fixtures` - Pasta destinada a arquivos a serem utilizados nos testes ou mocks e etc..  
`support` - Pasta geralmente utilizada para criação de comandos customizados, funções, migrations...  
**Obs:** Os comandos customizados podem importados dentro de cada arquivo de teste ou no arquivo e2e.js da pasta support, ao executar um teste o cypress carrega todas as configurações deste arquivo antes da execução.  

## Executando os testes manualmente

Neste projeto, você pode executar os teste em modo interativo ou em modo headless.

### Modo Headless

Na raiz do projeto rode `npm cy:run` ou `npx cypress run` para executar todos os teste em modo headless.  

Caso necessite executar apenas uma pasta ou arquivo específico, basta passar a flag --spec, seguida do caminho da pasta ou arquivo: `npx cypress run "cypress/e2e/arquivo.cy.js"`

Para os testes de `API` execute o comando `npx cypress run --spec "cypress/api/**"` ou `npm cy:test:api`

### Modo Interativo

Na raiz do projeto rode `npx cypress open` ou `npm cy:open`  para abrir o Cypress Test Runner e executar os teste em modo interativo.

## Relatório de execução

Estamos utilizando o plugin `cypress-mochawesome-reporter` para gerar o relatório com os resultados dos testes, ao fim da execução verifique o arquivo `index.html` na pasta `cypress/results`

## Plugins utilizados

`cypress-mochawesome-reporter` - Utilzado gerar um relatório html ao final das execuções em modo headless, este relatório fica no caminho: "cypress/reports/html/index.html".  
**Para mais detalhes consultar a documentação**: https://www.npmjs.com/package/cypress-mochawesome-reporter  

`Cypress Steps plugin` - Adiciona etapas na linha do tempo e nos logs de erros.  
**Para mais detalhes consultar a documentação**: https://github.com/filiphric/cypress-plugin-steps  

`Cypress ESLint Plugin` - Adiciona análise estática de código ao projeto de testes.  
**Para mais detalhes consultar a documentação**: https://github.com/cypress-io/eslint-plugin-cypress  

`Cypress plugin API` - Este plugin sobrescreve o cy.request, possibilitando visualizar informações das chamadas de API na tela de execução do cypress, algo semelhante ao postman.  
**Para mais detalhes consultar a documentação**: https://github.com/filiphric/cypress-plugin-api  