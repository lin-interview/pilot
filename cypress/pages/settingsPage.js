import { menuBar } from '@pages/commons/menuBar';
class SettingsPage {
  elements = {
    linkList: () => cy.get('.links-container a[href]'),
    signoutBtn: () => cy.get('button.signout')
  };

  //since Cypress doesn't support new tab so used this workaround
  verifyFirstLink() {
    this.elements
      .linkList()
      .first()
      .as('firstLink')
      .invoke('attr', 'href')
      .then((linkURL) => {
        cy.log('URL is: ' + linkURL);
        cy.get('@firstLink').invoke('removeAttr', 'target').click();
        cy.location('href').should('eq', linkURL);
      });
    cy.go('back');
  }

  signout() {
    this.elements.signoutBtn().click();
    menuBar.elements.settingsBtn().should('not.exist');
  }
}

export const settingsPage = new SettingsPage();
