class MenuBar {
  elements = {
    profileBtn: () => cy.get('a[href*="profile"]'),
    mapsBtn: () => cy.get('a[href*="maps"]'),
    flightsBtn: () => cy.get('a[href*="flight"]'),
    uavBtn: () => cy.get('a[href*="uav"]'),
    notamBtn: () => cy.get('a[href*="notam"]'),
    settingsBtn: () => cy.get('a[href*="settings"]')
  };

  clickProfile() {
    this.elements.profileBtn().click();
  }

  clickUAV() {
    this.elements.uavBtn().click();
  }

  clickSettings() {
    this.elements.settingsBtn().click();
  }
}

export const menuBar = new MenuBar();
