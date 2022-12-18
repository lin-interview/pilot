const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  pageLoadTimeout: 20000,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  chromeWebSecurity: false,
  retries: {
    runMode: 1,
    openMode: 0
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://pilot.demo.airshare-utm.com/',
    env: {
      TAGS: 'not @ignore'
    }
  }
});
