import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { settingsPage } from '@pages/settingsPage';

Then('the following links on the Settings tab can be verified and functioning', () => {
  settingsPage.verifyFirstLink();
});

Then('the user can successfully Sign Out', () => {
  settingsPage.signout();
});
