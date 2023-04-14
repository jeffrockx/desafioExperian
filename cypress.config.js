const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  retries: {
    runMode: 1,
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
    specPattern: ['cypress/e2e/**/*.{js,jsx,ts,tsx}', 'cypress/api/**/*.{js,jsx,ts,tsx}'],

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
