import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { uavPage } from '@pages/uavPage';

When('clicks the Create UAV button on the UAVs tab', () => {
  uavPage.clickCreateUAVBtn();
});

When('enters and selects the following values on the create UAV form', (table) => {
  const nickname = table.rowsHash()['Nickname'];
  const brand = table.rowsHash()['Brand'];
  const model = table.rowsHash()['Model'];
  const weightCategory = table.rowsHash()['Weight Category'];
  uavPage.fillInCreateUAVForm(nickname, brand, model, weightCategory);
});

When('clicks the Save button on the create UAV form', () => {
  uavPage.clickSaveBtn();
});

Then('this new UAV should be added successfully', () => {
  uavPage.elements.deleteBtn().should('be.visible');
});
