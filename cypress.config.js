const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h439it',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/BombayUITests/*.js'
  },
});
