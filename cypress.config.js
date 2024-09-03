const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '96xgrf',
  screenshotsFolder : "cypress/reports/mochareports/assets",
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "Json": true
    }

  },
  //npx cypress run --record --key 4da03a8c-1f54-41a0-afd1-b775ea25af33
  "screenshotOnRunFailure": true,
  "video": true, // Add this line to enable video recordings
  e2e: {
    baseUrl: "https://react-redux.realworld.io/",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"

  },

});
