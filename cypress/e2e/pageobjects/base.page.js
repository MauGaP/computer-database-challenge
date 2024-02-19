export const navigateTo = url => {
  cy.visit(url);
};

export const clickElement = selector => {
  cy.get(selector).click();
};

export const selectDropdownOption = (selector, option) => {
  cy.get(selector).select(option);
};

export const typeOnElement = (selector, text) => {
  cy.get(selector).type(text);
};

export const validateElementText = (selector, text) => {
  cy.get(selector).should('contain', text);
};
