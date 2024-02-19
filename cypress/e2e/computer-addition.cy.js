import {
  COMPANY_SELECT,
  CREATE_BUTTON,
  DISCONTINUED_INPUT,
  INTRODUCED_INPUT,
  NAME_INPUT,
} from './pageobjects/add-computer.page';
import {
  ADDCOMPUTER_BUTTON,
  CONFIRMATION_ALERT,
  FIRSTNAME_TABLEDATA,
  SEARCH_INPUT,
  SUBMITFILTER_BUTTON,
} from './pageobjects/home.page';
import { createNextYearDate, createTodaysDate } from './utils/date-time-variables';
import { createRandomName } from './utils/name-variables';

describe('computer creation', () => {
  it('adds a new computer with only name', () => {
    var name = createRandomName();

    cy.visit('/');
    cy.get(ADDCOMPUTER_BUTTON).click();
    cy.get(NAME_INPUT).type(name);
    cy.get(CREATE_BUTTON).click();

    cy.get(CONFIRMATION_ALERT).should('contain', `Computer ${name} has been created`);
  });

  it('adds a new computer with all data', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    cy.visit('/');
    cy.get(ADDCOMPUTER_BUTTON).click();
    cy.get(NAME_INPUT).type(name);
    cy.get(INTRODUCED_INPUT).type(today);
    cy.get(DISCONTINUED_INPUT).type(nextYear);
    cy.get(COMPANY_SELECT).select('Sony');
    cy.get(CREATE_BUTTON).click();

    cy.get(CONFIRMATION_ALERT).should('contain', `Computer ${name} has been created`);
  });

  it('searches for an already created computer', () => {
    cy.visit('/');

    cy.get(SEARCH_INPUT).type('Compaq');
    cy.get(SUBMITFILTER_BUTTON).click();

    cy.get(FIRSTNAME_TABLEDATA).should('contain', 'Compaq');
  });

  it('adds a computer and searches for it', () => {
    var name = createRandomName();
    var today = createTodaysDate();
    var nextYear = createNextYearDate();

    cy.visit('/');
    cy.get(ADDCOMPUTER_BUTTON).click();
    cy.get(NAME_INPUT).type(name);
    cy.get(INTRODUCED_INPUT).type(today);
    cy.get(DISCONTINUED_INPUT).type(nextYear);
    cy.get(COMPANY_SELECT).select('Sony');
    cy.get(CREATE_BUTTON).click();

    cy.get(CONFIRMATION_ALERT).should('contain', `Computer ${name} has been created`);

    cy.get(SEARCH_INPUT).type(name);
    cy.get(SUBMITFILTER_BUTTON).click();

    cy.get(FIRSTNAME_TABLEDATA).should('contain', name);
  });
});
