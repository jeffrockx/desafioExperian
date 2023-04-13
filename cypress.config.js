const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  numTestsKeptInMemory: 3,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    overwrite: true,
  },

  e2e: {
    baseUrl: 'https://www.serasa.com.br/ecred/simulador',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
