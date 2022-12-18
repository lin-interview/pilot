export const selectOptionWithText = (element, text) => {
  element.click();
  cy.get('ul[role="listbox"] > li').each(($ele) => {
    if ($ele.text() == text) {
      cy.wrap($ele).click();
    }
  });
};
