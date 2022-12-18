import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { menuBar } from '@pages/commons/menuBar';

Given('the user navigates to the pilot web application on the browser', () => {
  cy.visit('/');
});

When('the user selects the {string} button on the left hand side of the application', (tabName) => {
  switch (tabName) {
    case 'UAV':
      menuBar.clickUAV();
      break;
    case 'Settings':
      menuBar.clickSettings();
      break;
    default:
      cy.log(`Button of ${tabName} is not supported yet`);
  }
});
