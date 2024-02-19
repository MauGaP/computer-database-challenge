import {
  COMPANY_SELECT,
  CREATE_BUTTON,
  DISCONTINUED_INPUT,
  INTRODUCED_INPUT,
  NAME_INPUT,
} from './pageobjects/add-computer.page';
import {
  clickElement,
  navigateTo,
  selectDropdownOption,
  typeOnElement,
  validateElementText,
} from './pageobjects/base.page';
import {
  ADDCOMPUTER_BUTTON,
  CONFIRMATION_ALERT,
  FIRSTNAME_TABLEDATA,
  HOME_URL,
  SEARCH_INPUT,
  SUBMITFILTER_BUTTON,
} from './pageobjects/computers.page';
import { createNextYearDate, createTodaysDate } from './utils/date-time-variables';
import { createRandomName } from './utils/name-variables';

describe('computer creation', () => {
  it('adds a new computer with only name', () => {
    var name = createRandomName();

    navigateTo(HOME_URL);

    clickElement(ADDCOMPUTER_BUTTON);
    typeOnElement(NAME_INPUT, name);
    clickElement(CREATE_BUTTON);

    validateElementText(CONFIRMATION_ALERT, `Computer ${name} has been created`);
  });

  it('adds a new computer with all data', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    navigateTo(HOME_URL);

    clickElement(ADDCOMPUTER_BUTTON);
    typeOnElement(NAME_INPUT, name);
    typeOnElement(INTRODUCED_INPUT, today);
    typeOnElement(DISCONTINUED_INPUT, nextYear);
    selectDropdownOption(COMPANY_SELECT, 'Sony');
    clickElement(CREATE_BUTTON);

    validateElementText(CONFIRMATION_ALERT, `Computer ${name} has been created`);
  });

  it('searches for an already created computer', () => {
    navigateTo(HOME_URL);

    typeOnElement(SEARCH_INPUT, 'Compaq');
    clickElement(SUBMITFILTER_BUTTON);

    validateElementText(FIRSTNAME_TABLEDATA, 'Compaq');
  });

  it('adds a computer and searches for it', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    navigateTo(HOME_URL);

    clickElement(ADDCOMPUTER_BUTTON);
    typeOnElement(NAME_INPUT, name);
    typeOnElement(INTRODUCED_INPUT, today);
    typeOnElement(DISCONTINUED_INPUT, nextYear);
    selectDropdownOption(COMPANY_SELECT, 'Sony');
    clickElement(CREATE_BUTTON);

    validateElementText(CONFIRMATION_ALERT, `Computer ${name} has been created`);

    typeOnElement(SEARCH_INPUT, name);
    clickElement(SUBMITFILTER_BUTTON);

    validateElementText(FIRSTNAME_TABLEDATA, name);
  });
});
