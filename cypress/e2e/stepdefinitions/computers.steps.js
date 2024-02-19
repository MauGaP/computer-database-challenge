const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor');
const { navigateTo, validateElementText, typeOnElement, clickElement } = require('../pageobjects/base.page');
const {
  COMPUTERS_URL,
  CONFIRMATION_ALERT,
  SEARCH_INPUT,
  SUBMITFILTER_BUTTON,
  FIRSTNAME_TABLEDATA,
} = require('../pageobjects/computers.page');
const { tempStore } = require('../utils/helper');

Given('the user is on the computer page', () => {
  navigateTo(COMPUTERS_URL);
});

When('the user searches for an existing computer', () => {
  tempStore.computer = 'Compaq';
  typeOnElement(SEARCH_INPUT, tempStore.computer);
  clickElement(SUBMITFILTER_BUTTON);
});

When('the user searches for the newly created computer', () => {
  tempStore.computer = tempStore.storedName;
  typeOnElement(SEARCH_INPUT, tempStore.computer);
  clickElement(SUBMITFILTER_BUTTON);
});

Then('the application displays a confirmation message', () => {
  validateElementText(CONFIRMATION_ALERT, `Computer ${tempStore.storedName} has been created`);
});

Then('the application displays the filtered computer', () => {
  validateElementText(FIRSTNAME_TABLEDATA, tempStore.computer);
});
