const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '96xgrf',
  //npx cypress run --record --key 4da03a8c-1f54-41a0-afd1-b775ea25af33
  screenshotOnRunFailure:true,
  "video":true, // Add this line to enable video recordings
  e2e: {
    baseUrl: "https://react-redux.realworld.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
       },
  },
  
});
