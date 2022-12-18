import { selectOptionWithText } from '@support/utils';
class UAVPage {
  elements = {
    createUAVBtn: () => cy.get('.create-uav-button'),
    uavCardList: () => cy.get('.card-container'),
    nicknameInput: () => cy.get('[data-testid="argus-pilot-web:uav-detail:name-input"]'),
    brandSelect: () => cy.get('[data-testid="argus-pilot-web:uav-detail:brand-select"]'),
    modelSelect: () => cy.get('[data-testid="argus-pilot-web:uav-detail:model-select"]'),
    weightSelect: () => cy.get('[data-testid="argus-pilot-web:uav-detail:weight-select"]'),
    serialInput: () => cy.get('[data-testid="argus-pilot-web:uav-detail:serial-input"]'),
    saveBtn: () => cy.get('[data-testid="argus-pilot-web:uav-detail:save-button"]'),
    deleteBtn: () => cy.get('[data-testid="argus-pilot-web:uav-detail:delete-button"]')
  };

  clickCreateUAVBtn() {
    this.elements.createUAVBtn().click();
  }

  clickSaveBtn() {
    this.elements.saveBtn().click();
  }

  fillInCreateUAVForm(nickname, brand, model, weightCategory) {
    this.elements.nicknameInput().type(nickname);
    selectOptionWithText(this.elements.brandSelect(), brand);
    selectOptionWithText(this.elements.modelSelect(), model);
    selectOptionWithText(this.elements.weightSelect(), weightCategory);
  }
}

export const uavPage = new UAVPage();
