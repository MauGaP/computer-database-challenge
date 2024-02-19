import {
  COMPANY_SELECT,
  CREATE_BUTTON,
  DISCONTINUED_INPUT,
  INTRODUCED_INPUT,
  NAME_INPUT,
} from '../pageobjects/add-computer.page';
import { clickElement, selectDropdownOption, typeOnElement } from '../pageobjects/base.page';
import { ADDCOMPUTER_BUTTON } from '../pageobjects/computers.page';
import { createNextYearDate, createTodaysDate } from '../utils/date-time-variables';
import { tempStore } from '../utils/helper';
import { createRandomName } from '../utils/name-variables';

const { When } = require('@badeball/cypress-cucumber-preprocessor');

When('the user adds a computer with only the name', () => {
  var name = createRandomName();
  tempStore.storedName = name;

  clickElement(ADDCOMPUTER_BUTTON);
  typeOnElement(NAME_INPUT, name);
  clickElement(CREATE_BUTTON);
});

When('the user adds a computer with all the information', () => {
  var name = createRandomName();
  tempStore.storedName = name;
  var today = createTodaysDate();
  var nextYear = createNextYearDate();

  clickElement(ADDCOMPUTER_BUTTON);
  typeOnElement(NAME_INPUT, name);
  typeOnElement(INTRODUCED_INPUT, today);
  typeOnElement(DISCONTINUED_INPUT, nextYear);
  selectDropdownOption(COMPANY_SELECT, 'Sony');
  clickElement(CREATE_BUTTON);
});
