import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '@pages/homePage';
import { menuBar } from '@pages/commons/menuBar';

Given('the user clicks the profile picture to sign in', () => {
  menuBar.clickProfile();
});

When('the user enters the username {string}, the password {string}, and clicks on the submit button', (username, password) => {
  homePage.submitLogin(username, password);
});

Then('the user can successfully sign into the pilot web application', () => {
  cy.url().should('contains', '/profile');
});

Given('the user have successfully sign into the pilot web application', () => {
  cy.visit('/');
  menuBar.clickProfile();
  homePage.submitLogin('airshare.tester@gmail.com', 'ThisPass1');
  cy.url().should('contains', '/profile');
});
