//Variables and methods can be added with the static keyword for direct use
class HomePage {
  elements = {
    emailInput: () => cy.get('[data-testid="argus-pilot-web:signin-form:email-input"]'),
    passwordInput: () => cy.get('[data-testid="argus-pilot-web:signin-form:password-input"]'),
    submitBtn: () => cy.get('[data-testid="argus-pilot-web:signin-form:submit-button"]')
  };

  submitLogin(username, password) {
    this.elements.emailInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.submitBtn().click();
  }
}

export const homePage = new HomePage();
